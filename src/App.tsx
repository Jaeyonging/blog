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

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const {setUser} = useUserStore()
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
        if(res.id){
          setUser(res)
        }
      },
    }
  );

  if (isIPLoading || isCheckLoading) return <SplashLoading />;

  return (
    <>
      {!isAdmin ? <Topbar/> : <SideMenu />}
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
