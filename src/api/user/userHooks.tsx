import { useEffect } from "react";
import Loading from "../../lotties/Loading";
import { useQuery } from "react-query";
import { useCodeStore, useVisitLogStore } from "../../store/data";
import { getVisitLog } from "./user";

export const VisitLogFetcher = ({children}:{children:React.ReactNode}) => {
    const { setVisitLogs, resetVisitLogs} = useVisitLogStore();
    const { data, isLoading, isError, error } = useQuery(['getVisitLog'], () => getVisitLog(), {});

    useEffect(()=>{
        if(data){
            setVisitLogs(data);
        }
        return () => {
            resetVisitLogs();
        }
    },[data])

    if(isLoading) return <Loading/>;
    if(isError) throw error;

    return <>{data && children}</>
}