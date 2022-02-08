import { getCookie } from "../../Utils/cookie"
import ApiClient from "../Client"

export const ngoCategoryController = {
    createCategory: async (name) => {
        const ngoExternalId = getCookie('ngoExternalId');
        const response = await ApiClient.post(`/v1/ngo/${ngoExternalId}/categories`, { name });
        const categoryExternalId = response?.data?.externalId;
        document.cookie = `categoryExternalId=${categoryExternalId};domain=localhost;secure`
        document.cookie = `categoryExternalId=${categoryExternalId};domain=ngo-donation-management.netlify.app;secure`
        return response;
    },

    getCategories: async () => {
        const ngoExternalId = getCookie('ngoExternalId');
        const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/categories`);
        return response;
    }
}