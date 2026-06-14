import React from 'react'

// text에서 keyword와 일치하는 부분을 <mark>로 감싸 반환한다. (대소문자 무시)
export const highlightText = (text: string, keyword: string): React.ReactNode => {
    if (!keyword || !text) return text

    // 정규식 특수문자 이스케이프
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'))

    return parts.map((part, i) =>
        part.toLowerCase() === keyword.toLowerCase()
            ? <mark key={i} className='bg-yellow-300 text-black rounded-sm px-0.5'>{part}</mark>
            : part
    )
}
