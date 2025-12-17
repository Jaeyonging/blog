import React, { useState } from 'react'
import { updateCode, deleteCode } from '../../api/code/code'
import { useQueryClient } from 'react-query'
import TagHeader from './TagHeader'
import TagItem from './TagItem'

interface Props {
    groupedData: any
    tag: string
}

const CodeCard = ({ groupedData, tag }: Props) => {
    const queryClient = useQueryClient()
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editName, setEditName] = useState('')
    const [editExt, setEditExt] = useState('')
    const [expandedTagId, setExpandedTagId] = useState<string | null>(null)

    const handleEdit = (item: any) => {
        setEditingId(item.id)
        setEditName(item.name)
        setEditExt(item.ext || '')
    }

    const handleSave = async (id: string) => {
        try {
            await updateCode(id, editName, tag, editExt)
            queryClient.invalidateQueries('getCode')
            setEditingId(null)
            setEditName('')
            setEditExt('')
        } catch (error: any) {
            console.error('태그 수정 실패:', error)
            alert(error.response?.data?.error || '태그 수정 중 오류가 발생했습니다.')
        }
    }

    const handleCancel = () => {
        setEditingId(null)
        setEditName('')
        setEditExt('')
    }

    const handleDelete = async (id: string, item: any) => {
        const blogCount = item.blog_count || 0;
        const confirmMessage = blogCount > 0 
            ? `이 태그는 ${blogCount}개의 블로그 글에 연결되어 있습니다. 정말 삭제하시겠습니까?`
            : '정말 삭제하시겠습니까?';
            
        if (confirm(confirmMessage)) {
            try {
                await deleteCode(id)
                queryClient.invalidateQueries('getCode')
            } catch (error: any) {
                console.error('태그 삭제 실패:', error)
                alert(error.response?.data?.error || '태그 삭제 중 오류가 발생했습니다.')
            }
        }
    }

    const toggleBlogList = (tagId: string) => {
        setExpandedTagId(expandedTagId === tagId ? null : tagId)
    }

    const totalBlogCount = groupedData[tag].reduce((sum: number, item: any) => sum + (item.blog_count || 0), 0);

    return (
        <div className='mt-6 bg-cardcolor rounded-lg shadow-lg overflow-hidden'>
            <TagHeader tag={tag} totalBlogCount={totalBlogCount} />
            
            <div className='p-4 space-y-3'>
                {groupedData[tag].map((item: any) => (
                    <TagItem
                        key={item.id}
                        item={item}
                        tag={tag}
                        editingId={editingId}
                        editName={editName}
                        editExt={editExt}
                        expandedTagId={expandedTagId}
                        onEdit={handleEdit}
                        onNameChange={setEditName}
                        onExtChange={setEditExt}
                        onSave={handleSave}
                        onCancel={handleCancel}
                        onDelete={handleDelete}
                        onToggleBlogList={toggleBlogList}
                    />
                ))}
            </div>
        </div>
    )
}

export default CodeCard
