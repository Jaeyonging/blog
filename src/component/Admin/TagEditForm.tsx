import React from 'react'

interface Props {
    editName: string
    editExt: string
    onNameChange: (value: string) => void
    onExtChange: (value: string) => void
    onSave: () => void
    onCancel: () => void
}

const TagEditForm = ({ editName, editExt, onNameChange, onExtChange, onSave, onCancel }: Props) => {
    return (
        <div className='flex items-center gap-3'>
            <input 
                type="text" 
                value={editName} 
                onChange={(e) => onNameChange(e.target.value)}
                className='flex-1 border-2 border-blue-500 text-black rounded-md p-2 bg-white'
                placeholder='태그 이름'
            />
            <span className='text-gray-400'>-</span>
            <input 
                type="text" 
                value={editExt} 
                onChange={(e) => onExtChange(e.target.value)}
                className='w-24 border-2 border-blue-500 text-black rounded-md p-2 bg-white'
                placeholder='확장자'
            />
            <div className='flex gap-2'>
                <button 
                    className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2' 
                    onClick={onSave}
                >
                    저장
                </button>
                <button 
                    className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors' 
                    onClick={onCancel}
                >
                    취소
                </button>
            </div>
        </div>
    )
}

export default TagEditForm
