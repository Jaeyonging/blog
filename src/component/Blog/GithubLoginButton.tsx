import React, { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { API_URL } from '../../util/server'
import { useGithubUserStore } from '../../store/data'

// GitHub 로그인 팝업을 띄우고, 콜백 창이 postMessage로 보내준 토큰/유저를 저장한다.
const GithubLoginButton = () => {
    const { setGithub } = useGithubUserStore()
    const popupRef = useRef<Window | null>(null)

    useEffect(() => {
        const apiOrigin = new URL(API_URL).origin
        const onMessage = (e: MessageEvent) => {
            // 우리 API 서버에서 온 메시지만 신뢰
            if (e.origin !== apiOrigin) return
            const data = e.data
            if (data?.type === 'github-auth' && data.token && data.user) {
                setGithub(data.user, data.token)
                popupRef.current?.close()
            }
        }
        window.addEventListener('message', onMessage)
        return () => window.removeEventListener('message', onMessage)
    }, [setGithub])

    const openPopup = () => {
        const w = 600, h = 700
        const left = window.screenX + (window.outerWidth - w) / 2
        const top = window.screenY + (window.outerHeight - h) / 2
        popupRef.current = window.open(
            `${API_URL}/auth/github?origin=${encodeURIComponent(window.location.origin)}`,
            'github-oauth',
            `width=${w},height=${h},left=${left},top=${top}`
        )
    }

    return (
        <button
            type='button'
            onClick={openPopup}
            className='flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md p-2'
        >
            <FaGithub /> GitHub으로 로그인
        </button>
    )
}

export default GithubLoginButton
