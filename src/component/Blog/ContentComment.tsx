import React from 'react'
import CommentCard from './CommentCard'
import CommentInput from './CommentInput'

const ContentComment = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>댓글</h1>
      <CommentInput/>
      <CommentCard comment='별로네여' date='2025-03-02' imgurl='https://picsum.photos/200/300' />
      <CommentCard comment='별로네여' date='2025-03-02' imgurl='https://picsum.photos/200/300' />
      <CommentCard comment='별로네여' date='2025-03-02' imgurl='https://picsum.photos/200/300' />
      <CommentCard comment='별로네여' date='2025-03-02' imgurl='https://picsum.photos/200/300' />
      <CommentCard comment='별로네여' date='2025-03-02' imgurl='https://picsum.photos/200/300' />
    </div>
  )
}

export default ContentComment
