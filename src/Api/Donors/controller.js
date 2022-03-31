import { getCookie } from "../../Utils/cookie";
import ApiClient from "../Client";

export const donorsController = {
    getDonors: async (searchText) => {
        try {
            console.log("searchText", searchText);
            const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/donors${searchText ? `?searchText=${searchText}` : ''}`);
            return response;
        } catch (error) {
            return error;
        }
    },

    searchDonorByName: async (name) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const respone = await ApiClient.get(`/v1/ngo/${ngoExternalId}/donors?searchText=${name}`);
            return respone;
        } catch (error) {
            return error;
        }
    },

    updateDonor: async (donorExternalId, { ...args }) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const respone = await ApiClient.put(`/v1/ngo/${ngoExternalId}/donors/${donorExternalId}`, { ...args });
            return respone;
        } catch (error) {
            return error;
        }
    },

    createDonor: async ({ ...args }) => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const respone = await ApiClient.post(`/v1/ngo/${ngoExternalId}/donors`, { ...args });
            return respone;
        } catch (error) {
            return error;
        }
    }
}