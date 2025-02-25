import axios from "axios";
import { API_URL } from "../util/server";

export const writeBlogs = async (uid: string, title: string, content: string, file: File[]) => {
    const formData = new FormData();
    if (file.length > 0) {
        formData.append('uid', uid);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', file[0]);
    }
    const response = await axios.post(`${API_URL}/writeBlogs`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}