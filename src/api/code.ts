import axios from "axios";
import { API_URL } from "../util/server";

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