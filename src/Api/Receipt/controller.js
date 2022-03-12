import ApiClient from "../Client"
import { getCookie, deleteCookie } from "../../Utils/cookie"

export const receiptController = {

    donation: async ({ ...args }) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.post(`/v1/ngo/${ngoExternalId}/donations`, { ...args, });
            const donorExternalId = response?.data?.externalId;
            const donorId = response?.data?.donorInfo?.donorId;
            document.cookie = `donorExternalId=${donorExternalId};domain=localhost;secure`;
            document.cookie = `donorExternalId=${donorExternalId};domain=ngo-donation-management.netlify.app;secure`;
            document.cookie = `donorId=${donorId};domain=localhost;secure`;
            document.cookie = `donorId=${donorId};domain=ngo-donation-management.netlify.app;secure`;
            return response;
        } catch (error) {
            return error;
        }
    },

    donationReceipt: async () => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const donationExternalId = getCookie('donorExternalId');
            const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/receipt/${donationExternalId}`, {
                responseType: 'arraybuffer'
            });
            return response;
        } catch (error) {
            return error;
        }
    },

    donationReceiptImage: async () => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const donationExternalId = getCookie('donorExternalId');
            const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/receipt/${donationExternalId}/image`, { responseType: 'arraybuffer' });
            return response;
        } catch (error) {
            return error;
        }
    },

    searchDonorByMobile: async (ngoExternalId, mobileNumber) => {
        try {
            const response = await ApiClient.get(`v1/ngo/${ngoExternalId}/donor/${mobileNumber}`);
            const donorId = response?.data?.externalId
            if (donorId) {
                document.cookie = `getdonorId=${donorId};domain=localhost;secure`;
                document.cookie = `getdonorId=${donorId};domain=ngo-donation-management.netlify.app`;
            }
            return response;
        } catch (error) {
            if (error.response.status === 404) {
                deleteCookie('getdonorId');
            }
            return error;
        }
    },

    getDonations: async (isText, mobile) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/donations${(isText === false && mobile) ? `?mobile=${mobile}` : ''}${(isText === true && mobile) ? `?searchText=${mobile}` : ''}`);
            return response;
        } catch (error) {
            return error;
        }
    },

    deleteDonations: async (donationExternalId) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.delete(`/v1/ngo/${ngoExternalId}/donations/${donationExternalId}`);
            return response;
        } catch (error) {
            return error;
        }
    }
}