import React, { useState, useEffect } from 'react';
import BlogCard from '../Common/BlogCard';
import { useNavigate } from 'react-router-dom';
import SkeletonBlogCard from '../Common/SkeletonBlogCard';
import { FetchgetBlogs } from '../../api/board/boardHooks';

const TopBlogs = () => {
    const navigate = useNavigate();
    const blognumber = 5;
    const {data, isLoading, isError, error} = FetchgetBlogs('top', 'all');
    // if (isLoading) return <Loading />;
    if (isError) throw error;

    return (
        <div>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-bold'>인기 게시물</span>
                <span className='text-[13px] text-gray-400 cursor-pointer' onClick={() => navigate('/blogs?filter=top')}>
                    더보기
                </span>
            </div>

            <div className="flex overflow-x-auto gap-2">
                {isLoading ? (
                    Array.from({ length: blognumber }).map((_, index) => (
                        <SkeletonBlogCard key={index} />
                    ))
                ) : (
                    data.map((blog:any) => (
                        <BlogCard key={blog.id} blogData={blog} mode='card'/>
                    ))
                )}
            </div>
        </div>
    );
};

export default TopBlogs;
