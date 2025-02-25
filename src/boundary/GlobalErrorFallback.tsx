import React from "react";
import Lottie from "react-lottie";
import errorAnimation from '../lotties/error.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: errorAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const GlobalErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void; }) => {
  const statusCode = (error as any)?.response?.status || null;
  return (
    <div role="alert" className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <Lottie options={defaultOptions} width={'100%'} height={'auto'} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={resetErrorBoundary}>
        홈으로 돌아가기
      </button>
    </div>
  );
};
