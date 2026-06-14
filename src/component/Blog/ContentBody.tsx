import React, { useEffect, useMemo, useRef, useState } from 'react'
import { decodeEntities } from '../../util/util'
import ReactQuill from 'react-quill';

interface Props {
    content: string;
}

const ContentBody = ({ content }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const navRef = useRef<HTMLElement>(null)
    const [headings, setHeadings] = useState<string[]>([])
    const [open, setOpen] = useState(true)

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

    // 본문은 content가 바뀔 때만 재렌더. (목차 여닫기로 ReactQuill DOM이 교체되면
    // 깜빡임 클래스가 붙은 노드가 사라져 애니메이션이 끊기는 것을 방지)
    const editor = useMemo(() => (
        <div className='p-2 w-full min-w-0 overflow-x-hidden'>
            <ReactQuill value={content} readOnly={true} theme="bubble" />
        </div>
    ), [content])

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
                <nav
                    ref={navRef}
                    className='sticky top-0 z-20 mb-4 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150
                               xl:fixed xl:top-24 xl:right-[calc(50%+408px)] xl:z-30 xl:mb-0 xl:max-h-[75vh] xl:overflow-y-auto
                               xl:w-56 min-[1440px]:w-72 2xl:w-80 min-[1920px]:w-96'
                >
                    <button
                        onClick={() => setOpen(!open)}
                        className='flex w-full items-center justify-between text-sm font-semibold text-gray-100'
                    >
                        <span>목차</span>
                        <span className='text-gray-300 xl:hidden'>{open ? '▾' : '▸'}</span>
                    </button>
                    <ul className={`mt-2 flex-col gap-1 ${open ? 'flex' : 'hidden'} xl:flex`}>
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
