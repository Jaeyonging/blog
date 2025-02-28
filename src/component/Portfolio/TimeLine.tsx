import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyPopup from './CompanyPopup';

interface Props {
    company: string;
    year: string;
    description: string;
    isMore?: boolean;
    url?: string;
}

const TimeLine = ({ company, year, description, isMore = false, url }: Props) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const handleMoreClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className='flex items-center relative pl-10  gap-3  w-[100%]'>
                <div className='absolute p-2 left-[-40px] bg-cardcolor rounded-full border-2 border-white z-10 flex items-center justify-center'>
                    <span>{year}</span>
                </div>
                <div className='flex flex-col w-[100%]'>
                    <div className='flex items-center justify-between gap-2'>
                        <span>{company}</span>
                        {isMore && <span className='cursor-pointer text-[gray]' onClick={handleMoreClick}>더보기...</span>}
                    </div>
                    <span className='text-gray-500 text-[12px]'>{description}</span>
                </div>
            </div>
            <CompanyPopup company={company} onClose={() => setIsOpen(false)} isOpen={isOpen} />
        </>
    );
};

export default TimeLine;
