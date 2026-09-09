import React from 'react'

// 개인정보처리방침 — Google AdSense 심사 요건(쿠키/제3자 광고 고지 등) 충족용 정적 페이지
const Privacy = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 leading-relaxed">
            <h1 className="text-3xl font-bold mb-2">개인정보처리방침</h1>
            <p className="text-sm text-gray-400 mb-8">최종 수정일: 2026-06-20</p>

            <p className="mb-6">
                Jaeyonging 개발 블로그(이하 “사이트”)는 이용자의 개인정보를 중요하게 생각하며,
                「개인정보 보호법」을 준수합니다. 본 방침은 사이트가 어떤 정보를 수집하고
                어떻게 이용, 보관, 보호하는지를 설명합니다.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. 수집하는 정보</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>접속 기록: 방문 시 IP 주소, 브라우저/기기 정보, 방문 일시(접속 통계 목적)</li>
                <li>댓글 작성 정보: 닉네임, 댓글 내용, 익명 댓글의 수정 및 삭제용 비밀번호(암호화 저장)</li>
                <li>GitHub 로그인 시: GitHub가 제공하는 공개 프로필(닉네임, 아바타, 식별자)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. 정보의 이용 목적</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>댓글 등 콘텐츠 기능 제공 및 본인 확인(수정, 삭제)</li>
                <li>방문 통계 분석을 통한 서비스 개선</li>
                <li>부정 이용 방지 및 보안</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. 쿠키 및 제3자 광고(Google AdSense)</h2>
            <p className="mb-3">
                본 사이트는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google을 포함한
                제3자 광고 사업자는 쿠키를 사용하여 이용자의 이전 방문 정보를 바탕으로 맞춤형
                광고를 제공합니다. Google은 광고 쿠키(DART 쿠키 등)를 사용하여 이용자가 본 사이트
                및 다른 사이트를 방문한 기록에 기반해 광고를 표시합니다.
            </p>
            <ul className="list-disc pl-6 space-y-1">
                <li>
                    이용자는{' '}
                    <a className="text-indigo-400 underline" href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                        Google 광고 설정
                    </a>
                    에서 맞춤 광고를 비활성화할 수 있습니다.
                </li>
                <li>
                    제3자 광고 쿠키는{' '}
                    <a className="text-indigo-400 underline" href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                        www.aboutads.info
                    </a>
                    에서 선택적으로 거부할 수 있습니다.
                </li>
                <li>브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있습니다(일부 기능 제한 가능).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. 방문 분석 도구</h2>
            <p>
                본 사이트는 방문 통계 확인을 위해 Google Analytics를 사용할 수 있으며, 이 과정에서
                쿠키가 사용될 수 있습니다. 수집된 정보는 통계적 분석 목적으로만 활용됩니다.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. 보관 및 파기</h2>
            <p>
                수집된 정보는 목적 달성에 필요한 기간 동안만 보관하며, 목적이 달성되거나 이용자가
                삭제를 요청하는 경우 지체 없이 파기합니다.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. 이용자의 권리</h2>
            <p>
                이용자는 본인의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있으며, 아래 연락처로
                요청할 수 있습니다.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. 문의처</h2>
            <p>
                개인정보 관련 문의:{' '}
                <a className="text-indigo-400 underline" href="mailto:wodyd1318@naver.com">
                    wodyd1318@naver.com
                </a>
            </p>

            <p className="mt-8 text-sm text-gray-400">
                본 방침은 관련 법령 및 서비스 변경에 따라 개정될 수 있으며, 변경 시 본 페이지를 통해
                공지합니다.
            </p>
        </div>
    )
}

export default Privacy
