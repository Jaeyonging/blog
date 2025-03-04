import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectPopup from './ProjectPopup';
import AddPortfolio from '../Admin/Popup/AddPortfolio';

interface Props {
    projectData: any
}

const TimeLine = ({ projectData }: Props) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const handleMoreClick = () => {
        setIsOpen(true);
    };

    const handleEdit = () => {
        setIsEditOpen(true);
    }

    const handleDelete = () => {
        console.log('삭제');
    }

    return (
        <>
            <div className='flex items-center relative pl-10  gap-3 w-[100%] controls'>
                <div className='absolute p-2 left-[-40px] bg-cardcolor rounded-full border-2 border-white z-10 flex items-center justify-center'>
                    <span>{projectData.year}</span>
                </div>
                <div className='flex flex-col w-[100%]'>
                    <div className='flex items-center justify-between gap-2'>
                        <span>{projectData.name}</span>
                        {projectData.has_content === 1 && <span className='cursor-pointer text-[gray]' onClick={handleMoreClick}>더보기...</span>}
                    </div>
                    <span className='text-gray-500 text-[12px]'>{projectData.start_date} ~ {projectData.end_date && projectData.end_date.length > 0 ? projectData.end_date : 'ing'}</span>
                </div>
                {location.pathname.includes('/admin') && <div className='options'>
                    <button className='bg-[red] p-2 rounded-[5px]' onClick={handleDelete}>삭제</button>
                    <button className='bg-[yellow] text-black p-2 rounded-[5px]' onClick={handleEdit}>수정</button>
                </div>}
            </div>
            {isOpen && <ProjectPopup pid={projectData.id} title={projectData.name} onClose={() => setIsOpen(false)} isOpen={isOpen} />}
            {isEditOpen && <AddPortfolio projectId={projectData.id} onClose={() => setIsEditOpen(false)} isOpen={isEditOpen} />}
        </>
    );
};

export default TimeLine;
