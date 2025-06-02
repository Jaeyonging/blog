import { lazy, Suspense } from "react";
import Home from "../routes/Home";
import Blogs from "../routes/Blogs";
import Blog from "../routes/Blog";
import Portfolio from "../routes/Portfolio";
import Visitor from "../routes/Visitor";
import Write from "../routes/admin/Write";
import AdminBlog from "../routes/admin/AdminBlog";
import AdminPortfolio from "../routes/admin/AdminPortfolio";
import AdminVisitor from "../routes/admin/AdminVisitor";
import AdminCode from "../routes/admin/AdminCode";
import AdminDb from "../routes/admin/AdminDb";
import AdminComment from "../routes/admin/AdminComment";
import Login from "../routes/Login";


interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export const LocalRouteConfig = {
  public: [
    { path: "/", element: <Home /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blog/:bid', element: <Blog /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/visitor', element: <Visitor /> },
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
