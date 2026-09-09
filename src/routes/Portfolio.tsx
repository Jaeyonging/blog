import React from 'react'
import SkillCards from '../component/Portfolio/SkillCards'
import ApiErrorBoundary from '../boundary/ApiErrorBoundary'
import { PortfolioFetcher } from '../api/board/boardHooks'
import PrivacyLink from '../component/Common/PrivacyLink'

const Portfolio = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <ApiErrorBoundary>
        <PortfolioFetcher>
          <SkillCards />
        </PortfolioFetcher>
      </ApiErrorBoundary>
      <PrivacyLink />
    </div>
  )
}

export default Portfolio
