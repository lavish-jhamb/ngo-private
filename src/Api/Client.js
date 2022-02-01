import axios from "axios";
import { getCookie } from "../Utils/cookie";
const URL = process.env.REACT_APP_API_URL;

const ApiClient = axios.create({
    baseURL: `http://${URL}`,
})

const refreshToken = async () => {
    const firebaseToken = getCookie('firebaseToken');
    if (firebaseToken) {
        const regenerateToken = await axios.post(`http://${URL}/v1/auth/exchange`, { firebaseToken });
        const accessToken = regenerateToken?.data?.token;
        localStorage.setItem('accessToken', accessToken);
    }
}

ApiClient.interceptors.request.use(async (config) => {
    const expiry = localStorage.getItem('expiry');
    const tokenTimeStamp = new Date(expiry);
    const expiryToken = tokenTimeStamp / 1000;
    if (expiryToken < (new Date() / 1000)) {
        await refreshToken();
    }
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
})

ApiClient.interceptors.response.use((response) => {
    console.log(response)
    return response;
})

export default ApiClient;