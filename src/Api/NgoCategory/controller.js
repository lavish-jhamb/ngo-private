import { getCookie } from "../../Utils/cookie"
import ApiClient from "../Client"

export const ngoCategoryController = {
    createCategory: async (name) => {
        const ngoExternalId = getCookie('ngoExternalId');
        const response = await ApiClient.post(`/v1/ngo/${ngoExternalId}/categories`, { name });
        return response;
    },

    getCategories: async () => {
        const ngoExternalId = getCookie('ngoExternalId');
        const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/categories`);
        return response;
    },

    updateCategory: async (categoryExternalId, name) => {
        try {
            const ngoExternalId = getCookie("ngoExternalId");

            const response = await ApiClient.put(`/v1/ngo/${ngoExternalId}/categories/${categoryExternalId}`,{ name });
            return response;
        } catch (error) {
            return error;
        }
    }
}