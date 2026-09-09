import React from 'react'
import LazyLottie from '../component/Common/LazyLottie';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <LazyLottie name="loading" style={{ width: '10%', height: '10%' }} />
      <span className="text-[20px] font-bold">Loading...</span>
    </div>
  )
}

export default Loading;
