import React, { useState, useEffect } from 'react';
import BlogCard from '../Common/BlogCard';
import { useNavigate } from 'react-router-dom';
import SkeletonBlogCard from '../Common/SkeletonBlogCard';
import { useGetBlogs } from '../../api/board/boardHooks';
import { useBlogStore } from '../../store/data';

const TopBlogs = () => {
    const navigate = useNavigate();
    const {topBlogs, isTopBlogsLoading} = useBlogStore();
    const blognumber = 5;

    return (
        <div>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-bold'>인기 게시물</span>
                <span className='text-[13px] text-gray-400 cursor-pointer' onClick={() => navigate('/blogs?filter=top')}>
                    더보기
                </span>
            </div>

            <div className="flex overflow-x-auto gap-2">
                {isTopBlogsLoading ? (
                    Array.from({ length: blognumber }).map((_, index) => (
                        <SkeletonBlogCard key={index} />
                    ))
                ) : (
                    topBlogs && topBlogs.map((blog:any) => (
                        <BlogCard key={blog.id} blogData={blog} mode='card'/>
                    ))
                )}
            </div>
        </div>
    );
};

export default TopBlogs;
