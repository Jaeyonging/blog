import React from 'react'
import { Link } from 'react-router-dom'

// 페이지 하단의 짧은 개인정보처리방침 링크.
// mb 는 고정 BottomBar(h-60px)에 가려지지 않도록 여백 확보.
const PrivacyLink = () => (
    <div className="mt-6 mb-20 flex justify-center">
        <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 underline">
            개인정보처리방침
        </Link>
    </div>
)

export default PrivacyLink
