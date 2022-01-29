import axios from "axios";
import {getCookie} from "../../Utils/cookie";
const exchangeTokenApi = process.env.REACT_APP_API_EXCHANGE_TOKEN;

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const response = await axios.post(`http://${exchangeTokenApi}`,{firebaseToken});
        const accessToken = response?.data?.token;
        document.cookie = `accessToken=${accessToken};domain=ngo-donation-management.netlify.app;secure`;
        document.cookie = `accessToken=${accessToken};domain=localhost;secure`;
    }
    catch (error) {
        return error;
    }
}
