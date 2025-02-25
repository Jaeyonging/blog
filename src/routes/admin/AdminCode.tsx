import React from 'react'
import CodeManage from '../../component/Admin/CodeManage'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'

const AdminCode = () => {
  return (
    <div>
        <ApiErrorBoundary>
            <CodeManage/>
        </ApiErrorBoundary>
    </div>
  )
}

export default AdminCode
