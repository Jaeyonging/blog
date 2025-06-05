import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import SplashLoading from '../lotties/SplashLoading';
import { checkMaster } from '../api/login/login';
import { useQuery } from 'react-query';
import { useAdminStore, useUserStore } from '../store/data';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {admin} = useAdminStore()
  const {data, isLoading, isError, error} = useQuery(
    ['checkMaster', admin],
    () => checkMaster(admin),
    {
      enabled: !!admin,
    }
  )

  if(isLoading) return <SplashLoading/>
  if(isError) throw error;

  if(data&& data.result){
    return <>{children}</>;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;