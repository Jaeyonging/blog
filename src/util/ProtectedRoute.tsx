import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getCookie } from './cookies';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { useQuery } from 'react-query';
import { checkMaster } from '../api/login';
import SplashLoading from '../lotties/SplashLoading';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const id = useSelector((state: RootState) => state.user.uid) || '-1';
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