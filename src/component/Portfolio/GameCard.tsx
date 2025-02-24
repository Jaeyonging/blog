import React, { useState } from 'react'
import GamePlay from './GamePlay';

interface Props {
    title: string;
    imgurl: string;
    url: string;
}

const GameCard = ({ title, imgurl, url }: Props) => {
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
            </div>
            <GamePlay isOpen={isOpen} onClose={() => setIsOpen(false)} url={url} />
        </>
    )   
}

export default GameCard
