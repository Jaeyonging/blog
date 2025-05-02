import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import SplashLoading from '../lotties/SplashLoading';
import { checkMaster } from '../api/login/login';
import { useQuery } from 'react-query';
import { useUserStore } from '../store/data';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {user} = useUserStore();
  const {data, isLoading, isError, error} = useQuery(
    ['checkMaster', user.id],
    () => checkMaster(user.id),
    {
      enabled: !!user.id,
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