import React from 'react'
import SkillCards from '../component/Portfolio/SkillCards'
import ApiErrorBoundary from '../boundary/ApiErrorBoundary'
import { PortfolioFetcher } from '../api/board/boardHooks'

const Portfolio = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <ApiErrorBoundary>
        <PortfolioFetcher>
          <SkillCards />
        </PortfolioFetcher>
      </ApiErrorBoundary>
    </div>
  )
}

export default Portfolio
