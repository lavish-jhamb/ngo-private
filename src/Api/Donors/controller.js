import { getCookie } from "../../Utils/cookie";
import ApiClient from "../Client";

export const donorsController = {
    getDonors: async () => {
        try {
            const ngoExternalId = getCookie('ngoExternalId');
            const respone = await ApiClient.get(`/v1/ngo/${ngoExternalId}/donors`);
            return respone;
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
    }
}