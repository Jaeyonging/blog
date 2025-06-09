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
      <div className='flex flex-col p-2'>
        <button className='border-[1px] rounded-[10px] gap-2 cursor-pointer py-3 w-[80%] ml-[10%] hover:bg-gray-200 hover:text-black' onClick={handlePopup}>코드 추가</button>
        {groupedData && Object.keys(groupedData).map((tag) => (
          <CodeCard key={tag} groupedData={groupedData} tag={tag} />
        ))}
      </div>

      <CodePopup isOpen={isPopupOpen} onClose={handlePopup} />
    </>
  );
};

export default CodeManage;
