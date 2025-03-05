import { useEffect, useState } from 'react';
import CustomReactQuill from '../../component/Admin/CustomReactQuill';
import PreviewSide from '../../component/Admin/PreviewSide';
import '../../style/quill.snow.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import {  getBoardByPid, writeBlogs } from '../../api/board';
import CustomInputTag from '../../component/Admin/CustomInputTag';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import TopLoading from '../../lotties/TopLoading';
import { API_URL } from '../../util/server';

const Write = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const userid = useSelector((state: RootState) => state.user.uid);
  const [summary, setSummary] = useState('');
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [descr, setDescr] = useState('')
  const queryClient = useQueryClient();

  const {data, isLoading, isError, error} = useQuery(['getBoardByPid', pid], () => getBoardByPid(pid || ''))

  useEffect(() => {
    if(data) {
      setTitle(data.title);
      setDescr(data.descr);
      setSummary(data.content);
      setTags(data.tags);
      setFiles(data.files);
    }
  }, [data])

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSaveButton = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(summary, 'text/html');
    const images = doc.querySelectorAll('img');

    images.forEach((img, index) => {
        const currentSrc = img.getAttribute('src');

        if (currentSrc?.startsWith('http') || currentSrc?.startsWith(API_URL)) {
            return;
        }

        if (files[index]) {
            img.setAttribute('src', `image${index + 1}`);
        }
    });

    const updatedContent = doc.body.innerHTML;
    setSummary(updatedContent);

    writeBlogs(userid, pid || null, title, descr, tags, updatedContent, files).then((res) => {
      queryClient.invalidateQueries('getBoardByPid', { exact: true });
      navigate('/admin/blog');
    });
  };

  if(isLoading) return <TopLoading/>
  if(isError) throw error

  return (
    <div className="flex flex-col gap-2 p-2 h-screen">
      <div className="flex items-center justify-center h-[50px]">
        <span className="text-[30px] font-bold">제목:</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-[50%] border-2 border-gray-300 text-black rounded-md p-2" />
      </div>
      <div className="flex items-center justify-center h-[50px]">
        <span className="text-[30px] font-bold">설명:</span>
        <input type="text" value={descr} onChange={(e) => setDescr(e.target.value)} className="w-[50%] border-2 border-gray-300 text-black rounded-md p-2" />
      </div>

      <CustomInputTag tags={tags} setTags={setTags} />

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center bg-gray-200 text-black px-2 py-1 rounded-md">
            {tag}
            <button
              onClick={() => handleRemoveTag(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-1 gap-2 overflow-hidden">
        <div className="w-1/2 h-full overflow-auto border border-gray-300 rounded-md">
          <CustomReactQuill value={summary} onChange={setSummary} setFiles={setFiles} />
        </div>

        <div className="w-1/2 h-full overflow-auto border border-gray-300 rounded-md">
          <PreviewSide summary={summary} />
        </div>
      </div>

      <button className="bg-cardcolor text-white rounded-md p-2 border-[1px] h-[50px] border-gray-300" onClick={handleSaveButton}>
        파일 확인
      </button>
    </div>
  );
};

export default Write;
