import BlogSummary from "../component/Home/BlogSummary";
import Introduction from "../component/Home/Introduction";
import RecentBlogs from "../component/Home/RecentBlogs";
import TopBlogs from "../component/Home/TopBlogs";

const Home = () => {
  return (
    <div className="flex flex-col p-3 gap-3">
      <span className="text-center text-[25px] font-bold">Welcome to my Blog!</span>
      <BlogSummary />
      <Introduction/>
      <TopBlogs />
      <RecentBlogs/>
    </div>
  );
};

export default Home