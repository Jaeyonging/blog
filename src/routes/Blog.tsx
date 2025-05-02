import ApiErrorBoundary from '../boundary/ApiErrorBoundary'
import { BlogFetcher } from '../api/board/boardHooks'
import BlogContainer from '../component/Blog/BlogContainer'

const Blog = () => {

  return (
    <ApiErrorBoundary>
      <BlogFetcher>
        <BlogContainer />
      </BlogFetcher>
    </ApiErrorBoundary>
  )
}

export default Blog
