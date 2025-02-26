import React, { forwardRef, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import '../../style/quill.snow.css';
import ImageResize from 'quill-resize-image';

Quill.register('modules/ImageResize', ImageResize);
var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px'];
Quill.register(Size, true);

interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const CustomReactQuill = forwardRef(({ value, onChange, className, setFiles }: Props, ref) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const toolbarOptions = [
    [{ size: ['14px', '16px', '18px'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['code-block'],
    ['image'],
  ];

  const formats = [
    'size', 'bold', 'italic', 'underline', 'strike',
    'color', 'background', 'align',
    'list', 'bullet', 'link', 'code-block', 
    'blockquote', 'script', 'indent', 'direction',
    'table', 'video', 'formula', 'image'
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
        handlers: {
          image: ImageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
    };
  }, [setFiles]);

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
    </div>
  );
});

export default CustomReactQuill;
