import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectPopup from './ProjectPopup';
import AddPortfolio from '../Admin/Popup/AddPortfolio';

interface Props {
    title: string;
    imgurl: string;
    year: string;
    pid: string;
}

const ProjectCard = ({ title, imgurl, year, pid }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const location = useLocation();
    const handleClick = () => {
        setIsOpen(true);
    }

    const handleDelete = () => {
        console.log('삭제');
    }

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log('수정');
        setIsEditOpen(true);
    }

    return (
        <>
            <div className='bg-cardcolor flex flex-col p-2 rounded-[10px] items-center w-[150px] cursor-pointer controls relative' onClick={handleClick}>
                <div className='w-[100px] h-[100px] border-[1px] items-center justify-center border-gray-300 overflow-hidden'>
                    <img src={imgurl} alt={title} className='w-[100%] h-[100%] object-contain rounded-[10px]' />
                </div>
                <span className='text-[16px] font-bold'>{title}</span>
                <span className='text-[12px] text-gray-300'>{year}</span>
                {location.pathname.includes('/admin') &&
                    <div className='options'>
                        <button className='bg-[red] p-2 rounded-[5px]' onClick={handleDelete}>삭제</button>
                        <button className='bg-[yellow] text-black p-2 rounded-[5px]' onClick={handleEdit}>수정</button>
                    </div>}
            </div>
            <ProjectPopup pid={pid} title={title} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {isEditOpen && <AddPortfolio projectId={pid} onClose={() => setIsEditOpen(false)} isOpen={isEditOpen} />}
        </>
    )
}

export default ProjectCard
