import axios from "axios";
import { API_URL } from "../../util/server";

export const checkMaster = async (id: string) => {
    const response = await axios.post(`${API_URL}/checkMaster`, {
        id
    });
    return response.data;
}

// IP는 서버가 요청 헤더에서 직접 추출한다. 클라이언트는 빈 요청만 보낸다.
export const checkIP = async() => {
    const response = await axios.post(`${API_URL}/checkIP`);
    return response.data;}

export const loginID = async(email: string, password: string) => {
    const response = await axios.post(`${API_URL}/loginID`, {
        email, password
    });
    return response.data;
}