import React from 'react'
import CommentManage from '../../component/Admin/CommentManage'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { CommentFetcher } from '../../api/board/boardHooks'

const AdminComment = () => {
  return (
    <ApiErrorBoundary>
      <CommentFetcher>
        <CommentManage />
      </CommentFetcher>
    </ApiErrorBoundary>
  )
}

export default AdminComment
