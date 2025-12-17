import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Props {
  title: string;
}

const CategoryCard = ({ title }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('tag');

  const colorPairs = [
    { text: 'text-emerald-400' }, 
    { text: 'text-sky-400' },      
    { text: 'text-violet-400' },   
    { text: 'text-rose-400' },     
    { text: 'text-lime-400' },    
    { text: 'text-orange-400' },  
    { text: 'text-amber-400' },    
    { text: 'text-teal-400' },     
  ];

  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[randomIndex];
  }, []);

  const isSelected = selectedCategory === title;

  const handleClick = () => {
    if (isSelected) {
      searchParams.delete('tag');
    } else {
      searchParams.set('tag', title);
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
