import axios from "axios";
import { API_URL } from "../util/server";

export const writeBlogs = async (uid: string, title: string, descr: string, tags: string[], content: string, files: File[]) => {
    const formData = new FormData();
    if (files.length > 0) {
        files.forEach(file => formData.append('files', file));
    }
    formData.append('uid', uid);
    formData.append('title', title);
    formData.append('descr', descr);
    formData.append('content', content);
    tags.forEach(tag => formData.append('tags[]', tag));

    const response = await axios.post(`${API_URL}/writeBlogs`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}

export const getBoardById = async (bid: string) => {
    const response = await axios.post(`${API_URL}/getBoardById`, {bid});
    return response.data;
}

export const getBlogs = async()=>{
    const response = await axios.get(`${API_URL}/getBlogs`);
    return response.data;
}