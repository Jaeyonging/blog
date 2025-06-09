import React from 'react'
import Filters from '../../component/Blogs/Filters'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import Categories from '../../component/Blogs/Categories'
import BlogLists from '../../component/Blogs/BlogLists'
import { useNavigate } from 'react-router-dom'
import { BlogListsFetcher } from '../../api/board/boardHooks'

const AdminBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-2 p-2'>
      <button className='p-2 text-center rounded-[10px] bg-[blue]' onClick={() => navigate('/admin/write')}>글쓰기</button>
      <Filters />
      <Categories />
      <ApiErrorBoundary>
        <BlogListsFetcher>
          <BlogLists />
        </BlogListsFetcher>
      </ApiErrorBoundary>
    </div>
  )
}

export default AdminBlog
