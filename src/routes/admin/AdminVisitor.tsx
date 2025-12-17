import React from 'react'
import VisitorManage from '../../component/Admin/VisitorManage'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { VisitBoardFetcher } from '../../api/board/boardHooks'

const AdminVisitor = () => {
  return (
    <ApiErrorBoundary>
      <VisitBoardFetcher>
        <VisitorManage/>
      </VisitBoardFetcher>
    </ApiErrorBoundary>
  )
}

export default AdminVisitor
