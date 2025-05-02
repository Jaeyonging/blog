import { useEffect } from "react";
import Loading from "../../lotties/Loading";
import { useQuery } from "react-query";
import { useCodeStore } from "../../store/data";
import { getCodeByTag } from "./code";

export const CategoriesFetcher = ({children}:{children:React.ReactNode}) => {
    const { setCodes, resetCodes} = useCodeStore();
    const { data, isLoading, isError, error } = useQuery(['getCodes'], () => getCodeByTag('HASH'), {});

    useEffect(()=>{
        if(data){
            setCodes(data);
        }
        return () => {
            resetCodes();
        }
    },[data])

    if(isLoading) return <Loading/>;
    if(isError) throw error;

    return <>{data && children}</>
}