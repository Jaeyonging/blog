import React from 'react'

interface Props {
    name?: string;
    message: string;
}

const VisitorCard = ({ name = '익명', message }: Props) => {
    return (
        <div className='flex flex-col justify-center  p-2 bg-cardcolor rounded-lg'>
            <span className='text-[24px] font-bold'>{name? name : '익명'}</span>
            <span className='text-[16px]'>{message}</span>
        </div>
    )
}

export default VisitorCard
