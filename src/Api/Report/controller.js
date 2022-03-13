import { getCookie } from "../../Utils/cookie"
import ApiClient from "../Client"

export const reportController = {
    getReport:async(days) => {
        try{
            const ngoExternalId = getCookie('ngoExternalId');
            const response = ApiClient.get(`/v1/ngo/${ngoExternalId}/summary${days ? `?pastNumberOfDays=${days}` : '?pastNumberOfDays=7'}`);
            return response;
        }catch(error){
            return error;
        }
    }
}