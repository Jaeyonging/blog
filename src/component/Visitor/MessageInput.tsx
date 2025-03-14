import React, { useState } from 'react'
import { writeVisit } from '../../api/board/board';
import { useQueryClient } from 'react-query';
import { useUserStore } from '../../store/data';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    const {id} = useUserStore()
    const queryClient = useQueryClient()
    const onClickHanlder = () => {
        if(window.confirm('정말 메세지를 보내시겠습니까?')) {
            writeVisit(id, message).then(() => {
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
