import React from 'react'
import { useQuery } from 'react-query'
import { getComments } from '../../api/board'
import Loading from '../../lotties/Loading'
import CommentCard from './CommentCard'

const CommentManage = () => {
    const { data, isLoading, isError, error } = useQuery('getComments', getComments)
    if(isLoading) return <Loading/>
    if(isError) throw error

    return (
        <div className='flex flex-col gap-2 p-2'>
            {data.results.map((item: any) => (
                <CommentCard commentData={item} key={item.id}/>
            ))}
        </div>
    )
}

export default CommentManage
