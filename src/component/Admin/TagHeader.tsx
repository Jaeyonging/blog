import React from 'react'

interface Props {
    tag: string
    totalBlogCount: number
}

const TagHeader = ({ tag, totalBlogCount }: Props) => {
    return (
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold text-white'>{tag}</h2>
                {tag === 'HASH' && (
                    <span className='text-sm text-white bg-white/20 px-3 py-1 rounded-full font-semibold'>
                        총 {totalBlogCount}개 블로그 연결됨
                    </span>
                )}
            </div>
        </div>
    )
}

export default TagHeader
