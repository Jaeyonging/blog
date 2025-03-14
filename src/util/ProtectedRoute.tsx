import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import SplashLoading from '../lotties/SplashLoading';
import { useUserStore } from '../store/data';
import { checkMaster } from '../api/login/login';
import { useQuery } from 'react-query';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {id} = useUserStore();
  const {data, isLoading, isError, error} = useQuery(
    ['checkMaster', id],
    () => checkMaster(id),
    {
      enabled: !!id,
    }
  )

  if(isLoading) return <SplashLoading/>
  if(isError) throw error;

  if(data.result){
    return <>{children}</>;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;