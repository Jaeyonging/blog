import { useQuery } from 'react-query';
import CategoryCard from './CategoryCard';
import { getCodeByTag } from '../../api/code/code';
import Loading from '../../lotties/Loading';

const Categories = () => {
  const { data, isLoading, isError, error } = useQuery(['getCodeByTag'], () => getCodeByTag('HASH'));
  
  if (isLoading) return <Loading />;
  if (isError) throw error;

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-[20px] font-bold'>카테고리</span>
      <div className='flex overflow-x-auto gap-2'>
        {data.results.map((hash: any, index: any) => (
          <CategoryCard key={index} title={hash.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
