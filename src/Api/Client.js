import axios from "axios";
import { exchangeTokenController } from "./Exchange/controller";
const URL = process.env.REACT_APP_API_URL;

const ApiClient = axios.create({
    baseURL: `http://${URL}`,
})

const hasExpired = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const expiryTime = auth?.expiryTime;
    const tokenTimeStamp = new Date(expiryTime);
    const expiryToken = tokenTimeStamp / 1000;
    if (expiryToken < (new Date() / 1000)) {
        return true;
    }
    return false;
}

ApiClient.interceptors.request.use(async (config) => {
    const expired = hasExpired();
    if (expired) {
        await exchangeTokenController();
    }
    const auth = JSON.parse(localStorage.getItem('auth'));
    const accessToken = auth?.accessToken;
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

ApiClient.interceptors.response.use((response) => {
    console.log(response)
    return response;
})

export default ApiClient;