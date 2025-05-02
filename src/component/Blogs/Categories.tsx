import { useQuery } from 'react-query';
import CategoryCard from './CategoryCard';
import { getCodeByTag } from '../../api/code/code';
import Loading from '../../lotties/Loading';
import { useCodeStore } from '../../store/data';

const Categories = () => {
  const { codes } = useCodeStore();
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-[20px] font-bold'>카테고리</span>
      <div className='flex overflow-x-auto gap-2'>
        {codes && codes.results.map((hash: any, index: any) => (
          <CategoryCard key={index} title={hash.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
