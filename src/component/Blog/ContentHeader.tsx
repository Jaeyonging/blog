import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ContentHeader = () => {
    const {title} = useParams()
    return (
        <div className='flex flex-col gap-2 p-2 items-center border-b border-gray-300'>
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    )
}

export default ContentHeader
