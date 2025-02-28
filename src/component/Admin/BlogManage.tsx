import React from 'react'
import BlogCard from '../Common/BlogCard'
import { useNavigate } from 'react-router-dom'

const BlogManage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex p-2 flex-wrap gap-2 items-center flex-col'>
      <button className='p-2 text-center rounded-[10px] bg-[blue]' onClick={()=>navigate('/admin/write')}>글쓰기</button>
      {/* <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} />
      <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} />
      <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} />
      <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} />
      <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} />
      <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%" mode={'list'} category={['REACT', 'NEXTJS']} /> */}
    </div>
  )
}

export default BlogManage
