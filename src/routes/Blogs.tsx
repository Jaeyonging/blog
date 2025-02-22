import BlogLists from '../component/Blogs/BlogLists'
import Categories from '../component/Blogs/Categories'
import Filters from '../component/Blogs/Filters'

const Blogs = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <Filters/>
      <Categories/>
      <BlogLists/>
    </div>
  )
}

export default Blogs
