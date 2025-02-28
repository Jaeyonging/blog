import React from 'react'
import { useQuery } from 'react-query'
import { useGetDb } from '../../api/code';
import TopLoading from '../../lotties/TopLoading';

const DbManage = () => {
    const { mutate, isLoading, error } = useGetDb();
    const handleDownload = () => {
        mutate();

    }

    if (isLoading) return <TopLoading />;
    if (error) throw error;

    return (
        <div className='p-2 flex flex-col gap-2'>
            <span>DB 다운로드</span>
            <button className='border-[1px] border-white rounded-md p-2' onClick={handleDownload}>다운로드</button>
        </div>
    )
}

export default DbManage
