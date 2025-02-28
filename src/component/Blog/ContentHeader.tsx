import React from 'react'

interface Props{
    title: string;
    view: number;
    date : string;
}

const ContentHeader = ({title, view, date}: Props) => {
    return (
        <div className='flex flex-col gap-2 p-2 items-center border-b border-gray-300'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex gap-2 justify-between w-full'>
                <span className='text-sm text-gray-500'>조회수 {view}</span>
                <span className='text-sm text-gray-500'>{date}</span>
            </div>
        </div>
    )
}

export default ContentHeader
