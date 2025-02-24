import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';

interface Props {
    title: string;
    imgurl: string;
    url: string;
    year: string;
}

const ProjectCard = ({ title, imgurl, url, year }: Props) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    }

    return (
        <>
            <div className='bg-cardcolor flex flex-col p-2 rounded-[10px] items-center w-[150px] cursor-pointer' onClick={handleClick}>
                <div className='w-[100px] h-[100px] border-[1px] items-center justify-center border-gray-300 overflow-hidden'>
                    <img src={imgurl} alt={title} className='w-[100%] object-contain' />
                </div>
                <span className='text-[16px] font-bold'>{title}</span>
                <span className='text-[12px] text-gray-300'>{year}</span>
            </div>
            <ProjectModal title={title} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default ProjectCard
