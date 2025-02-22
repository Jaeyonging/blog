import React, { useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import '../../style/quill.snow.css'
import { decodeEntities } from '../../util/util';
import ImageResize from 'quill-resize-image';

Quill.register('modules/ImageResize', ImageResize);
var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px'];
Quill.register(Size, true);


interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomReactQuill = ({ value, onChange, className }: Props) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dataValue, setDataValue] = useState<string>("");

  const toolbarOptions = [
    [{ 'size': ['14px', '16px', '18px'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['image'],
  ];

  const formats = [
    'size', "bold", "italic", "underline", "strike",
    "color", "background", "align",
    "list", "bullet", "link", "code-block",
    "blockquote", "script", "indent", "direction",
    "table", "video", "formula", "image"
  ];



  const modules = useMemo(() => {
    const ImageHandler = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.onchange = () => {
        const file = input.files ? input.files[0] : null;
        if (file) {
          setFiles((prevFiles) => [...prevFiles, file]);
          const reader = new FileReader();
          console.log(files)
          reader.onload = (e) => {
            const quillObj = quillRef.current?.getEditor();
            const range = quillObj?.getSelection(true);
            const base64 = e.target?.result;
            quillObj?.insertEmbed(range ? range.index : 0, "image", base64);

          };

          reader.readAsDataURL(file);
        }
      };
    };
    return {
      toolbar: {
        container: toolbarOptions,
        'handlers': {
          image: ImageHandler
        }
      },
      clipboard: {
        matchVisual: false,
      },
      ImageResize: {
        parchment: Quill.import('parchment')
      },
    };
  }, []);

  const handleSaveButton = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, 'text/html');
    const images = doc.querySelectorAll('img');
  
    images.forEach((img, index) => {
      if (files[index]) {
        img.setAttribute('src', `image${index + 1}`);
      }
    });
  
    const updatedContent = doc.body.innerHTML;
    console.log('Updated Content:', updatedContent);
    console.log('Files:', files);
  
    setDataValue(updatedContent);
  };


  return (
    <div className="relative border border-gray-300 rounded-md p-2 flex flex-col gap-2">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className={`${className}`}
      />
        <button className='bg-cardcolor text-white rounded-md p-2 border-[1px] border-gray-300' onClick={handleSaveButton}>파일 확인</button>
    </div>
  );
}

export default CustomReactQuill;
