
import { useQuery } from "react-query";
import { getBlogs } from "./board";

export const FetchgetBlogs = (filter:string, tag: string) => {
    return useQuery(['getBlogs', filter, tag], () => getBlogs(filter, tag), {});
}

