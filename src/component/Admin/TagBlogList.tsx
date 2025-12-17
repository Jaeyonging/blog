import React from 'react'
import { useQuery } from 'react-query'
import { getBlogsByTagId } from '../../api/code/code'
import { useNavigate } from 'react-router-dom'

interface Props {
    tagId: string
    isExpanded: boolean
}

const TagBlogList = ({ tagId, isExpanded }: Props) => {
    const navigate = useNavigate()
    const { data: blogsData, isLoading: blogsLoading } = useQuery(
        ['getBlogsByTagId', tagId],
        () => getBlogsByTagId(tagId),
        { enabled: isExpanded }
    )

    const handleBlogClick = (blogId: string) => {
        navigate(`/admin/write/${blogId}`)
    }

    if (!isExpanded) return null

    if (blogsLoading) {
        return (
            <div className='mt-4 pt-4 border-t border-gray-700'>
                <div className='text-gray-400 text-center py-4'>로딩 중...</div>
            </div>
        )
    }

    if (!blogsData?.results || blogsData.results.length === 0) {
        return (
            <div className='mt-4 pt-4 border-t border-gray-700'>
                <div className='text-gray-400 text-center py-4'>연결된 블로그가 없습니다.</div>
            </div>
        )
    }

    return (
        <div className='mt-4 pt-4 border-t border-gray-700'>
            <div className='space-y-2 max-h-64 overflow-y-auto'>
                {blogsData.results.map((blog: any) => (
                    <div
                        key={blog.id}
                        onClick={() => handleBlogClick(blog.id)}
                        className='bg-gray-700 hover:bg-gray-600 rounded-md p-3 cursor-pointer transition-colors'
                    >
                        <div className='flex items-start justify-between'>
                            <div className='flex-1'>
                                <h4 className='text-white font-medium mb-1'>{blog.title}</h4>
                                {blog.descr && (
                                    <p className='text-gray-400 text-sm mb-2 line-clamp-1'>{blog.descr}</p>
                                )}
                                <div className='flex items-center gap-4 text-xs text-gray-500'>
                                    <span>{blog.created_at}</span>
                                    <span>조회 {blog.view}</span>
                                    <span>좋아요 {blog.likes}</span>
                                    <span>댓글 {blog.comment_count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TagBlogList
