import React from 'react'
import CommentCard from './CommentCard'
import CommentInput from './CommentInput'

interface Props {
    comment: any[];
}

const ContentComment = ({ comment }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>댓글</h1>
      <CommentInput/>
      {
        comment.map((item) => (
          <CommentCard key={item.id} comment={item.content} date={item.created_at}/>
        ))
      }
    </div>
  )
}

export default ContentComment
