import React from 'react'

interface Props {
  comment: string;
  date: string;
  nickname?: string;
}

// 닉네임 첫 글자로 만드는 이니셜 아바타 색상 (닉네임마다 일관되게)
const COLORS = ['bg-rose-400', 'bg-amber-400', 'bg-emerald-400', 'bg-sky-400', 'bg-indigo-400', 'bg-fuchsia-400']

const CommentCard = ({ comment, nickname, date }: Props) => {
  const name = nickname || 'Guest'
  const color = COLORS[name.charCodeAt(0) % COLORS.length]

  return (
    <div className='flex gap-3 border border-gray-200/40 rounded-lg p-3'>
      <div className={`flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-white text-sm font-bold ${color}`}>
        {name.charAt(0).toUpperCase()}
      </div>
      <div className='flex flex-col gap-1 min-w-0 flex-1'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm font-semibold text-gray-100'>{name}</span>
          <span className='text-xs text-gray-400 shrink-0'>{date}</span>
        </div>
        <span className='text-sm text-gray-200 break-words whitespace-pre-wrap'>{comment}</span>
      </div>
    </div>
  )
}

export default CommentCard
