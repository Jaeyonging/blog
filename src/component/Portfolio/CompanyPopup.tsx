import React from 'react'
import PopupHeader from '../Popup/PopupHeader';

interface Props {
    company: string;
    onClose: () => void;
    isOpen: boolean;
}

const CompanyPopup = ({ company, onClose, isOpen }: Props) => {
    return (
        <PopupHeader title={company} isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-2'>
                <li>배운것들</li>
            </div>
        </PopupHeader>
    )
}

export default CompanyPopup
