import React, { useState } from 'react'
import IconCard from '../Portfolio/IconCard'
import MyInfoCard from '../Portfolio/MyInfoCard'
import TimeLine from '../Portfolio/TimeLine'
import AddPortfolio from './Popup/AddPortfolio'
import { useQuery } from 'react-query'
import { getProjects } from '../../api/board'
import Loading from '../../lotties/Loading'
import ProjectCard from '../Portfolio/ProjectCard'
import { API_URL } from '../../util/server'

const PortfolioManage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    console.log('커리어 추가');
    setIsOpen(!isOpen)
  };

  const { data, isLoading, isError, error } = useQuery('getProjects', getProjects)
  if (isLoading) return <Loading />
  if (isError) throw error

  return (
    <>
      <div className='flex flex-col items-center'>
        <button onClick={handleClick}>커리어 추가</button>
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/react-2.svg' title='React' />
        <MyInfoCard />
        <div className='border-l-2 border-white gap-3 flex flex-col w-[80%] bg-cardcolor p-2 py-3 rounded-[10px]'>
          {data.portfolio.map((item: any) => (
            <TimeLine projectData={item} key={item.id} />
          ))}
        </div>
        <span className='text-[24px] font-bold mt-[20px]'>Projects</span>
        <div className='flex flex-wrap items-center gap-2'>
          {data.project.map((item: any) => (
            <ProjectCard pid={item.id} title={item.name} imgurl={item.file && API_URL + "/" + item.file.file_path} year={item.start_date + ' ~ ' + item.end_date} key={item.id} />
          ))}
        </div>
      </div>
      {isOpen && <AddPortfolio isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />}
    </>
  )
}

export default PortfolioManage
