import React from 'react'
import RelatedLists from './RelatedLists'

const ContentFooter = () => {
    return (
        <div className='flex flex-col mt-[20px]'>
            <h1 className='text-2xl font-bold'>연관 게시글</h1>
            <RelatedLists />
        </div>
    )
}

export default ContentFooter
