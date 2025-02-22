import React, { useState } from 'react'
import CustomReactQuill from '../../component/Admin/CustomReactQuill'
import '../../style/quill.snow.css'
import { decodeEntities } from '../../util/util'
import PreviewSide from '../../component/Admin/PreviewSide'

const Admin = () => {
  const [summary, setSummary] = useState('')
  const handleSave = () => {
    console.log(summary)
  }
  return (
    <div className='flex'>
      <div className='w-[50%]'>
        <CustomReactQuill
          value={summary}
          onChange={(value) => setSummary(value)}
        />
      </div>
      <div className='w-[50%]'>
        <PreviewSide summary={summary}/>
      </div>
    </div>
  )
}

export default Admin
