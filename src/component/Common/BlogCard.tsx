import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { API_URL } from '../../util/server';
interface Props {
    blogData: any;
    mode?: string;
    width?: string;
    height?: string;
}

const BlogCard = ({ blogData, mode = 'card', width, height }: Props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/blog/${blogData.id}`);
    }

    return (
        <div className={`flex flex-col min-w-[250px] w-[250px] p-3 rounded-lg bg-cardcolor shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${mode === 'card' ? 'h-[280px] min-h-[280px]' : ''}`} onClick={handleClick} style={{ width: width, height: height }}>
            {mode === 'card' && (
                <div className='flex w-full h-[150px] border-2 border-[#ffffff33] rounded-md overflow-hidden'>
                    {
                        blogData.files[0].path ? (
                            <img src={`${API_URL}/${blogData.files[0].path}`} alt={blogData.title} className='object-cover w-full h-full' />
                        ) : (
                            <div className='flex justify-center items-center w-full h-full'>
                                <span className='text-[12px] text-gray-300'>이미지가 없습니다.</span>
                            </div>
                        )
                    }
                </div>
            )}
            <div className='flex flex-col gap-2 mt-[10px]'>
                <span className='text-[16px] font-bold text-white truncate'>{blogData.title}</span>
                {
                    blogData.descr ? (
                        <span className='text-[12px] text-gray-300 truncate'>{blogData.descr}</span>
                    ) : (
                        <span className='text-[12px] text-gray-300 truncate'>설명이 없습니다.</span>
                    )
                }
                <div className="flex gap-2 min-h-[20px] max-w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {blogData.tags && blogData.tags.map((item: any, index: number) => (
                        <span key={index} className='text-[12px] text-gray-300 bg-[#ffffff33] px-2 py-1 rounded-md'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between'>
                    <span className='text-[12px] text-gray-400'>{blogData.created_at}</span>
                    <div className='flex gap-2 text-[13px] text-gray-400 items-center'>
                        <MdOutlineVisibility /><span>{blogData.view}</span>
                        <AiFillLike /><span>{blogData.likes}</span>
                        <FaComment /><span>{blogData.comment_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
