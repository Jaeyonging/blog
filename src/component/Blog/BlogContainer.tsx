import React, { useEffect } from 'react'
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'
import ContentLikesComments from './ContentLikes'
import ContentComment from './ContentComment'
import { useFetchDataStore } from '../../store/data'
import { viewBlog } from '../../api/board/board'

const BlogContainer = () => {
    const { data } = useFetchDataStore();
    useEffect(() => {
        if (data && data.board_id) {
            viewBlog(data.board_id);
        }
    }, [data])

    return (
        <>
            {data && (
                <div className='flex flex-col gap-2 p-2'>
                    <ContentHeader title={data.title} view={data.view} date={data.created_at} />
                    <ContentBody content={data.content} />
                    <ContentLikesComments like={data.likes} comment={data.comment_count} />
                    <ContentComment comment={data.comments} />
                    {/* <ContentFooter /> */}
                </div>
            )
            }
        </>
    )
}

export default BlogContainer
