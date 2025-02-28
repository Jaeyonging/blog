import React from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const PopupHeader = ({isOpen, onClose, title, children}: Props) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black/50 z-20 overflow-y-auto text-black  ${isOpen ? 'scale-100' : 'scale-0'}`}>
    <div className={`bg-white p-6 rounded-lg  flex flex-col space-y-4 shadow-lg overflow-y-auto max-h-[90vh] w-[90vw] lg:w-[80vw] transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`}>
        <div className='flex border-b-2 border-gray-300 justify-between items-center'>
            <span className="text-2xl font-bold">{title}</span>
            <button className='text-gray-500' onClick={onClose}>닫기</button>
        </div>
        <div className='flex flex-col gap-2'>
            {children}
        </div>
    </div>
</div>
  )
}

export default PopupHeader
