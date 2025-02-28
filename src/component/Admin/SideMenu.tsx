import React, { useState } from 'react'
import SideCard from './SideCard'
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCode, FaDatabase } from "react-icons/fa";


const SideMenu = () => {
  const [isSelected, setIsSelected] = useState(true)
  const [selectedTitle, setSelectedTitle] = useState('blog')
  const navigate = useNavigate()

  const handleClick = (title: string) => {
    setIsSelected(true)
    setSelectedTitle(title)
    navigate('/admin/'+title)

  }
  
  return (
    <div className='fixed flex flex-col left-0 w-[150px] bg-cardcolor text-white justify-center gap-3 p-2 h-[100vh] side-menu'>
      <SideCard title='Blog' icon={<FaPencilAlt />} isSelected={isSelected && selectedTitle === 'blog'} onClick={()=>handleClick('blog')} />
      <SideCard title='Portfolio' icon={<GoProjectRoadmap />} isSelected={isSelected && selectedTitle === 'portfolio'} onClick={()=>handleClick('portfolio')} />
      <SideCard title='Visitor' icon={<FaUser />} isSelected={isSelected && selectedTitle === 'visitor'} onClick={()=>handleClick('visitor')} />
      <SideCard title='Code' icon={<FaCode />} isSelected={isSelected && selectedTitle === 'code'} onClick={()=>handleClick('code')} />
      <SideCard title='DB' icon={<FaDatabase />} isSelected={isSelected && selectedTitle === 'db'} onClick={()=>handleClick('db')} />
    </div>
  )
}

export default SideMenu
