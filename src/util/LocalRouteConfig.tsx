import { lazy, Suspense } from "react";
import Home from "../routes/Home";
import Admin from "../routes/admin/Admin";
import Blogs from "../routes/Blogs";
import Blog from "../routes/Blog";
import Portfolio from "../routes/Portfolio";
import Contact from "../routes/Contact";


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
    { path: '/contact', element: <Contact /> },
  ],
  protected: [
    { path: "/admin", element: <Admin /> },
  ],

  admin: [] as RouteConfig[],
} as const;
