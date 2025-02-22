import axios from "axios";
import { API_URL } from "../util/server";

export const checkToken = async (token: string) => {
    const response = await axios.post(`${API_URL}/getUserInfo`, {
        token
    });
    return response.data;
}
