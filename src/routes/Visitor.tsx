import React from 'react'
import VisitorCard from '../component/Visitor/VisitorCard'
import MessageInput from '../component/Visitor/MessageInput'
import { useQuery } from 'react-query'
import { getVisitBoard } from '../api/board/board'
import Loading from '../lotties/Loading'
import ApiErrorBoundary from '../boundary/ApiErrorBoundary'
import { VisitBoardFetcher } from '../api/board/boardHooks'
import VisitorContainer from '../component/Visitor/VisitorContainer'

const Visitor = () => {
  return (
    <ApiErrorBoundary>
      <VisitBoardFetcher>
        <VisitorContainer />
      </VisitBoardFetcher>
    </ApiErrorBoundary>
  )
}

export default Visitor
