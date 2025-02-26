import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Props {
  title: string;
}

const CategoryCard = ({ title }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  // 다크 테마에 어울리는 텍스트 색상
  const colorPairs = [
    { text: 'text-emerald-400' },  // 청록색
    { text: 'text-sky-400' },      // 밝은 파랑
    { text: 'text-violet-400' },   // 보라색
    { text: 'text-rose-400' },     // 장미색
    { text: 'text-lime-400' },     // 라임색
    { text: 'text-orange-400' },   // 주황색
    { text: 'text-amber-400' },    // 황금색
    { text: 'text-teal-400' },     // 청록색
  ];

  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[randomIndex];
  }, []);

  const isSelected = selectedCategory === title;

  const handleClick = () => {
    if (isSelected) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', title);
    }
    setSearchParams(searchParams);
  };

  return (
    <div onClick={handleClick} className={`rounded-[10px] flex items-center px-3 py-1 cursor-pointer transition-colors duration-300 whitespace-nowrap min-w-max ${isSelected ? 'bg-cyan-500 text-white' : `${randomColor.text}`}`}>
      <span>{title}</span>
    </div>

  );
};

export default CategoryCard;
