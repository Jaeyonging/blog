import axios from "axios";
import { API_URL } from "../../util/server";

export const getUserInfo = async (uid: string) => {
    const response = await axios.post(`${API_URL}/getUserInfo`, {
        uid
    });
    return response.data;
}

export const getVisitLog = async () => {
    const response = await axios.get(`${API_URL}/getVisitLog`);
    return response.data;
}

export const doLogin = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/doLogin`, {
        email, password
    });
    return response.data;
}

