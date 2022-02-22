import { getCookie } from "../../Utils/cookie"
import ApiClient from "../Client"

export const reportController = {
    getReport:async() => {
        try{
            const ngoExternalId = getCookie('ngoExternalId');
            const response = ApiClient.get(`/v1/ngo/${ngoExternalId}/summary`);
            return response;
        }catch(error){
            return error;
        }
    }
}