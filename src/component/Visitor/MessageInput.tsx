import React, { useState } from 'react'

const MessageInput = () => {
    const [name, setName] = useState('익명');
    const [message, setMessage] = useState('');
    const onClickHanlder = () => {
        if(window.confirm('정말 메세지를 보내시겠습니까?')) {
            console.log(name, message);
        }
    }
    return (
        <div className='flex flex-col p-2 gap-2 text-black'>
            <input type="text" placeholder='이름' className='p-2 rounded-lg' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Message' className='p-2 rounded-lg' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className='p-2 rounded-lg bg-cardcolor border-[1px] border-white text-white' onClick={onClickHanlder}>Send</button>
        </div>
    )
}

export default MessageInput
