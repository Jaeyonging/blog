import React from 'react';
import Lottie from 'react-lottie';
import IconCard from './IconCard';
import TimeLine from './TimeLine';
import skillData from '../../lotties/skill.json'
import ProjectCard from './ProjectCard';
import MyInfoCard from './MyInfoCard';
import GameCard from './GameCard';

const SkillCards = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skillData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='flex flex-col p-4 gap-2'>
      <Lottie options={defaultOptions} width={200} />
      <span className='text-[24px] font-bold'>My Info</span>
      <MyInfoCard/>
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
        <TimeLine year='2023' company='다비수디지탈' description='2023.07 ~ ing' isMore={true} url='dabisudigital' />
        <TimeLine year='2022' company='Yellosis' description='2022.12 ~ 2023.06' isMore={true} url='yellosis' />
        <TimeLine year='2017' company='한국기술교육대학교' description='2017.03 ~ 2022.06' />
        <TimeLine year='2016' company='청담고등학교' description='2016.05 ~ 2017.02' />
        <TimeLine year='2014' company='Korean International School' description='2014.08 ~ 2016.05' />
        <TimeLine year='2009' company='Brent International School Manila' description='2009.03 ~ 2014.08' />
      </div>
      <span className='text-[24px] font-bold mt-[20px]'>Projects</span>
      <div className='flex flex-wrap items-center gap-2'>
        <ProjectCard title='다비키즈' imgurl='https://picsum.photos/200/150' url='https://www.google.com' year='2024.06 ~ 2024.12' />
        <ProjectCard title='케이글' imgurl='https://picsum.photos/200/150' url='https://www.google.com' year='2023.07 ~ 2024.06' />
        <ProjectCard title='CYM702' imgurl='https://picsum.photos/200/150' url='https://www.google.com' year='2023.07 ~ 2024.06' />
        <ProjectCard title='게임들' imgurl='https://picsum.photos/200/150' url='https://www.google.com' year='2023.07 ~ 2024.06' />
      </div>
      <span className='text-[24px] font-bold mt-[20px]'>Games</span>
      <div className='flex flex-wrap items-center gap-2'>
        <GameCard title='게임1' imgurl='https://picsum.photos/200/150' url='https://www.google.com' />
        <GameCard title='게임2' imgurl='https://picsum.photos/200/150' url='https://www.google.com' />
        <GameCard title='게임3' imgurl='https://picsum.photos/200/150' url='https://www.google.com' />
      </div>
    </div>
  );
};

export default SkillCards;
