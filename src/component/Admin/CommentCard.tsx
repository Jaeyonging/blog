import React from 'react'
import { deleteComment } from '../../api/board'
import { useQueryClient } from 'react-query'

interface Props {
    commentData: any
}

const CommentCard = ({ commentData }: Props) => {
    const queryClient = useQueryClient()
    console.log(commentData)
    const handleDelete = () => {
        if(confirm('정말 삭제하시겠습니까?')){
            deleteComment(commentData.comment_id).then((res)=>{
                console.log(res)
                queryClient.invalidateQueries('getComments')
            })
        }
    }
    return (
        <div className='flex border-[1px] border-gray-200 rounded-md p-2 flex-col controls relative'>
            <div>
                <span className='text-gray-500'>블로그 이름:  </span>
                <span>{commentData.title}</span>
            </div>
            <div>
                <span className='text-gray-500'>블로그 설명:  </span>
                <span>{commentData.descr}</span>
            </div>
            <div>
                <span className='text-gray-500'>댓글 내용: </span>
                <span>{commentData.content}</span>
            </div>
            <div className='optionsright flex gap-2 absolute'>
                <button onClick={handleDelete}>삭제</button>
            </div>
        </div>
    )
}

export default CommentCard
