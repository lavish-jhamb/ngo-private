import { getCookie } from "../../Utils/cookie"
import ApiClient from "../Client"

export const receiptController = {

    donation: async ({ ...args }) => {
        let statusCode;
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.post(`/v1/ngo/${ngoExternalId}/donations`, { ...args });
            statusCode = response?.status;
            const donorExternalId = response?.data?.externalId;
            const donorId = response?.data?.donorInfo?.donorId;
            document.cookie = `donorExternalId=${donorExternalId};domain=localhost;secure`;
            document.cookie = `donorExternalId=${donorExternalId};domain=ngo-donation-management.netlify.app;secure`;
            document.cookie = `donorId=${donorId};domain=localhost;secure`;
            document.cookie = `donorId=${donorId};domain=ngo-donation-management.netlify.app;secure`;
        } catch (error) {
            statusCode = error.response.status;
            console.log(error.response);
        }

        return statusCode;
    },

    donationReceipt: async () => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const donationExternalId = getCookie('donorExternalId');
            const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/receipt/${donationExternalId}`,{
                responseType: 'arraybuffer'
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }


}