import { Suspense, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LocalRouteConfig } from "./util/LocalRouteConfig";
import ProtectedRoute from "./util/ProtectedRoute";
import Topbar from "./component/Common/Topbar";
import BottomBar from "./component/Common/BottomBar";
import ScrollToTop from "./component/Common/ScrollToTop";
import SideMenu from "./component/Admin/SideMenu";
import { useQuery } from "react-query";
import Loading from "./lotties/Loading";
import SplashLoading from "./lotties/SplashLoading";
import AnimatedRoutes from "./util/AnimatedRoutes";
import CanonicalManager from "./util/CanonicalManager";
import AdsGuard from "./util/AdsGuard";
import { checkIP } from "./api/login/login";
import { useUserStore } from "./store/data";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { setUser } = useUserStore()
  const isAdmin = location.pathname.includes('/admin');

  // IP는 서버가 헤더에서 추출하므로 클라이언트는 /checkIP만 한 번 호출하면 된다.
  const { isLoading: isCheckLoading } = useQuery(
    ['checkIP'],
    checkIP,
    {
      onSuccess: (res) => {
        if (res?.id) {
          setUser(res)
        }
      },
    }
  );

  if (isCheckLoading) return <SplashLoading />;

  return (
    <>
      <CanonicalManager />
      <AdsGuard />
      {!isAdmin ? <Topbar /> : <SideMenu />}
      <Suspense fallback={<SplashLoading />}>
        <ScrollToTop scrollContainerRef={scrollContainerRef} />
        <div ref={scrollContainerRef} className={`${!isAdmin ? 'pt-[60px] overflow-y-auto h-[calc(100vh-60px)]' : 'pl-[150px]'} text-white`}>
          <AnimatedRoutes />
        </div>
      </Suspense>
      {!isAdmin && <BottomBar />}
    </>
  );
}

export default App;
