import React from 'react'
interface Props {
    title: string
    icon: React.ReactNode
    isSelected: boolean
    onClick: () => void
}

const SideCard = ({title, icon, isSelected, onClick}: Props) => {
  return (
    <div className={`p-2 flex items-center border-[1px] border-white rounded-md cursor-pointer overflow-hidden relative ${isSelected ? 'bg-white text-black' : ''}`} onClick={onClick}>
      <span className='mr-2 icon'>{icon}</span>
      <span>{title}</span>
    </div>
  )
}

interface Props {

}

export default SideCard
