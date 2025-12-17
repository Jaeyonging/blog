import React, { useState } from 'react'
import { deleteComment, updateComment } from '../../api/board/board'
import { useQueryClient } from 'react-query'

interface Props {
    commentData: any
}

const CommentCard = ({ commentData }: Props) => {
    const queryClient = useQueryClient()
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(commentData.content)
    
    const handleDelete = () => {
        if(confirm('정말 삭제하시겠습니까?')){
            deleteComment(commentData.comment_id).then((res)=>{
                queryClient.invalidateQueries('getComments')
            })
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
        setEditedContent(commentData.content)
    }

    const handleSave = () => {
        updateComment(commentData.comment_id, editedContent).then((res) => {
            queryClient.invalidateQueries('getComments')
            setIsEditing(false)
        }).catch((error) => {
            console.error('댓글 수정 실패:', error)
            alert('댓글 수정 중 오류가 발생했습니다.')
        })
    }

    const handleCancel = () => {
        setIsEditing(false)
        setEditedContent(commentData.content)
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
                {isEditing ? (
                    <textarea 
                        value={editedContent} 
                        onChange={(e) => setEditedContent(e.target.value)}
                        className='w-full border-2 border-gray-300 text-black rounded-md p-2 mt-1'
                        rows={3}
                    />
                ) : (
                    <span>{commentData.content}</span>
                )}
            </div>
            <div>
                <span className='text-gray-500'>작성일: </span>
                <span>{commentData.comment_created_at}</span>
            </div>
            <div className='optionsright flex gap-2 absolute'>
                {isEditing ? (
                    <>
                        <button className='bg-green-500 text-white px-2 py-1 rounded' onClick={handleSave}>저장</button>
                        <button className='bg-gray-500 text-white px-2 py-1 rounded' onClick={handleCancel}>취소</button>
                    </>
                ) : (
                    <>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={handleEdit}>수정</button>
                        <button className='bg-red-500 text-white px-2 py-1 rounded' onClick={handleDelete}>삭제</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default CommentCard
