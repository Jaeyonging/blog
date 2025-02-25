import React, { useState } from 'react'
import SideCard from './SideCard'
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
import { FaCode } from "react-icons/fa";


const SideMenu = () => {
  const [isSelected, setIsSelected] = useState(true)
  const [selectedTitle, setSelectedTitle] = useState('Blog')
  const [searchParam, setSearchParam] = useSearchParams()

  const handleClick = (title: string) => {
    setIsSelected(true)
    setSelectedTitle(title)
    let param = new URLSearchParams(searchParam)
    param.set('menu', title)
    setSearchParam(param)
  }
  
  return (
    <div className='fixed flex flex-col left-0 w-[150px] bg-cardcolor text-white justify-center gap-3 p-2 h-[100vh] side-menu'>
      <SideCard title='Blog' icon={<FaPencilAlt />} isSelected={isSelected && selectedTitle === 'Blog'} onClick={()=>handleClick('Blog')} />
      <SideCard title='Portfolio' icon={<GoProjectRoadmap />} isSelected={isSelected && selectedTitle === 'Portfolio'} onClick={()=>handleClick('Portfolio')} />
      <SideCard title='Visitor' icon={<FaUser />} isSelected={isSelected && selectedTitle === 'Visitor'} onClick={()=>handleClick('Visitor')} />
      <SideCard title='Code' icon={<FaCode />} isSelected={isSelected && selectedTitle === 'Code'} onClick={()=>handleClick('Code')} />
    </div>
  )
}

export default SideMenu
