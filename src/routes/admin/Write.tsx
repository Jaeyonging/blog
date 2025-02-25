import { useState } from 'react';
import CustomReactQuill from '../../component/Admin/CustomReactQuill';
import PreviewSide from '../../component/Admin/PreviewSide';
import '../../style/quill.snow.css';

const Write = () => {
  const [summary, setSummary] = useState('');
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState<File[]>([]);   

  const handleSaveButton = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(summary, 'text/html');
    const images = doc.querySelectorAll('img');
  
    images.forEach((img, index) => {
      if (files[index]) {
        img.setAttribute('src', `image${index + 1}`);
      }
    });
  
    const updatedContent = doc.body.innerHTML;
    console.log('Updated Content:', updatedContent);
    console.log('Files:', files);
  
    setSummary(updatedContent);
  };

  return (
    <div className="flex flex-col gap-2 p-2 h-screen">
      <div className="flex items-center justify-center h-[50px]">
        <span className="text-[30px] font-bold">제목:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[50%] border-2 border-gray-300 text-black rounded-md p-2"
        />
      </div>

      <div className="flex flex-1 gap-2 overflow-hidden">
        <div className="w-1/2 h-full overflow-auto border border-gray-300 rounded-md">
          <CustomReactQuill
            value={summary}
            onChange={setSummary}
            setFiles={setFiles}
          />
        </div>

        <div className="w-1/2 h-full overflow-auto border border-gray-300 rounded-md">
          <PreviewSide summary={summary} />
        </div>
      </div>

      <button
        className="bg-cardcolor text-white rounded-md p-2 border-[1px] h-[50px] border-gray-300"
        onClick={handleSaveButton}
      >
        파일 확인
      </button>
    </div>
  );
};

export default Write;
