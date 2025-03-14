
import { useQuery } from "react-query";
import { getBlogs } from "./board";

export const useGetBlogs = (filter:string, tag: string) => {
    return useQuery(['getBlogs', filter, tag], () => getBlogs(filter, tag), {});
}

