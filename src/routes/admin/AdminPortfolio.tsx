import React from 'react'
import PortfolioManage from '../../component/Admin/PortfolioManage'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { PortfolioFetcher } from '../../api/board/boardHooks'

const AdminPortfolio = () => {
  return (
    <ApiErrorBoundary>
      <PortfolioFetcher>
        <PortfolioManage />
      </PortfolioFetcher>
    </ApiErrorBoundary>
  )
}

export default AdminPortfolio
