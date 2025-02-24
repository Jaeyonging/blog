import React from 'react'
import VisitorCard from '../component/Visitor/VisitorCard'
import MessageInput from '../component/Visitor/MessageInput'

const Visitor = () => {
  return (
    <div className='flex flex-col  p-2 overflow-hidden'>
      <span className='text-[24px] font-bold text-center'>Thanks for visiting my website!</span>
      <div className='flex flex-col gap-2 max-h-[calc(100vh-60px-300px)] overflow-y-auto'>
        <VisitorCard name='허수아비' message='Hello, world!' />
        <VisitorCard name='허수아비' message='Hello, world!' />
        <VisitorCard name='허수아비' message='Hello, world!' />
        <VisitorCard name='허수아비' message='Hello, world!' />
        <VisitorCard name='Jinyoung' message='Hello, world!' />
        <VisitorCard name='Jinyoung' message='Hello, world!' />
        <VisitorCard name='Jinyoung' message='Hello, world!' />
        <VisitorCard name='Jinyoung' message='Hello, world!' />
        <VisitorCard name='Jinyoung' message='Hello, world!' />
        <VisitorCard name='John Doe' message='Hello, world!' />
      </div>
      <MessageInput />
    </div>
  )
}

export default Visitor
