import BlogCard from '../Common/BlogCard'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import { getBlogs } from '../../api/board/board';
import SkeletonBlogCard from '../Common/SkeletonBlogCard';
import { useBlogStore } from '../../store/data';

const RecentBlogs = () => {
    const navigate = useNavigate()
    const {recentBlogs, isRecentBlogsLoading} = useBlogStore();
    return (
        <div>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-bold'>
                    최근 게시물
                </span>
                <span className='text-[13px] text-gray-400' onClick={()=>navigate('/blogs?filter=recent')}>
                    더보기
                </span>
            </div>
            <div className="flex overflow-x-auto gap-2">
            {isRecentBlogsLoading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonBlogCard key={index} />
                    ))
                ) : (
                    recentBlogs && recentBlogs.map((blog:any) => (
                        <BlogCard key={blog.id} blogData={blog} mode='card'/>
                    ))
                )}
            </div>
        </div>
    )
}

export default RecentBlogs
