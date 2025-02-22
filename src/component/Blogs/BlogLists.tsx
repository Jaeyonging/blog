import React from 'react'
import BlogCard from '../Common/BlogCard'
import { BsList } from "react-icons/bs";
import { MdOutlineViewStream } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';

const BlogLists = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedMode = searchParams.get('mode') || 'card';
    const handleModeChange = (mode: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('mode', mode);
        setSearchParams(newParams);
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-end items-center text-[30px]'>
                <MdOutlineViewStream className={`cursor-pointer ${selectedMode === 'card' ? 'text-white' : 'text-gray-400'}`} onClick={() => handleModeChange('card')} />
                <BsList className={`cursor-pointer ${selectedMode === 'list' ? 'text-white' : 'text-gray-400'}`} onClick={() => handleModeChange('list')} />
            </div>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
            <BlogCard title="오늘은 블로asdfasdfasdfasdfasfdsadfsadf그다!" description="블로그에 관한 글을asasdfasdfasdfadfasdfsadfasdfasdfasdfsadf 쓰는 날이다." date="2025-03-02" image="https://picsum.photos/200/150" width="100%"  mode={selectedMode} category={['REACT', 'NEXTJS']}/>
        </div>
    )
}

export default BlogLists
