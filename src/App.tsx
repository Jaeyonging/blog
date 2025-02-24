import { Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LocalRouteConfig } from "./util/LocalRouteConfig";
import ProtectedRoute from "./util/ProtectedRoute";
import GlobalErrorBoundary from "./boundary/GlobalErrorBoundary";
import Topbar from "./component/Common/Topbar";
import BottomBar from "./component/Common/BottomBar";
import ScrollToTop from "./component/Common/ScrollToTop";
import SideMenu from "./component/Admin/SideMenu";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation()
  const isAdmin = location.pathname.includes('/admin')

  return (
    <>
      {!isAdmin ? <Topbar scrollContainerRef={scrollContainerRef} /> : <SideMenu />}
      <GlobalErrorBoundary>
        <Suspense fallback={<div>로딩중...</div>}>
          <ScrollToTop scrollContainerRef={scrollContainerRef} />
          <div ref={scrollContainerRef} className={`${!isAdmin ? 'pt-[60px] overflow-y-auto h-[calc(100vh-60px)]' : 'pl-[150px]'} text-white`}>
            <Routes>
              {LocalRouteConfig.public.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}

              {LocalRouteConfig.protected.map((route) => (
                <Route key={route.path} path={route.path} element={<ProtectedRoute>{route.element}</ProtectedRoute>} />
              ))}
            </Routes>
          </div>
        </Suspense>
      </GlobalErrorBoundary>
      {!isAdmin && <BottomBar />}
    </>
  );
}

export default App;
