import React from 'react'
import VisitorCard from '../component/Visitor/VisitorCard'
import MessageInput from '../component/Visitor/MessageInput'
import { useQuery } from 'react-query'
import { getVisitBoard } from '../api/board/board'
import Loading from '../lotties/Loading'

const Visitor = () => {

  const {data, isLoading, isError, error} = useQuery('getVisitBoard', getVisitBoard)
  if(isLoading) return <Loading />
  if(isError) return <div>Error</div>

  console.log(data)
  return (
    <div className='flex flex-col  p-2 overflow-hidden'>
      <span className='text-[24px] font-bold text-center'>Thanks for visiting my website!</span>
      <div className='flex flex-col gap-2 max-h-[calc(100vh-60px-300px)] overflow-y-auto min-h-[100px]'>
        {data && data.results.map((item: any) => (
          <VisitorCard name={item.nickname} message={item.message} key={item.id} />
        ))}
      </div>
      <MessageInput />
    </div>
  )
}

export default Visitor
