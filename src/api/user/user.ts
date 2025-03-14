import axios from "axios";
import { API_URL } from "../../util/server";

export const getUserInfo = async (uid: string) => {
    const response = await axios.post(`${API_URL}/getUserInfo`, {
        uid
    });
    return response.data;
}
