import { useState } from 'react'
import CustomReactQuill from '../../component/Admin/CustomReactQuill'
import '../../style/quill.snow.css'
import PreviewSide from '../../component/Admin/PreviewSide'
import { useSearchParams } from 'react-router-dom'
import BlogManage from '../../component/Admin/BlogManage'
import PortfolioManage from '../../component/Admin/PortfolioManage'
import VisitorManage from '../../component/Admin/VisitorManage'
import CodeManage from '../../component/Admin/CodeManage'

const Admin = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const menu = searchParam.get('menu') || 'Blog'
  return (
    <div className='flex flex-col'>

      {menu === 'Blog' && <BlogManage />}
      {menu === 'Portfolio' && <PortfolioManage />}
      {menu === 'Visitor' && <VisitorManage />}
      {menu === 'Code' && <CodeManage />}
    </div>
  )
}

export default Admin
