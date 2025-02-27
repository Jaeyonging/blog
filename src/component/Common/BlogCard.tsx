import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

interface Props {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    width?: string;
    height?: string;
    mode?: string;
    category?: string[];
    like?: number;
    comment?: number;
}

const BlogCard = ({ id, title, description, date, image, width, height, mode = 'card', category, like = 0, comment = 0 }: Props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className={`flex flex-col min-w-[250px] w-[250px] p-3 rounded-lg bg-cardcolor shadow-lg hover:shadow-xl transition-shadow duration-300 ${mode === 'card' ? 'h-[280px] min-h-[280px]' : ''}`} onClick={handleClick} style={{ width: width, height: height }}>
            {mode === 'card' && (
                <div className='flex w-full h-[150px] border-2 border-[#ffffff33] rounded-md overflow-hidden'>
                    <img src={image} alt={title} className='object-cover w-full h-full' />
                </div>
            )}
            <div className='flex flex-col gap-2 mt-[10px]'>
                <span className='text-[16px] font-bold text-white truncate'>{title}</span>
                <div className='flex gap-2'>
                    {category && category.map((item, index) => (
                        <span key={index} className='text-[12px] text-gray-300 truncate bg-[#ffffff33] px-2 py-1 rounded-md'>{item}</span>
                    ))}
                </div>
                <span className='text-[12px] text-gray-300 truncate'>{description}</span>
                <div className='flex justify-between'>
                    <span className='text-[12px] text-gray-400'>{date}</span>
                    <div className='flex gap-2 text-[13px] text-gray-400 items-center'>
                        <AiFillLike /><span>{like}</span>
                        <FaComment /><span>{comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
