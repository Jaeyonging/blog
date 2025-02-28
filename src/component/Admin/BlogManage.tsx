import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogManage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex p-2 flex-wrap gap-2 items-center flex-col'>
      <button className='p-2 text-center rounded-[10px] bg-[blue]' onClick={()=>navigate('/admin/write')}>글쓰기</button>
      
    </div>
  )
}

export default BlogManage
