import axios from "axios";
import { getCookie } from "../../Utils/cookie";
const URL = process.env.REACT_APP_API_URL;

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const result = await axios.post(`http://${URL}/v1/auth/exchange?expiryInMinutes=100`, { firebaseToken });
        const accessToken = result?.data?.token;
        localStorage.setItem('accessToken', accessToken);
        const exchangeToken = localStorage.getItem('accessToken');
        return exchangeToken;
    } catch (error) {
        return error;
    }
}

export const fileUploadController = async (fileName, fileType, ownerFileCategory, ngoExternalId) => {
    const exchangeToken = await exchangeTokenController();
    try {
        const url = await axios.put(`http://${URL}/v1/ngo/${ngoExternalId}/upload`,
            {
                fileName,
                fileType,
                ownerFileCategory
            }, {
            headers: {
                Authorization: `Bearer ${exchangeToken}`
            }
        });
        const logoUrl = url?.data?.uploadUrl;
        localStorage.setItem('url', logoUrl);
    } catch (error) {
        return error;
    }
}