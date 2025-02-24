import { useState } from 'react'
import CustomReactQuill from '../../component/Admin/CustomReactQuill'
import PreviewSide from '../../component/Admin/PreviewSide'
import '../../style/quill.snow.css'

const Write = () => {
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
export default Write
