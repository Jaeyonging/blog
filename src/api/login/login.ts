import axios from "axios";
import { API_URL } from "../../util/server";

export const checkMaster = async (id: string) => {
    const response = await axios.post(`${API_URL}/checkMaster`, {
        id
    });
    return response.data;
}

export const checkIP = async(ip: string) => {
    const response = await axios.post(`${API_URL}/checkIP`, {
        ip
    });
    return response.data;}

export const getIPaddress = async() => {
    const response = axios.get('https://api.ipify.org?format=json')
    return response
}