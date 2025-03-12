import React from 'react'
import { useQuery } from 'react-query';
import { getBlogs } from '../board';
import Loading from '../../lotties/Loading';

const FetchgetBlogs = () => {
  const { data, isLoading, isError, error } = useQuery(['getBlogs', 'top', 'all'], () => getBlogs('top', 'all'), {});

  return { data, isLoading, isError, error }
}

export default FetchgetBlogs