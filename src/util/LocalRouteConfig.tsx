import { lazy } from "react";
import Home from "../routes/Home";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

// Home 만 정적 import 한다(첫 화면이라 어차피 바로 필요하다).
// 나머지는 lazy 로 쪼개서, 방문한 경로의 코드만 받아오게 한다.
// 특히 관리자 페이지들이 Quill 에디터(gzip 55KB)를 끌고 오는데,
// 전부 정적 import 였을 땐 그게 홈 방문자한테까지 전부 내려가고 있었다.
// (App.tsx 의 <Suspense> 가 로딩 중 fallback 을 처리한다)
const Blogs = lazy(() => import("../routes/Blogs"));
const Blog = lazy(() => import("../routes/Blog"));
const Portfolio = lazy(() => import("../routes/Portfolio"));
const Visitor = lazy(() => import("../routes/Visitor"));
const Privacy = lazy(() => import("../routes/Privacy"));
const Login = lazy(() => import("../routes/Login"));

const Write = lazy(() => import("../routes/admin/Write"));
const AdminBlog = lazy(() => import("../routes/admin/AdminBlog"));
const AdminPortfolio = lazy(() => import("../routes/admin/AdminPortfolio"));
const AdminVisitor = lazy(() => import("../routes/admin/AdminVisitor"));
const AdminCode = lazy(() => import("../routes/admin/AdminCode"));
const AdminDb = lazy(() => import("../routes/admin/AdminDb"));
const AdminComment = lazy(() => import("../routes/admin/AdminComment"));

export const LocalRouteConfig = {
  public: [
    { path: "/", element: <Home /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blog/:bid', element: <Blog /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/visitor', element: <Visitor /> },
    { path: '/privacy', element: <Privacy /> },
    { path: "/login", element: <Login /> },
  ],
  protected: [
    { path: "/admin/", element: <AdminBlog /> },
    { path: "/admin/comment", element: <AdminComment /> },
    { path: "/admin/blog", element: <AdminBlog /> },
    { path: "/admin/portfolio", element: <AdminPortfolio /> },
    { path: "/admin/db", element: <AdminDb /> },
    { path: "/admin/visitor", element: <AdminVisitor /> },
    { path: "/admin/code", element: <AdminCode /> },
    { path: "/admin/write/:pid?", element: <Write /> },
  ],

  admin: [] as RouteConfig[],
} as const;
