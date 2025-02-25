import React from 'react'
import IconCard from '../Portfolio/IconCard'
import MyInfoCard from '../Portfolio/MyInfoCard'
import TimeLine from '../Portfolio/TimeLine'

const PortfolioManage = () => {
  return (
    <div className='flex flex-col items-center'>
      <IconCard iconUrl='https://cdn.worldvectorlogo.com/logos/react-2.svg' title='React' />
      <MyInfoCard />
      <div className='border-l-2 border-white gap-3 flex flex-col w-[80%] bg-cardcolor p-2 py-3 rounded-[10px]'>
        <TimeLine year='2023' company='다비수디지탈' description='2023.07 ~ ing' isMore={true} url='dabisudigital' />
        <TimeLine year='2022' company='Yellosis' description='2022.12 ~ 2023.06' isMore={true} url='yellosis' />
        <TimeLine year='2017' company='한국기술교육대학교' description='2017.03 ~ 2022.06' />
        <TimeLine year='2016' company='청담고등학교' description='2016.05 ~ 2017.02' />
        <TimeLine year='2014' company='Korean International School' description='2014.08 ~ 2016.05' />
        <TimeLine year='2009' company='Brent International School Manila' description='2009.03 ~ 2014.08' />
      </div>
    </div>
  )
}

export default PortfolioManage
