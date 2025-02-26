import React from 'react'
import ContentHeader from '../component/Blog/ContentHeader'
import ContentBody from '../component/Blog/ContentBody'
import ContentFooter from '../component/Blog/ContentFooter'
import ContentComment from '../component/Blog/ContentComment'
import ContentLikes from '../component/Blog/ContentLikes'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getBoardById } from '../api/board'
import Loading from '../lotties/Loading'

const Blog = () => {
  const { bid } = useParams();
  const { data, isLoading, isError, error } = useQuery(['getBoardById'], () => getBoardById(bid || ''), {
    enabled: !!bid,
  });
  if (isLoading) return <Loading />;
  if (isError) throw error;

  return (
    <div className='flex flex-col gap-2 p-2'>
      <ContentHeader title={data.title}/>
      <ContentBody content={data.content}/>
      <ContentLikes/>
      <ContentComment/>
      <ContentFooter/>
    </div>
  )
}

export default Blog
