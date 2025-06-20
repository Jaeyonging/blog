import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddComment } from '../../api/board/board'
import Loading from '../../lotties/Loading'
import TopLoading from '../../lotties/TopLoading'
import { useUserStore } from '../../store/data'


const CommentInput = () => {
    const {bid} = useParams()
    const [comment, setComment] = useState('')
    const {user} = useUserStore()
    const { mutate, isLoading, isError, error } = useAddComment();
    const handlesubmit = () => {
        mutate({bid: bid || '', content: comment, uid: user.id || ''})
        setComment('')
    }

    if(isLoading) return <TopLoading/>
    if(isError) throw error

    return (
        <div className='flex flex-col gap-2'>
            <input className='border-2 border-indigo-500 rounded-md p-2 text-black flex flex-wrap max-w-[100%]' type="text" placeholder='댓글을 입력해주세요.' onChange={(e) => setComment(e.target.value)} value={comment} />
            <button className='bg-indigo-500 text-white rounded-md p-2' onClick={handlesubmit}>등록</button>
        </div>
    )
}

export default CommentInput
