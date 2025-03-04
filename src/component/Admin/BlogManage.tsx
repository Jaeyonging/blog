import React from 'react'
import { useNavigate } from 'react-router-dom'
import Filters from '../Blogs/Filters'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import Categories from '../Blogs/Categories'
import BlogLists from '../Blogs/BlogLists'

const BlogManage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-2 p-2'>
      <button className='p-2 text-center rounded-[10px] bg-[blue]' onClick={()=>navigate('/admin/write')}>글쓰기</button>
      <Filters />
      <ApiErrorBoundary>
        <Categories />
        <BlogLists />
      </ApiErrorBoundary>
    </div>
  )
}

export default BlogManage
