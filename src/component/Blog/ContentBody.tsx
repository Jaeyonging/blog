import React, { useEffect, useMemo, useRef, useState } from 'react'
import { decodeEntities } from '../../util/util'
// 글을 "보기만" 하는 화면인데 에디터(react-quill + quill, gzip 55KB)를 통째로 띄우고 있었다.
// readOnly 로 쓰던 것뿐이라, 같은 DOM 구조를 직접 그려주고 스타일만 가져온다.
// (스타일은 전에는 관리자/포트폴리오 쪽에서 전역으로 딸려오고 있었다. 라우트를 lazy 로
//  쪼개면서 그 경로들이 분리됐으므로, 본문 스타일은 여기서 직접 import 해야 한다.)
import '../../style/quill.snow.css';

interface Props {
    content: string;
}

const ContentBody = ({ content }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const navRef = useRef<HTMLElement>(null)
    const [headings, setHeadings] = useState<string[]>([])
    const [open, setOpen] = useState(true)

    // 목차는 sticky 라 스크롤을 내리면 헤더에 달라붙는다. 펼쳐진 채로 붙으면 화면을
    // 가려서, 붙는 순간 접고 맨 위로 돌아오면 다시 편다.
    // (xl 이상은 좌측 고정 사이드바라 CSS 가 항상 펼쳐둔다)
    //
    // 여닫힘이 요동치던 이유는 "상태를 바꾸면 그 상태를 판단하는 값이 같이 변하기" 때문이었다.
    // 목차가 접히면 문서 높이가 250px 쯤 줄고, 브라우저가 scrollTop 을 그만큼 보정한다.
    // 보정된 값이 다시 임계값 아래로 내려가면 목차가 도로 펴지고, 펴지면 높이가 늘어
    // 또 접히고를 반복한다. 그래서 아래 네 가지를 같이 넣었다.
    //   1) 접는 기준과 펴는 기준을 벌린다 (히스테리시스)
    //   2) 접힘 애니메이션(300ms)이 끝날 때까지는 아예 판단하지 않는다
    //   3) 기준선은 목차 자신이 아니라 바로 위에 둔 센티넬에서 잰다.
    //      sticky 요소의 offsetTop 은 화면에 달라붙으면 스크롤을 따라 같이 커진다.
    //      그래서 목차 자신을 기준으로 삼으면 "스크롤 > 기준" 이 영영 성립하지 않는다.
    //   4) 사용자가 직접 누르면 그 선택을 현재 상태로 삼는다 (핸들러가 되돌리지 않게)
    const stuckRef = useRef(false)
    const lockUntilRef = useRef(0)
    const navTopRef = useRef(0)
    const sentinelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const nav = navRef.current
        if (!nav || headings.length <= 1) return

        // 스크롤 주체는 window 가 아니라 App 의 overflow-y-auto 컨테이너다.
        const findScrollParent = (el: HTMLElement | null): HTMLElement | null => {
            let node = el?.parentElement ?? null
            while (node) {
                const overflowY = getComputedStyle(node).overflowY
                if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
                    return node
                }
                node = node.parentElement
            }
            return null
        }

        const container = findScrollParent(nav)
        if (!container) return

        // 센티넬은 흐름상 목차 바로 위에 있고 sticky 가 아니라서 위치가 안정적이다.
        // 목차가 접혀 높이가 줄어도 센티넬은 그 위에 있으므로 영향받지 않는다.
        const measure = () => {
            const s = sentinelRef.current
            if (!s) return
            navTopRef.current =
                s.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
        }
        measure()

        let ticking = false

        const check = () => {
            ticking = false
            // 접히거나 펴지는 중에는 높이가 계속 변하므로 판단을 미룬다
            if (performance.now() < lockUntilRef.current) return

            // 위쪽에 있을 때만 기준선을 다시 잰다. 늦게 로드된 이미지로 값이 밀릴 수 있다.
            if (!stuckRef.current) measure()

            const y = container.scrollTop
            const navTop = navTopRef.current
            // 접을 땐 navTop+8 을 넘어야 하고, 펼 땐 navTop-48 아래로 내려와야 한다.
            // 이 간격이 스크롤 보정으로 생기는 튐을 흡수한다.
            const next = stuckRef.current ? y > navTop - 48 : y > navTop + 8
            if (next === stuckRef.current) return

            stuckRef.current = next
            lockUntilRef.current = performance.now() + 400
            setOpen(!next)
        }

        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(check)
        }

        container.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', measure)
        window.addEventListener('load', measure)
        check()
        return () => {
            container.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', measure)
            window.removeEventListener('load', measure)
        }
    }, [headings.length])

    // 이 블로그는 h태그 대신 font-size 18px 이상의 span으로 섹션 제목을 표기한다.
    // 렌더된 .ql-editor 안에서 그 span들을 라이브로 조회한다. (Quill 재렌더로 id가
    // 날아갈 수 있어, 미리 박지 않고 매번 현재 DOM을 다시 읽는다.)
    const getHeadingEls = (): HTMLElement[] => {
        const editor = ref.current?.querySelector('.ql-editor')
        if (!editor) return []
        return Array.from(editor.querySelectorAll<HTMLElement>('span[style*="font-size"]'))
            .filter((el) => parseInt(el.style.fontSize || '0', 10) >= 18 && !!el.textContent?.trim())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeadings(getHeadingEls().map((el) => el.textContent!.trim()))
        }, 0)
        return () => clearTimeout(timer)
    }, [content])

    // 본문 이미지도 원본(수 MB)이 그대로 내려오고 있었다.
    // 본문 폭은 아무리 커도 1200px면 충분하니 서버에 그 크기를 요청하고,
    // 화면 밖 이미지는 스크롤해서 다다랐을 때 받게 lazy 를 붙인다.
    const html = useMemo(() => (
        content
            .replace(/<img\s/gi, '<img loading="lazy" decoding="async" ')
            .replace(/(<img[^>]*\ssrc=")([^"?]*\/files\/[^"?]+)"/gi, '$1$2?w=1200"')
    ), [content])

    // 본문은 content가 바뀔 때만 재렌더. (목차 여닫기로 본문 DOM이 교체되면
    // 깜빡임 클래스가 붙은 노드가 사라져 애니메이션이 끊기는 것을 방지)
    // ReactQuill(readOnly)이 만들던 DOM 구조를 그대로 그린다: .quill > .ql-container > .ql-editor
    const editor = useMemo(() => (
        <div className='p-2 w-full min-w-0 overflow-x-hidden'>
            <div className='quill'>
                <div className='ql-container ql-bubble'>
                    <div
                        className='ql-editor'
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    ), [html])

    const handleJump = (index: number) => {
        const el = getHeadingEls()[index]
        if (!el) return
        // 스크롤 컨테이너 최상단이 고정 헤더(60px) 뒤에서 시작하므로 헤더 높이만큼 띄운다.
        // 모바일은 상단 sticky 목차도 가리므로 목차 높이만큼 추가로 내린다.
        const HEADER = 64
        const isDesktop = window.matchMedia('(min-width: 1280px)').matches
        const offset = isDesktop ? HEADER + 16 : HEADER + (navRef.current?.offsetHeight || 0) + 12
        el.style.scrollMarginTop = `${offset}px`
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })

        // 해당 섹션 제목을 느리게 깜빡여 위치를 강조 (재클릭 시 재시작)
        el.classList.remove('toc-flash')
        void el.offsetWidth // reflow로 애니메이션 리셋
        el.classList.add('toc-flash')
        window.setTimeout(() => el.classList.remove('toc-flash'), 3000)
    }

    return (
        <div ref={ref} className='min-h-[70vh] w-full min-w-0'>
            {headings.length > 1 && (
                <div ref={sentinelRef} aria-hidden='true' className='h-0' />
            )}
            {headings.length > 1 && (
                <nav
                    ref={navRef}
                    // 목차가 접히면서 높이가 줄 때 브라우저가 스크롤을 보정(스크롤 앵커링)하면
                    // 위치가 튀면서 접힘/펼침이 요동친다. 이 영역에서는 앵커링을 끈다.
                    style={{ overflowAnchor: 'none' }}
                    className='sticky top-0 z-10 mb-4 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150
                               xl:fixed xl:top-24 xl:right-[calc(50%+408px)] xl:z-10 xl:mb-0 xl:max-h-[75vh] xl:overflow-y-auto
                               xl:w-56 min-[1440px]:w-72 2xl:w-80 min-[1920px]:w-96'
                >
                    <button
                        onClick={() => {
                            const next = !open
                            stuckRef.current = !next
                            lockUntilRef.current = performance.now() + 400
                            setOpen(next)
                        }}
                        className='flex w-full items-center justify-between text-sm font-semibold text-gray-100'
                    >
                        <span>목차</span>
                        <svg
                            className={`h-4 w-4 text-gray-300 transition-transform duration-300 xl:hidden ${open ? '' : '-rotate-90'}`}
                            viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='1.8'
                            strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'
                        >
                            <path d='M6 8l4 4 4-4' />
                        </svg>
                    </button>
                    {/* 접힐 때 툭 끊기지 않도록 max-height 로 부드럽게 접는다.
                        xl(사이드바)에서는 open 과 무관하게 항상 펼쳐둔다. */}
                    <ul
                        className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-out
                                    ${open ? 'mt-2 max-h-[50vh] opacity-100' : 'mt-0 max-h-0 opacity-0'}
                                    xl:mt-2 xl:max-h-[75vh] xl:opacity-100`}
                    >
                        {headings.map((text, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => handleJump(i)}
                                    className='w-full text-left text-sm text-gray-200 transition-colors hover:text-sky-300'
                                >
                                    {text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {editor}
        </div>
    )
}

export default ContentBody
