import React from 'react'

interface Props {
    iconUrl: string;
    title: string;
}

const IconCard = ({ iconUrl, title }: Props) => {
  return (
    <div className='flex flex-col items-center p-2 justify-center rounded-[10px]'>
      <img src={iconUrl} alt={title} className='w-10 h-10 mb-2' />
      <span className='text-[12px]'>{title}</span>
    </div>
  )
}

export default IconCard
