import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { writeVisit } from '../../api/board';
import { useQueryClient } from 'react-query';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    const {uid} = useSelector((state: any) => state.user)
    const queryClient = useQueryClient()
    const onClickHanlder = () => {
        if(window.confirm('정말 메세지를 보내시겠습니까?')) {
            writeVisit(uid, message).then(() => {
                setMessage('')
                queryClient.invalidateQueries('getVisitBoard')
            })
        }
    }
    return (
        <div className='flex flex-col p-2 gap-2 text-black'>
            <input type="text" placeholder='Message' className='p-2 rounded-lg' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className='p-2 rounded-lg bg-cardcolor border-[1px] border-white text-white' onClick={onClickHanlder}>Send</button>
        </div>
    )
}

export default MessageInput
