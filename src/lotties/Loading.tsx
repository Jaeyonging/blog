import React from 'react'
import Lottie from 'lottie-react';
import loadingAnimation from '../lotties/loading.json';

const Loading = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center w-[100%] h-[100%] bg-[rgb(0 0 0 / 50%)] z-[9999]'>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  )
}

export default Loading;
