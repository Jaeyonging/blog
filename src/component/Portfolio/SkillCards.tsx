import React from 'react';
import Lottie from 'react-lottie';
import IconCard from './IconCard';
import TimeLine from './TimeLine';
import skillData from '../../lotties/skill.json'
import ProjectCard from './ProjectCard';
import MyInfoCard from './MyInfoCard';
import GameCard from './GameCard';
import { useQuery } from 'react-query';
import { getProjects } from '../../api/board/board';
import Loading from '../../lotties/Loading';
import { API_URL } from '../../util/server';
import { useFetchDataStore } from '../../store/data';

const SkillCards = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skillData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { data } = useFetchDataStore();

  return (
    <div className='flex flex-col p-4 gap-2'>
      <Lottie options={defaultOptions} width={200} />
      <span className='text-[24px] font-bold'>My Info</span>
      <MyInfoCard />
      <span className='text-[24px] font-bold'>Skills</span>
      <div className='grid grid-cols-5 justify-items-center bg-cardcolor p-2 rounded-[10px]'>
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/react-2.svg' title='React' />
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/typescript.svg' title='TypeScript' />
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/python-4.svg' title='Python' />
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/java.svg' title='Java' />
        <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/swift.svg' title='Swift' />
      </div>

      <span className='text-[24px] font-bold mt-[20px]'>Timeline</span>
      <div className='border-l-2 border-white gap-3 flex flex-col bg-cardcolor p-2 py-3 rounded-[10px]'>
        {data&&data.portfolio.map((item: any) => (
          <TimeLine projectData={item} key={item.id}/>
        ))}
      </div>
      <span className='text-[24px] font-bold mt-[20px]'>Projects</span>
      <div className='flex flex-wrap items-center gap-2'>
        {data && data.project.map((item: any) => (
          <ProjectCard pid={item.id} title={item.name} imgurl={API_URL + "/" + item.file.file_path} year={item.start_date + ' ~ ' + item.end_date} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
