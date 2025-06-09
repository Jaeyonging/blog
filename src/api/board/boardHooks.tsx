
import { useQuery } from "react-query";
import { getBlogs, getBoardById, getBoardByPid, getComments, getProjects, getVisitBoard } from "./board";
import { useBlogStore, useFetchDataStore } from "../../store/data";
import { useEffect } from "react";
import Loading from "../../lotties/Loading";
import { useParams, useSearchParams } from "react-router-dom";

export const useGetBlogs = (filter:string, tag: string) => {
    return useQuery(['getBlogs', filter, tag], () => getBlogs(filter, tag), {});
}

export const TopBlogsFetcher = ({children}:{children:React.ReactNode}) => {
    const { setTopBlogs, resetTopBlogs, setIsTopBlogsLoading } = useBlogStore();
    const { data, isLoading, isError, error } = useQuery(['getTopBlogs','top','all'], () => getBlogs('top', 'all'), {});

    useEffect(()=>{
        if(data){
            setTopBlogs(data);
            setIsTopBlogsLoading(false);
        }
        return () => {
            resetTopBlogs();
            setIsTopBlogsLoading(true);
        }
    },[data])

    if(isError) throw error;

    return <>{data && children}</>
}

export const RecentBlogsFetcher = ({children}:{children:React.ReactNode}) => {
    const { setRecentBlogs, resetRecentBlogs, setIsRecentBlogsLoading } = useBlogStore();
    const { data, isLoading, isError, error } = useQuery(['getRecentBlogs','recent','all'], () => getBlogs('recent', 'all'), {});

    useEffect(()=>{
        if(data){
            setRecentBlogs(data);
            setIsRecentBlogsLoading(false);
        }
        return () => {
            resetRecentBlogs();
            setIsRecentBlogsLoading(true);
        }
    },[data])

    if(isError) throw error;

    return <>{data && children}</>
}

export const BlogListsFetcher = ({children}:{children:React.ReactNode}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter') || 'recent';
    const tag = searchParams.get('tag') || 'all';

    const { setBlogs, resetBlogs, setIsBlogsLoading } = useBlogStore();
    const { data, isLoading, isError, error } = useQuery(['getBlogs', filter, tag], () => getBlogs(filter, tag));

    useEffect(()=>{

        if(data){
            setBlogs(data);
            setIsBlogsLoading(false);
        }
        return () => {
            resetBlogs();
            setIsBlogsLoading(true);
        }
    },[data])

    if(isError) throw error;

    return <>{data && children}</>
}

export const VisitBoardFetcher = ({children}:{children:React.ReactNode}) => {
    const {  setData } = useFetchDataStore();
    const { data, isLoading, isError, error } = useQuery(['getVisitBoard'], () => getVisitBoard());

    useEffect(()=>{
        if(data){
            setData(data);
        }
        return () => {
            setData(null);
        }
    },[data])

    if(isLoading) return <Loading />;
    if(isError) throw error;

    return <>{data && children}</>
}

export const PortfolioFetcher = ({children}:{children:React.ReactNode}) => {
    const { data, isLoading, isError, error } = useQuery(['getProjects'], () => getProjects());
    const { setData } = useFetchDataStore();

    useEffect(()=>{
        if(data){
            setData(data);
        }
        return () => {
            setData(null);
        }
    },[data])

    if(isLoading) return <Loading />;
    if(isError) throw error;

    return <>{data && children}</>
}

export const BlogFetcher = ({children}:{children:React.ReactNode}) => {
    const { bid } = useParams();
    const {setData} = useFetchDataStore();
    const { data, isLoading, isError, error } = useQuery(['getBoardById', bid], () => getBoardById(bid || ''), {
        enabled: !!bid,
    });

    useEffect(()=>{
        if(data){
            setData(data);
        }
        return () => {
            setData(null);
        }
    },[data])

    if(isLoading) return <Loading />;
    if(isError) throw error;

    return <>{data && children}</>
}

export const CommentFetcher = ({children}:{children:React.ReactNode}) => {
    const { setData } = useFetchDataStore();
    const { data, isLoading, isError, error } = useQuery('getComments', getComments,{
        useErrorBoundary: true
    })

    useEffect(()=>{
        if(data){
            setData(data);
        }
        return () => {
            setData(null);
        }
    },[data])

    if(isLoading) return <Loading/>
    if(isError) throw error

    return <>{data && children}</>
}