import React from 'react'
import PopupHeader from '../Popup/PopupHeader';
import Loading from '../../lotties/Loading';
import { useQuery } from 'react-query';
import { getProjectById } from '../../api/board/board';
import TopLoading from '../../lotties/TopLoading';
import '../../style/quill.snow.css'
interface Props {
    pid: any;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectPopup = ({ pid, title, isOpen, onClose }: Props) => {
    const { data, isLoading, isError, error } = useQuery(['getProjectById', pid], () => getProjectById(pid || ''))
    if (isLoading) return <TopLoading />
    if (isError) throw error

    return (

        <PopupHeader title={title} isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-2'>
                <div className='ql-editor bg-cardcolor text-white rounded-[10px] text-[13px]' dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
        </PopupHeader>
    )
}

export default ProjectPopup
