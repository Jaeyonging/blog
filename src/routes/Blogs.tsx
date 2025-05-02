import { BlogListsFetcher } from '../api/board/boardHooks'
import { CategoriesFetcher } from '../api/code/codeHooks'
import ApiErrorBoundary from '../boundary/ApiErrorBoundary'
import BlogLists from '../component/Blogs/BlogLists'
import Categories from '../component/Blogs/Categories'
import Filters from '../component/Blogs/Filters'

const Blogs = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <Filters />
      <ApiErrorBoundary>
        <CategoriesFetcher>
          <Categories />
        </CategoriesFetcher>
      </ApiErrorBoundary>
      <ApiErrorBoundary>
        <BlogListsFetcher>
          <BlogLists />
        </BlogListsFetcher>
      </ApiErrorBoundary>
    </div>
  )
}

export default Blogs
