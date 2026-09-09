import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 게시자 콘텐츠가 없는 화면에는 광고가 뜨면 안 된다.
// (AdSense 정책: "게시자 콘텐츠가 없는 화면에 Google 게재 광고")
//
// 직접 접속/크롤러는 서버(util/seo.js)가 광고 스크립트를 아예 빼고 HTML 을 내려주지만,
// SPA 내부 이동(예: / → /login)은 이미 로드된 auto-ads 스크립트가 살아 있어서
// 뒤늦게 광고를 꽂을 수 있다. 그 경로에 머무는 동안만 주입된 광고 유닛을 걷어낸다.
const NO_ADS = [
    /^\/login\/?$/i,
    /^\/visitor\/?$/i,
    /^\/admin(\/|$)/i,
    /^\/portfolio\/?$/i,
    /^\/privacy\/?$/i,
]

const AdsGuard = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        if (!NO_ADS.some((re) => re.test(pathname))) return

        // auto-ads 가 body 에 삽입하는 컨테이너(ins.adsbygoogle)를 제거
        const sweep = () => {
            document.querySelectorAll('ins.adsbygoogle').forEach((el) => el.remove())
        }

        sweep()
        const observer = new MutationObserver(sweep)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => observer.disconnect()
    }, [pathname])

    return null
}

export default AdsGuard
