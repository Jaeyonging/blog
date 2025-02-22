import React from 'react'

interface Props {
  title: string
  date: string
  category: string[]
}

const RelatedCard = ({ title, date, category }: Props) => {
  return (
    <div className='flex flex-col border-b-2 border-gray-200'>
      <div className='flex justify-between'>
        <span className='text-[15px] font-bold truncate'>{title}</span>
        <span className='text-[10px] text-gray-500 truncate'>{category.join(', ')}</span>
      </div>
      <span className='text-[10px] text-gray-500'>{date}</span>
    </div>
  )
}

export default RelatedCard
