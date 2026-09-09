import React from 'react'
import LazyLottie from '../component/Common/LazyLottie';

const SplashLoading = () => {
    return (
        <div className="fixed inset-0 bg-[#00000082] flex items-center justify-center z-50">
            <LazyLottie name="splash" style={{ width: 100, height: 100 }} />
        </div>
    )
}

export default SplashLoading
