import React, { useState } from 'react'
import PopupHeader from './PopupHeader';
import { addCode } from '../../api/code/code';
import { useQueryClient } from 'react-query';

interface Props {
    isOpen: boolean
    onClose: () => void;
}

const CodePopup = ({ isOpen, onClose }: Props) => {
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [ext, setExt] = useState('')
    const queryClient = useQueryClient()

    const handleAdd = () => {
        addCode(name, tag, ext).then((res) => {
            setName('')
            setTag('')
            setExt('')
            onClose()
            queryClient.invalidateQueries(['getCode'])
        })
    }
    return (
        <PopupHeader isOpen={isOpen} onClose={onClose} title='코드추가'>
            <div className='flex flex-col gap-2'>
                <span>코드이름</span>
                <input type='text' className='p-2' placeholder='코드이름을 입력해주세요. (name)' value={name} onChange={(e) => setName(e.target.value)} />
                <span>태그이름</span>
                <input type='text' className='p-2' placeholder='태그를 입력해주세요. (tag)' value={tag} onChange={(e) => setTag(e.target.value)} />
                <span>확장자이름</span>
                <input type='text' className='p-2' placeholder='확장자를 입력해주세요. (ext)' value={ext} onChange={(e) => setExt(e.target.value)} />
            </div>
            <button className='bg-[#4c4c4c] border-[1px] rounded-[10px] gap-2 cursor-pointer py-3 w-[80%] ml-[10%]' onClick={handleAdd}>추가</button>
        </PopupHeader>
    )
}

export default CodePopup
