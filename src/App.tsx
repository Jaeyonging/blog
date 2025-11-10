import { Suspense, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LocalRouteConfig } from "./util/LocalRouteConfig";
import ProtectedRoute from "./util/ProtectedRoute";
import Topbar from "./component/Common/Topbar";
import BottomBar from "./component/Common/BottomBar";
import ScrollToTop from "./component/Common/ScrollToTop";
import SideMenu from "./component/Admin/SideMenu";
import { useQuery, useMutation } from "react-query";
import Loading from "./lotties/Loading";
import SplashLoading from "./lotties/SplashLoading";
import AnimatedRoutes from "./util/AnimatedRoutes";
import { checkIP, getIPaddress } from "./api/login/login";
import { useUserStore } from "./store/data";
import PreView from "./component/Home/PreView";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { setUser } = useUserStore()
  const isAdmin = location.pathname.includes('/admin');
  const { data: ipData, isLoading: isIPLoading, isError: isIPError, error: ipError } = useQuery(
    ['getIPaddress'],
    getIPaddress,
    {
      onSuccess: (res) => {
        mutate(res.data.ip);
      },
    }
  );

  const { mutate, isLoading: isCheckLoading, isError: isCheckError, error: checkError } = useMutation(
    (ip: string) => checkIP(ip),
    {
      onSuccess: (res) => {
        if (res.id) {
          setUser(res)
        }
      },
    }
  );

  if (isIPLoading || isCheckLoading) return <SplashLoading />;

  return (
    <>
      <div className="flex relative h-[100vh] w-[100vw] justify-center overflow-hidden gap-[100px] bg-cardcolor">
        {!isAdmin && <PreView />}
        {!isAdmin ? <Topbar /> : <SideMenu />}
        <div ref={scrollContainerRef} className={`overflow-y-auto sm:pt-[60px] md:pt-[60px] sm:pb-[60px] md:pb-[60px] min-w-[450px] max-w-[450px] relative sm:w-[100%] sm:min-w-[100%] md:w-[100%] md:min-w-[100%] shadow-xl bg-[#1d202a] ${isAdmin ? 'w-[100%] min-w-full max-w-full flex' : 'text-white'}`}>
          <Suspense fallback={<SplashLoading />}>
            <ScrollToTop scrollContainerRef={scrollContainerRef} />
            <AnimatedRoutes />
          </Suspense>
        </div>
        {!isAdmin && <BottomBar />}
      </div>
    </>
  );
}

export default App;
