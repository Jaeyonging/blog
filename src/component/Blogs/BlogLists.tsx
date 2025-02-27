import React, { useMemo } from 'react';
import BlogCard from '../Common/BlogCard';
import { BsList } from "react-icons/bs";
import { MdOutlineViewStream } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getBlogs } from '../../api/board';
import Loading from '../../lotties/Loading';

const BlogLists = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter') || 'recent';
    const tag = searchParams.get('tag') || 'all';
    const selectedMode = searchParams.get('mode') || 'card';

    const handleModeChange = (mode: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('mode', mode);
        setSearchParams(newParams);
    }

    const { data, isLoading, isError, error } = useQuery(['getBlogs'], getBlogs, {
        onSuccess: (data) => {
            console.log("Fetched data:", data);
        }
    });

    if (isLoading) return <Loading />;
    if (isError) throw error;

    const filteredAndSortedData = (() => {
        if (!Array.isArray(data)) return [];
    
        let filteredData = [...data];
    
        if (tag !== 'all') {
            filteredData = filteredData.filter((blog) => 
                Array.isArray(blog.tags) && blog.tags.includes(tag)
            );
        }
    
        switch (filter) {
            case 'top':
                filteredData.sort((a, b) => (b.like_count || 0) - (a.like_count || 0));
                break;
            case 'hot':
                filteredData.sort((a, b) => (b.comment_count || 0) - (a.comment_count || 0));
                break;
            case 'recent':
            default:
                filteredData.sort((a, b) => 
                    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );
                break;
        }
    
        return filteredData;
    })();
    

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-end items-center text-[30px]'>
                <MdOutlineViewStream className={`cursor-pointer ${selectedMode === 'card' ? 'text-white' : 'text-gray-400'}`} onClick={() => handleModeChange('card')} />
                <BsList className={`cursor-pointer ${selectedMode === 'list' ? 'text-white' : 'text-gray-400'}`} onClick={() => handleModeChange('list')} />
            </div>

            {filteredAndSortedData.length > 0 && filteredAndSortedData.map((blog: any) => (
                <BlogCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    description={blog.descr}
                    date={blog.created_at}
                    image={"https://picsum.photos/200/150"}
                    width="100%"
                    mode={selectedMode}
                    category={blog.tags}
                    like={blog.like_count}
                    comment={blog.comment_count}
                />
            ))}
        </div>
    );
};

export default BlogLists;
