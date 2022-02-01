import ApiClient from "../Client";
import { getCookie } from "../../Utils/cookie";

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const response = await ApiClient.post(`/v1/auth/exchange`, { firebaseToken });
        const accessToken = response?.data?.token;
        const expiry = response?.data?.validTill;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('expiry', expiry);
    }
    catch (error) {
        return error;
    }
}
