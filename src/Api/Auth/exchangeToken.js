import axios from "axios";
import { getCookie } from "../../Utils/cookie";
const URL = process.env.REACT_APP_API_URL;

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const response = await axios.post(`http://${URL}/v1/auth/exchange?expiryInMinutes=100`, { firebaseToken });
        const accessToken = response?.data?.token;
        localStorage.setItem('accessToken',accessToken);
    }
    catch (error) {
        return error;
    }
}
