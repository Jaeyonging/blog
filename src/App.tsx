import { Suspense, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LocalRouteConfig } from "./util/LocalRouteConfig";
import ProtectedRoute from "./util/ProtectedRoute";
import GlobalErrorBoundary from "./boundary/GlobalErrorBoundary";
import Topbar from "./component/Common/Topbar";
import BottomBar from "./component/Common/BottomBar";
import ScrollToTop from "./component/Common/ScrollToTop";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Topbar scrollContainerRef={scrollContainerRef} />
      <GlobalErrorBoundary>
        <Suspense fallback={<div>로딩중...</div>}>
          <ScrollToTop scrollContainerRef={scrollContainerRef} />
          <div ref={scrollContainerRef} className="pt-[60px] overflow-y-auto h-[calc(100vh-60px)] text-white">
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
      <BottomBar />
    </>
  );
}

export default App;
