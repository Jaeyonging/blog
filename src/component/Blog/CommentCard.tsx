import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { deleteComment, updateComment } from '../../api/board/board'
import { useGithubUserStore } from '../../store/data'

interface Props {
  id: number;
  uid: number;
  comment: string;
  date: string;
  nickname?: string;
  avatar_url?: string | null;
  hasPwd?: boolean;
}

// 닉네임 첫 글자로 만드는 이니셜 아바타 색상 (닉네임마다 일관되게)
const COLORS = ['bg-rose-400', 'bg-amber-400', 'bg-emerald-400', 'bg-sky-400', 'bg-indigo-400', 'bg-fuchsia-400']

const CommentCard = ({ id, uid, comment, nickname, avatar_url, date, hasPwd }: Props) => {
  const name = nickname || 'Guest'
  const color = COLORS[name.charCodeAt(0) % COLORS.length]
  const queryClient = useQueryClient()
  const { githubUser, githubToken } = useGithubUserStore()

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(comment)

  // GitHub 본인 댓글이거나, 비번이 걸린 익명 댓글이면 수정/삭제 버튼 노출
  const ownedByGithub = !!githubUser && Number(githubUser.id) === Number(uid)
  const canManage = ownedByGithub || hasPwd

  // 익명 댓글은 비번을 받아서 보내고, GitHub 댓글은 토큰으로 인증한다.
  const askPassword = () => (ownedByGithub ? undefined : (prompt('비밀번호를 입력해주세요.') || ''))

  const refresh = () => queryClient.invalidateQueries('getBoardById')

  const handleDelete = async () => {
    const pw = askPassword()
    if (!ownedByGithub && !pw) return
    try {
      await deleteComment(String(id), pw, ownedByGithub ? githubToken || undefined : undefined)
      refresh()
    } catch (e: any) {
      alert(e?.response?.data?.error || '삭제에 실패했습니다.')
    }
  }

  const handleUpdate = async () => {
    if (!draft.trim()) return
    const pw = askPassword()
    if (!ownedByGithub && !pw) return
    try {
      await updateComment(String(id), draft, pw, ownedByGithub ? githubToken || undefined : undefined)
      setEditing(false)
      refresh()
    } catch (e: any) {
      alert(e?.response?.data?.error || '수정에 실패했습니다.')
    }
  }

  return (
    <div className='flex gap-3 border border-gray-200/40 rounded-lg p-3'>
      {avatar_url ? (
        <img src={avatar_url} alt='' className='shrink-0 w-9 h-9 rounded-full object-cover' />
      ) : (
        <div className={`flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-white text-sm font-bold ${color}`}>
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <div className='flex flex-col gap-1 min-w-0 flex-1'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm font-semibold text-gray-100'>{name}</span>
          <span className='text-xs text-gray-400 shrink-0'>{date}</span>
        </div>

        {editing ? (
          <div className='flex flex-col gap-2'>
            <input
              className='border border-indigo-400 rounded-md p-2 text-black text-sm'
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <div className='flex gap-2 text-xs'>
              <button className='text-indigo-300 hover:text-indigo-100' onClick={handleUpdate}>저장</button>
              <button className='text-gray-400 hover:text-gray-200' onClick={() => { setEditing(false); setDraft(comment) }}>취소</button>
            </div>
          </div>
        ) : (
          <span className='text-sm text-gray-200 break-words whitespace-pre-wrap'>{comment}</span>
        )}

        {canManage && !editing && (
          <div className='flex gap-2 text-xs text-gray-400'>
            <button className='hover:text-gray-200' onClick={() => setEditing(true)}>수정</button>
            <button className='hover:text-rose-400' onClick={handleDelete}>삭제</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentCard
