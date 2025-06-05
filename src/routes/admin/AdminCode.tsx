import React from 'react'
import CodeManage from '../../component/Admin/CodeManage'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { GetCodeFetcher } from '../../api/code/codeHooks'

const AdminCode = () => {
  return (
    <div>
      <ApiErrorBoundary>
        <GetCodeFetcher>
          <CodeManage />
        </GetCodeFetcher>
      </ApiErrorBoundary>
    </div>
  )
}

export default AdminCode
