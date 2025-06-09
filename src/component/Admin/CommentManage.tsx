import React from 'react'
import { useQuery } from 'react-query'
import { getComments } from '../../api/board/board'
import Loading from '../../lotties/Loading'
import CommentCard from './CommentCard'
import { useFetchDataStore } from '../../store/data'

const CommentManage = () => {
    const {data} = useFetchDataStore();

    return (
        <div className='flex flex-col gap-2 p-2'>
            {data && data.results && data.results.map((item: any) => (
                <CommentCard commentData={item} key={item.comment_id}/>
            ))}
        </div>
    )
}

export default CommentManage
