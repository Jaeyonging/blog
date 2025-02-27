import React, { useEffect } from 'react'
import ContentHeader from '../component/Blog/ContentHeader'
import ContentBody from '../component/Blog/ContentBody'
import ContentFooter from '../component/Blog/ContentFooter'
import ContentComment from '../component/Blog/ContentComment'
import ContentLikes from '../component/Blog/ContentLikes'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getBoardById, viewBlog } from '../api/board'
import Loading from '../lotties/Loading'

const Blog = () => {
  const { bid } = useParams();

  useEffect(() => {
    if (bid) {
      const blogKey = `viewed_${bid}`;
      if (!localStorage.getItem(blogKey)) {
        viewBlog(bid || '').then(() => {
          localStorage.setItem(blogKey, 'true');
        })

        setTimeout(() => {
          localStorage.removeItem(blogKey);
        }, 60000);
      }
    }
  }, [bid]);
  
  const { data, isLoading, isError, error } = useQuery(['getBoardById'], () => getBoardById(bid || ''), {
    enabled: !!bid,
  });
  if (isLoading) return <Loading />;
  if (isError) throw error;


  return (
    <div className='flex flex-col gap-2 p-2'>
      <ContentHeader title={data.title} />
      <ContentBody content={data.content} />
      <ContentLikes />
      <ContentComment />
      <ContentFooter />
    </div>
  )
}

export default Blog
