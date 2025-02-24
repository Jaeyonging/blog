import React from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
    url: string;
}

const GamePlay = ({ isOpen, onClose, url }: Props) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-20 overflow-y-auto text-black transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`}>
            <div className="bg-white p-6 rounded-lg  flex flex-col space-y-4 shadow-lg overflow-y-auto max-h-[90vh] w-[90vw]">
                <div className='flex border-b-2 border-gray-300 justify-between items-center'>
                    <span className="text-2xl font-bold">게임</span>
                    <button className='text-gray-500' onClick={onClose}>닫기</button>
                </div>
                <div className='flex flex-col gap-2'>
                    <li>배운것들</li>
                </div>
            </div>
        </div>
    )
}

export default GamePlay
