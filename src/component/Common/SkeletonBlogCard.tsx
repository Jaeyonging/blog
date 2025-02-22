import React from 'react';

const SkeletonBlogCard = () => {
  return (
    <div className="skeleton-card flex flex-col min-w-[250px] min-h-[280px] w-[250px] h-[280px] p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="skeleton-shimmer"></div>

      <div className='flex w-full h-[150px] bg-gray-700 border-2 border-[#ffffff33] rounded-md overflow-hidden'></div>

      <div className='flex flex-col gap-2 mt-[10px]'>
        <div className='h-4 bg-gray-700 rounded w-3/4'></div>
        <div className='h-3 bg-gray-700 rounded w-full'></div>
        <div className='h-3 bg-gray-700 rounded w-5/6'></div>

        <div className='flex justify-between items-center mt-2'>
          <div className='h-3 bg-gray-700 rounded w-1/4'></div>
          <div className='flex gap-2 items-center'>
            <div className='h-3 w-3 bg-gray-700 rounded-full'></div>
            <div className='h-3 bg-gray-700 rounded w-4'></div>
            <div className='h-3 w-3 bg-gray-700 rounded-full'></div>
            <div className='h-3 bg-gray-700 rounded w-4'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlogCard;
