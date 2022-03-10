import ApiClient from "../Client"
import { getCookie } from "../../Utils/cookie";
import { exchangeTokenController } from "../Exchange/controller";
import { uris } from "../../Config/Router/URI";
import notify from "../../Utils/notify";
export const volunteersReg = {

    VolunteerRegis: async ({ ...args }) => {

        try {
            await exchangeTokenController();
            const auth = JSON.parse(localStorage.getItem('auth'));
    const accessToken = auth?.accessToken;
          const ngoExternalId = getCookie('ngoExternalId');
            const response = await ApiClient.put(`/v1/profile`, { ...args, }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const volunteersExternalId = response?.data?.externalId;
            document.cookie = `volunteersExternalId=${volunteersExternalId};domain=localhost;secure`;
            document.cookie = `volunteersExternalId=${volunteersExternalId};domain=ngo-donation-management.netlify.app;secure`;
           
            return response;
        } catch (error) {
            return error;
        }
       
        
  },
  getVolunteer:async () => {
    try{
        const response = await ApiClient.get(`/v1/profile`);
        return response;
    }catch(error){
        return error;
    }
}
        
}