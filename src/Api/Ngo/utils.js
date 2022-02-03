import ApiClient from "../Client";
import { getCookie } from "../../Utils/cookie";

export const exchangeTokenController = async () => {
    const firebaseToken = getCookie('firebaseToken');
    try {
        const result = await ApiClient.post(`/v1/auth/exchange`, { firebaseToken });
        const accessToken = result?.data?.token;
        const expiry = result?.data?.validTill;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('expiry', expiry);
        const exchangeToken = localStorage.getItem('accessToken');
        return exchangeToken;
    } catch (error) {
        return error;
    }
}

export const fileUploadController = async (fileName, fileType, ownerFileCategory, ngoExternalId) => {
    const exchangeToken = await exchangeTokenController();
    try {
        const url = await ApiClient.put(`/v1/ngo/${ngoExternalId}/upload`,
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
        return url?.status;
    } catch (error) {
        return error;
    }
}