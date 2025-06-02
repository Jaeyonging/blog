import React from 'react'
import { useVisitLogStore } from '../../store/data';

const BlogSummary = () => {
    const {visitLogs} = useVisitLogStore();
    return (
        <div className='flex flex-col gap-2 bg-cardcolor rounded-[10px] p-3'>
            <div className='flex justify-between'>
                <span>전체 방문자 수:</span>
                <span className='text-right'>{visitLogs?.total}</span>
            </div>
            <div className='flex justify-between'>
                <span>오늘 방문자 수:</span>
                <span className='text-right'>{visitLogs?.today}</span>
            </div>
            <div className='flex justify-between'>
                <span>블로그 갯수:</span>
                <span className='text-right'>{visitLogs?.blogcount}</span>
            </div>
        </div>
    )
}

export default BlogSummary
