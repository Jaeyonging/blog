import React from 'react'
import PopupHeader from '../Popup/PopupHeader';

interface Props {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectPopup = ({ title, isOpen, onClose }: Props) => {
    return (

        <PopupHeader title={title} isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-2'>
                <li>배운것들</li>
            </div>
        </PopupHeader>
    )
}

export default ProjectPopup
