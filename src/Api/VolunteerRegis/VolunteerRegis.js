import ApiClient from "../Client"
import { getCookie } from "../../Utils/cookie";
import { exchangeTokenController } from "../Exchange/controller";
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
  
  }
}