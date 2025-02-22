import React from 'react'
import ContentHeader from '../component/Blog/ContentHeader'
import ContentBody from '../component/Blog/ContentBody'
import ContentFooter from '../component/Blog/ContentFooter'
import ContentComment from '../component/Blog/ContentComment'
import ContentLikes from '../component/Blog/ContentLikes'

const Blog = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <ContentHeader/>
      <ContentBody/>
      <ContentLikes/>
      <ContentComment/>
      <ContentFooter/>
    </div>
  )
}

export default Blog
