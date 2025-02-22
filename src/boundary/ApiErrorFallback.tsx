import React from "react";
import { IoIosRefresh } from "react-icons/io";

export const ApiErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void; }) => {
  const statusCode = (error as any)?.response?.status || null;
  return (
    <div role="alert" className="flex flex-col items-center justify-center w-[100%] h-[100%]">
      <span className="text-[24px]">에러가 발생하였습니다.</span>
      <img src='../exit.gif' className="w-[100px] mb-[10px]" />
      <IoIosRefresh className="text-[40px] text-gray-500 cursor-pointer hover:text-black" onClick={resetErrorBoundary} />
    </div>
  );
};
