import { lazy } from "react";

const Home = lazy(() => import("../routes/Home"));
const Blogs = lazy(() => import("../routes/Blogs"));
const Blog = lazy(() => import("../routes/Blog"));
const Portfolio = lazy(() => import("../routes/Portfolio"));
const Visitor = lazy(() => import("../routes/Visitor"));
const Login = lazy(() => import("../routes/Login"));

// Admin Routes
const AdminBlog = lazy(() => import("../routes/admin/AdminBlog"));
const AdminComment = lazy(() => import("../routes/admin/AdminComment"));
const AdminPortfolio = lazy(() => import("../routes/admin/AdminPortfolio"));
const AdminDb = lazy(() => import("../routes/admin/AdminDb"));
const AdminVisitor = lazy(() => import("../routes/admin/AdminVisitor"));
const AdminCode = lazy(() => import("../routes/admin/AdminCode"));
const Write = lazy(() => import("../routes/admin/Write"));


interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

export const LocalRouteConfig = {
  public: [
    { path: "/", component: <Home /> },
    { path: '/blogs', component: <Blogs /> },
    { path: '/blog/:bid', component: <Blog /> },
    { path: '/portfolio', component: <Portfolio /> },
    { path: '/visitor', component: <Visitor /> },
    { path: "/login", component: <Login /> },
  ],
  protected: [
    { path: "/admin/", component: <AdminBlog /> },
    { path: "/admin/comment", component: <AdminComment /> },
    { path: "/admin/blog", component: <AdminBlog /> },
    { path: "/admin/portfolio", component: <AdminPortfolio /> },
    { path: "/admin/db", component: <AdminDb /> },
    { path: "/admin/visitor", component: <AdminVisitor /> },
    { path: "/admin/code", component: <AdminCode /> },
    { path: "/admin/write/:pid?", component: <Write /> },
  ],

  admin: [] as RouteConfig[],
} as const;
