import CategoryCard from './CategoryCard';

const Categories = () => {
  const categories = ['React', 'JavaScript', 'CSS', 'Node.js', 'TypeScript', 'Python', 'GraphQL'];

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-[20px] font-bold'>카테고리</span>
      <div className='flex overflow-x-auto gap-2'>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
