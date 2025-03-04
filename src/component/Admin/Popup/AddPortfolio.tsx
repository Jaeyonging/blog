import React, { useEffect, useState } from 'react';
import PopupHeader from '../../Popup/PopupHeader';
import { useQuery, useQueryClient } from 'react-query';
import { getCodeByTag } from '../../../api/code';
import Loading from '../../../lotties/Loading';
import CustomReactQuill from '../CustomReactQuill';
import { addProject, getProjectById } from '../../../api/board';
import { useSelector } from 'react-redux';
import TopLoading from '../../../lotties/TopLoading';
import { API_URL } from '../../../util/server';

interface Props {
    projectId?: any;
    isOpen: boolean;
    onClose: () => void;
}

const AddPortfolio = ({ isOpen, onClose, projectId }: Props) => {
    const { uid } = useSelector((state: any) => state.user);
    const [summary, setSummary] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [type, setType] = useState('');
    const queryClient = useQueryClient();

    const { data: projectData, isLoading: isProjectLoading, isError: isProjectError, error: projectError } =
        useQuery(['getProjectById', projectId],
            () => getProjectById(projectId || ''),
            { enabled: !!projectId }
        );

    const { data, isLoading, isError, error } = useQuery(['getCodeByTag', 'PROJECT'],
        () => getCodeByTag('PROJECT'),
        {
            onSuccess: (data) => {
                if (!projectId) {
                    setType(data.results[0]?.id || '');
                }
            }
        }
    );

    useEffect(() => {
        if (projectData) {
            console.log(projectData);
    
            setTitle(projectData.name || '');
            setStart(projectData.start_date || '');
            setEnd(projectData.end_date || '');
            setSummary(projectData.content || '');
            setType(projectData.type || '');
    
            setFiles(projectData.files || []);
        }
    }, [projectData]);
    

    if (isProjectLoading) return <TopLoading />;
    if (isProjectError) throw projectError;

    if (isLoading) return <Loading />;
    if (isError) throw error;

    const handleSubmit = async () => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(summary, 'text/html');
        const images = doc.querySelectorAll('img');
    
        images.forEach((img, index) => {
            const currentSrc = img.getAttribute('src');
    
            // 기존 이미지 URL이면 유지
            if (currentSrc?.startsWith('http') || currentSrc?.startsWith(API_URL)) {
                return;
            }
    
            // 새로운 파일이 있다면 `image{index+1}`로 설정
            if (files[index]) {
                img.setAttribute('src', `image${index + 1}`);
            }
        });
    
        const updatedContent = doc.body.innerHTML;
        setSummary(updatedContent);
    
        console.log(files);
        console.log(updatedContent);
    
        // API 호출 (주석 해제 시 동작)
        addProject(uid, projectId, type, title, start, end, updatedContent, files).then((res) => {
            console.log(res)
            queryClient.invalidateQueries('getProjects', { exact: true });
            onClose();
        });
    };
    

    return (
        <PopupHeader isOpen={isOpen} onClose={onClose} title={projectId ? '커리어 수정' : '커리어 등록'}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                {data.results.map((item: any) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
            <div>
                <span>프로젝트 {projectId ? '수정' : '등록'}</span>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <span>시작시간 등록</span>
                <input type="text" value={start} onChange={(e) => setStart(e.target.value)} /> ~
                <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>
            <span>프로젝트 설명</span>
            <div className="bg-[black] text-white">
                <CustomReactQuill value={summary} onChange={setSummary} setFiles={setFiles} />
            </div>
            <button onClick={handleSubmit} className="bg-black text-white">
                {projectId ? '수정' : '등록'}
            </button>
        </PopupHeader>
    );
};

export default AddPortfolio;
