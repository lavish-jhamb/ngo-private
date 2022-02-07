import axios from "axios";
import { getCookie } from "../../Utils/cookie";
const URL = process.env.REACT_APP_API_URL;

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const response = await axios.post(`https://${URL}/v1/auth/exchange`, { firebaseToken });
        const accessToken = response?.data?.token;
        const expiryTime = response?.data?.validTill;
        const auth = {
            accessToken: accessToken,
            expiryTime: expiryTime
        }
        localStorage.setItem('auth', JSON.stringify(auth));
    }
    catch (error) {
        return error;
    }
}
