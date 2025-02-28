import axios from "axios";
import { API_URL } from "../util/server";
import { useMutation, useQueryClient } from "react-query";

export const addCode = async (name: string, tag: string, ext: string) => {
    const response = await axios.post(`${API_URL}/addCode`, {
        name, tag, ext
    });
    return response.data;
}

export const getCode = async () => {
    const response = await axios.get(`${API_URL}/getCodes`);
    return response.data;
}

export const getCodeByTag = async (tag: string) => {
    const response = await axios.post(`${API_URL}/getCodeByTag`, {
        tag
    });
    return response.data;
}

const getDb = async () => {
    const response = await axios.get(`${API_URL}/getDb`);
    return response.data;
}


export const useGetDb = () => {
    const queryClient = useQueryClient();

    return useMutation(getDb, {
        onSuccess: (data) => {
            const blob = new Blob([data], { type: 'application/sql' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'db_dump.sql';
            a.click();
            URL.revokeObjectURL(url);
        },
        onError: (error) => {
            console.error('DB 다운로드 에러:', error);
        },
    });
};