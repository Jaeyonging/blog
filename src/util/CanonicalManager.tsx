import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// SPA 라우트 이동마다 canonical/og:url 을 "현재 호스트+경로"로 갱신한다.
// index.html 에 박힌 정적 canonical(blog.jaeyonging.com)이 apex(jaeyonging.com)
// 에서 그대로 노출되어 도메인이 어긋나는 문제를 보정한다(자기참조 canonical).
const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    let el = document.head.querySelector(selector) as HTMLElement | null
    if (!el) {
        el = create()
        document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
}

const CanonicalManager = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const url = window.location.origin + pathname

        upsert(
            'link[rel="canonical"]',
            () => {
                const l = document.createElement('link')
                l.setAttribute('rel', 'canonical')
                return l
            },
            'href',
            url
        )

        upsert(
            'meta[property="og:url"]',
            () => {
                const m = document.createElement('meta')
                m.setAttribute('property', 'og:url')
                return m
            },
            'content',
            url
        )
    }, [pathname])

    return null
}

export default CanonicalManager
