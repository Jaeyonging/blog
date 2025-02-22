import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ContentLikes = () => {
  return (
    <div className='flex justify-between items-center gap-2 p-2'>
      <div className='flex items-center gap-2'>
        <AiFillLike className='text-2xl text-white' />
        <span className='text-white'>100</span>
      </div>
      <div className='flex items-center gap-2'>
        <FaComment className='text-2xl text-white' />
        <span className='text-white'>100</span>
      </div>
    </div>
  )
}

export default ContentLikes
