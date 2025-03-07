import React from 'react'

interface Props {
  comment: string;
  date: string;
  nickname?: string;
  imgurl?: string;
}

const CommentCard = ({ comment, nickname = 'Guest', date, imgurl = 'https://picsum.photos/200/150' }: Props) => {
  return (
    <div className='flex items-center border-[1px] border-gray-200 rounded-md p-2 relative'>
      <img src={imgurl} alt='comment' className='w-10 h-10 rounded-full' />
      <div className='flex flex-col gap-2 w-full pl-[20px]'>
        <span>{comment}</span>
        <div className='flex justify-between'>
          <span className='text-gray-500'>{nickname? nickname : 'Guest'}</span>
          <span className='text-gray-500'>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
