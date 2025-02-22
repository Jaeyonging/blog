import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getCookie } from './cookies';
import { checkToken } from '../api/login';
import Loading from '../lotties/Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const token = getCookie('token');
  const isOnboard = getCookie('onboard')
  const hostname = window.location.hostname;

  useEffect(() => {
    // const validateToken = async () => {
    //   try {
    //     let data = await checkToken(token);
    //     setIsTokenValid(true);
    //   } catch (error) {
    //     setIsTokenValid(false);
    //   }
    // };

    if (token) {
      // validateToken();
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
    }
  }, [token]);

  // if (isTokenValid === null) {
  //   return <Loading/>;
  // }
  // if (!isTokenValid) {
  //   return <Navigate to="/" replace />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;