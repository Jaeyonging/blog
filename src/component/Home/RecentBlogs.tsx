import React from 'react'
import BlogCard from '../Common/BlogCard'
import { useNavigate } from 'react-router-dom'

const RecentBlogs = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-bold'>
                    최근 게시물
                </span>
                <span className='text-[13px] text-gray-400' onClick={()=>navigate('/blogs?filter=recent')}>
                    더보기
                </span>
            </div>
            <div className="flex overflow-x-auto gap-2">
                <BlogCard title="오늘은 블로그다!" description="블로그에 관한 글을asdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" />
                <BlogCard title="서버로 가능하겟어?" description="서버에 관한 글을 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/300" />
                <BlogCard title="프론트로 가능하겟어?" description="프론트에 관한 글을 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/300" />
                <BlogCard title="백엔드로 가능하겟어?" description="백엔드에 관한 글을 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/300" />
                <BlogCard title="백엔드로 가능하겟어?" description="백엔드에 관한 글을 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/300" />
            </div>
        </div>
    )
}

export default RecentBlogs
