import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { deleteVisit, getVisitLog, getVisitLogs } from '../../api/board/board'
import { useFetchDataStore } from '../../store/data'
import Loading from '../../lotties/Loading'

const VisitorManage = () => {
  const { data } = useFetchDataStore()
  const queryClient = useQueryClient()
  const [activeTab, setActiveTab] = useState<'visits' | 'logs'>('visits')

  const { data: visitLogData, isLoading: isLogLoading } = useQuery('getVisitLog', getVisitLog)
  const { data: visitLogsData, isLoading: isLogsLoading } = useQuery('getVisitLogs', getVisitLogs)

  const handleDeleteVisit = async (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      try {
        await deleteVisit(id)
        queryClient.invalidateQueries('getVisitBoard')
        alert('방명록이 삭제되었습니다.')
      } catch (error) {
        console.error('삭제 실패:', error)
        alert('삭제 중 오류가 발생했습니다.')
      }
    }
  }

  if (isLogLoading || isLogsLoading) return <Loading />

  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex gap-2 border-b border-gray-600'>
        <button
          className={`px-4 py-2 ${activeTab === 'visits' ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab('visits')}
        >
          방명록 관리
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'logs' ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          방문 통계
        </button>
      </div>

      {activeTab === 'visits' && (
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>방명록 목록</h2>
          {data && data.results && data.results.length > 0 ? (
            <div className='flex flex-col gap-2'>
              {data.results.map((visit: any) => (
                <div key={visit.id} className='border border-gray-600 rounded-md p-4 controls relative'>
                  <div className='flex flex-col gap-2'>
                    <div>
                      <span className='text-gray-400'>작성자: </span>
                      <span>{visit.nickname || '익명'}</span>
                    </div>
                    <div>
                      <span className='text-gray-400'>작성일: </span>
                      <span>{visit.created_at ? new Date(visit.created_at).toLocaleString('ko-KR') : '-'}</span>
                    </div>
                    <div className='mt-2'>
                      <span className='text-gray-400'>내용: </span>
                      <p className='mt-1'>{visit.message}</p>
                    </div>
                  </div>
                  <div className='optionsright flex gap-2'>
                    <button
                      className='bg-red-500 text-white px-3 py-1 rounded'
                      onClick={() => handleDeleteVisit(visit.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-gray-400 text-center py-8'>방명록이 없습니다.</div>
          )}
        </div>
      )}

      {activeTab === 'logs' && (
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-cardcolor p-4 rounded-lg'>
              <div className='text-gray-400 text-sm'>전체 방문자</div>
              <div className='text-2xl font-bold'>{visitLogData?.total || 0}</div>
            </div>
            <div className='bg-cardcolor p-4 rounded-lg'>
              <div className='text-gray-400 text-sm'>오늘 방문자</div>
              <div className='text-2xl font-bold'>{visitLogData?.today || 0}</div>
            </div>
            <div className='bg-cardcolor p-4 rounded-lg'>
              <div className='text-gray-400 text-sm'>전체 블로그 수</div>
              <div className='text-2xl font-bold'>{visitLogData?.blogcount || 0}</div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-2'>최근 30일 방문 통계</h3>
            {visitLogsData && visitLogsData.results && visitLogsData.results.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {visitLogsData.results.map((log: any, index: number) => (
                  <div key={index} className='flex items-center justify-between border border-gray-600 rounded-md p-2'>
                    <span>{log.visit_date}</span>
                    <span className='font-bold'>{log.count}명</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-gray-400 text-center py-4'>방문 기록이 없습니다.</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default VisitorManage
