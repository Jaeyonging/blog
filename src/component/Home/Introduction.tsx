import React from 'react'

const Introduction = () => {
    return (
        <div className='flex flex-col gap-2 bg-cardcolor rounded-[10px] p-3'>
            <span className='text-center'>Jaeyonging</span>
            <div className='flex justify-center items-center'>
                <img src='../logo.png' className='w-[100px] h-[100px] rounded-full'></img>
            </div>
            <div className='flex flex-col gap-2'>
                <span>안녕하세요! 기술로 배운 내용들과 생각을 정리하는 공간입니다.</span>
            </div>
        </div>
    )
}

export default Introduction
