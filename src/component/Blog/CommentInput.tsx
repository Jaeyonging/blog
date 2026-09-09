import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddComment } from '../../api/board/board'
import TopLoading from '../../lotties/TopLoading'
import { useUserStore, useGithubUserStore } from '../../store/data'
import GithubLoginButton from './GithubLoginButton'


const CommentInput = () => {
    const { bid } = useParams()
    const [comment, setComment] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useUserStore()
    const { githubUser, githubToken, resetGithub } = useGithubUserStore()
    const { mutate, isLoading, isError, error } = useAddComment();

    const handlesubmit = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!comment.trim()) return

        if (githubUser) {
            // GitHub 로그인 사용자: 토큰으로 본인 확인, 비번 불필요
            mutate({ bid: bid || '', content: comment, uid: githubUser.id, token: githubToken })
        } else {
            // 익명 사용자: 수정/삭제용 비밀번호 필요
            if (!password.trim()) {
                alert('비밀번호를 입력해주세요. (댓글 수정/삭제에 사용됩니다)')
                return
            }
            mutate({ bid: bid || '', content: comment, uid: user.id || '', password })
        }
        setComment('')
        setPassword('')
    }

    if (isLoading) return <TopLoading />
    if (isError) throw error

    return (
        <form className='flex flex-col gap-2' onSubmit={handlesubmit}>
            <input
                className='border-2 border-indigo-500 rounded-md p-2 text-black flex flex-wrap max-w-[100%]'
                type='text'
                name='comment-body'
                autoComplete='off'
                placeholder='댓글을 입력해주세요.'
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />

            {githubUser ? (
                <div className='flex items-center justify-between gap-2 text-sm'>
                    <span className='flex items-center gap-2'>
                        {githubUser.avatar_url && (
                            <img src={githubUser.avatar_url} alt='' className='w-6 h-6 rounded-full' />
                        )}
                        <span className='font-semibold'>{githubUser.nickname}</span> 님으로 작성
                    </span>
                    <button type='button' className='text-gray-400 hover:text-gray-200 underline' onClick={resetGithub}>
                        로그아웃
                    </button>
                </div>
            ) : (
                <div className='flex flex-col sm:flex-row gap-2'>
                    <input
                        className='border-2 border-indigo-500 rounded-md p-2 text-black sm:w-48'
                        type='password'
                        name='comment-password'
                        autoComplete='new-password'
                        placeholder='비밀번호 (익명)'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <GithubLoginButton />
                </div>
            )}

            <button type='submit' className='bg-indigo-500 text-white rounded-md p-2'>등록</button>
        </form>
    )
}

export default CommentInput
