import { useEffect } from "react";
import Loading from "../../lotties/Loading";
import { useQuery } from "react-query";
import { useCodeStore } from "../../store/data";
import { getCode, getCodeByTag } from "./code";

export const CategoriesFetcher = ({ children }: { children: React.ReactNode }) => {
    const { setCodes, resetCodes } = useCodeStore();
    const { data, isLoading, isError, error } = useQuery(['getCodes', 'hash'], () => getCodeByTag('HASH'), {});

    useEffect(() => {
        if (data) {
            setCodes(data);
        }
        return () => {
            resetCodes();
        }
    }, [data])

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && children}</>
}

export const GetCodeFetcher = ({ children }: { children: React.ReactNode }) => {
    const {setCodes,resetCodes} = useCodeStore();
    const { data, isLoading, isError, error } = useQuery(['getCode'], getCode);

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && children}</>
}