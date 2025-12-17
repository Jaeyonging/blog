import React, { useState, useMemo } from 'react';
import CodePopup from '../Popup/CodePopup';
import { useQuery } from 'react-query';
import { getCode } from '../../api/code/code';
import Loading from '../../lotties/Loading';
import CodeCard from './CodeCard';
import { useCodeStore } from '../../store/data';

const CodeManage = () => {
  const {codes} = useCodeStore();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const groupedData = (codes?.results || []).reduce((acc: any, item: any) => {
    if (!acc[item.tag]) {
      acc[item.tag] = [];
    }
    acc[item.tag].push(item);
    return acc;
  }, {});


  return (
    <>
      <div className='flex flex-col p-4 gap-4'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-bold text-white'>코드 관리</h1>
          <button 
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl' 
            onClick={handlePopup}
          >
            + 코드 추가
          </button>
        </div>
        
        {groupedData && Object.keys(groupedData).length > 0 ? (
          Object.keys(groupedData).map((tag) => (
            <CodeCard key={tag} groupedData={groupedData} tag={tag} />
          ))
        ) : (
          <div className='text-center py-12 text-gray-400'>
            <p className='text-lg'>등록된 코드가 없습니다.</p>
            <p className='text-sm mt-2'>위의 "코드 추가" 버튼을 클릭하여 코드를 추가하세요.</p>
          </div>
        )}
      </div>

      <CodePopup isOpen={isPopupOpen} onClose={handlePopup} />
    </>
  );
};

export default CodeManage;
