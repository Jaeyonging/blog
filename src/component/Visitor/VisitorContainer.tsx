import React from 'react'
import VisitorCard from './VisitorCard'
import MessageInput from './MessageInput'
import { useFetchDataStore } from '../../store/data';

const VisitorContainer = () => {
    const { data } = useFetchDataStore();
    
    return (
        <div className='flex flex-col  p-2 overflow-hidden'>
            <span className='text-[24px] font-bold text-center'>Thanks for visiting my website!</span>
            <div className='flex flex-col gap-2 max-h-[calc(100vh-60px-300px)] overflow-y-auto min-h-[100px]'>
                {data && data.results.map((item: any) => (
                    <VisitorCard name={item.nickname} message={item.message} key={item.id} />
                ))}
            </div>
            <MessageInput />
        </div>
    )
}

export default VisitorContainer
