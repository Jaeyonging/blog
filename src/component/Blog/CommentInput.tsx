import React, { useState } from 'react'

const CommentInput = () => {
    const [comment, setComment] = useState('')
    const handlesubmit = () => {
        console.log
    }

    return (
        <div className='flex flex-col gap-2'>
            <input className='border-2 border-indigo-500 rounded-md p-2 text-black flex flex-wrap max-w-[100%]' type="text" placeholder='댓글을 입력해주세요.' onChange={(e) => setComment(e.target.value)} />
            <button className='bg-indigo-500 text-white rounded-md p-2' onClick={handlesubmit}>등록</button>
        </div>
    )
}

export default CommentInput
