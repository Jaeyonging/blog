import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment } from '../../api/board'
import { useQueryClient } from 'react-query'


const CommentInput = () => {
    const {bid} = useParams()
    const [comment, setComment] = useState('')
    const {uid} = useSelector((state: any) => state.user)
    const queryClient = useQueryClient()
    const handlesubmit = () => {
        console.log(bid, comment, uid)
        addComment(bid || '', comment, uid || '').then((res)=>{
            setComment('')
            queryClient.invalidateQueries('getBoardById')
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            <input className='border-2 border-indigo-500 rounded-md p-2 text-black flex flex-wrap max-w-[100%]' type="text" placeholder='댓글을 입력해주세요.' onChange={(e) => setComment(e.target.value)} value={comment} />
            <button className='bg-indigo-500 text-white rounded-md p-2' onClick={handlesubmit}>등록</button>
        </div>
    )
}

export default CommentInput
