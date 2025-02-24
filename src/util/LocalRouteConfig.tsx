import { lazy, Suspense } from "react";
import Home from "../routes/Home";
import Admin from "../routes/admin/Admin";
import Blogs from "../routes/Blogs";
import Blog from "../routes/Blog";
import Portfolio from "../routes/Portfolio";
import Visitor from "../routes/Visitor";
import Write from "../routes/admin/Write";


interface RouteConfig {
  path: string;
  element: JSX.Element;
}

{/* <Route path="/" element={<Home />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/blog/:title" element={<Blog />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/contact" element={<Contact />} /> */}

export const LocalRouteConfig = {
  public: [
    { path: "/", element: <Home /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blog/:title', element: <Blog /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/visitor', element: <Visitor /> },
  ],
  protected: [
    { path: "/admin", element: <Admin /> },
    { path: "/admin/write", element: <Write /> },
  ],

  admin: [] as RouteConfig[],
} as const;
