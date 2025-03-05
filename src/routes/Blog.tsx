import React, { useEffect } from 'react'
import ContentHeader from '../component/Blog/ContentHeader'
import ContentBody from '../component/Blog/ContentBody'
import ContentFooter from '../component/Blog/ContentFooter'
import ContentComment from '../component/Blog/ContentComment'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getBoardById, viewBlog } from '../api/board'
import Loading from '../lotties/Loading'
import ContentLikesComments from '../component/Blog/ContentLikes'

const Blog = () => {
  const { bid } = useParams();

  useEffect(() => {
    if (bid) {
      viewBlog(bid || '').then(() => {
      })
    }
  }, [bid]);
  
  const { data, isLoading, isError, error } = useQuery(['getBoardById', bid], () => getBoardById(bid || ''), {
    enabled: !!bid,
  });


  if (isLoading) return <Loading />;
  if (isError) throw error;


  return (
    <div className='flex flex-col gap-2 p-2'>
      <ContentHeader title={data.title} view={data.view} date={data.created_at} />
      <ContentBody content={data.content} />
      <ContentLikesComments like={data.likes} comment={data.comment_count} />
      <ContentComment comment={data.comments} />
      <ContentFooter />
    </div>
  )
}

export default Blog
