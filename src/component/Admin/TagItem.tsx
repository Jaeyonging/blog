import React from 'react'
import { FaChevronDown, FaChevronUp, FaBlog, FaEdit, FaTrash } from 'react-icons/fa'
import TagBlogList from './TagBlogList'
import TagEditForm from './TagEditForm'

interface Props {
    item: any
    tag: string
    editingId: string | null
    editName: string
    editExt: string
    expandedTagId: string | null
    onEdit: (item: any) => void
    onNameChange: (value: string) => void
    onExtChange: (value: string) => void
    onSave: (id: string) => void
    onCancel: () => void
    onDelete: (id: string, item: any) => void
    onToggleBlogList: (tagId: string) => void
}

const TagItem = ({
    item,
    tag,
    editingId,
    editName,
    editExt,
    expandedTagId,
    onEdit,
    onNameChange,
    onExtChange,
    onSave,
    onCancel,
    onDelete,
    onToggleBlogList
}: Props) => {
    const isEditing = editingId === item.id
    const isExpanded = expandedTagId === item.id

    return (
        <div className='bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all'>
            {isEditing ? (
                <TagEditForm
                    editName={editName}
                    editExt={editExt}
                    onNameChange={onNameChange}
                    onExtChange={onExtChange}
                    onSave={() => onSave(item.id)}
                    onCancel={onCancel}
                />
            ) : (
                <>
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-3'>
                            <span className='text-lg font-semibold text-white'>{item.name}</span>
                            {item.ext && (
                                <span className='text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded'>
                                    {item.ext}
                                </span>
                            )}
                            {tag === 'HASH' && item.blog_count > 0 && (
                                <span className='text-xs text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full font-medium flex items-center gap-1'>
                                    <FaBlog className='text-xs' />
                                    {item.blog_count}개 블로그
                                </span>
                            )}
                        </div>
                        <div className='flex items-center gap-2'>
                            {tag === 'HASH' && item.blog_count > 0 && (
                                <button
                                    onClick={() => onToggleBlogList(item.id)}
                                    className='text-blue-400 hover:text-blue-300 px-3 py-1 rounded-md hover:bg-blue-900/30 transition-colors flex items-center gap-2'
                                >
                                    {isExpanded ? (
                                        <>
                                            <FaChevronUp className='text-xs' />
                                            <span className='text-sm'>접기</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaChevronDown className='text-xs' />
                                            <span className='text-sm'>블로그 보기</span>
                                        </>
                                    )}
                                </button>
                            )}
                            <button 
                                className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-2 text-sm' 
                                onClick={() => onEdit(item)}
                            >
                                <FaEdit className='text-xs' />
                                수정
                            </button>
                            <button 
                                className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-2 text-sm' 
                                onClick={() => onDelete(item.id, item)}
                            >
                                <FaTrash className='text-xs' />
                                삭제
                            </button>
                        </div>
                    </div>

                    {tag === 'HASH' && (
                        <TagBlogList tagId={item.id} isExpanded={isExpanded} />
                    )}
                </>
            )}
        </div>
    )
}

export default TagItem
