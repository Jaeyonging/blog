import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { addLike } from '../../api/board/board';
import { useQueryClient } from 'react-query';
import { useUserStore } from '../../store/data';

interface Props {
    like: number;
    comment: number;
}

const ContentLikesComments = ({ like, comment }: Props) => {
  const {bid} = useParams()
  const queryClient = useQueryClient()
  const {id} = useUserStore()
  const handleLike = () => {
    addLike(bid || '', id || '').then((res)=>{
      queryClient.invalidateQueries('getBoardById')
    })
  }
  
  return (
    <div className='flex justify-between items-center gap-2 p-2'>
      <div className='flex items-center gap-2'>
        <AiFillLike className='text-2xl text-white' onClick={handleLike} />
        <span className='text-white'>{like}</span>
      </div>
      <div className='flex items-center gap-2'>
        <FaComment className='text-2xl text-white' />
        <span className='text-white'>{comment}</span>
      </div>
    </div>
  )
}

export default ContentLikesComments
