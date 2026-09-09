import React from 'react'
import LazyLottie from '../component/Common/LazyLottie';

const TopLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/50 z-50 flex justify-center items-center">
      <LazyLottie name="loading" style={{ width: '10%', height: '10%' }} />
      <span className="text-[20px] font-bold">Loading...</span>
    </div>
  )
}

export default TopLoading
