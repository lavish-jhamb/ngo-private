import ApiClient from "../Client";
import { getCookie } from "../../Utils/cookie";
import { appendErrors } from "react-hook-form";
import { exchangeTokenController } from "../Exchange/controller";

export const volunteer = {
  createVolunteer: async ({ ...args }) => {
    try {
      await exchangeTokenController();
      const auth = JSON.parse(localStorage.getItem("auth"));
      const accessToken = auth?.accessToken;
      const ngoExternalId = getCookie("ngoExternalId");
      const userExternalId = getCookie("volunteersExternalId");

      const response = await ApiClient.put(
        `/v1/ngo/${ngoExternalId}/volunteers`,
        { userExternalId: userExternalId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const volunteersExternalId = response?.data?.userExternalId;
      document.cookie = `volunteersExternalId=${volunteersExternalId};domain=localhost;secure`;
      document.cookie = `volunteersExternalId=${volunteersExternalId};domain=ngo-donation-management.netlify.app;secure`;

      return response;
    } catch (error) {
      return error;
    }
  },
  getVolunteer: async () => {
    try {
      const ngoExternalId = getCookie("ngoExternalId");
      const auth = JSON.parse(localStorage.getItem("auth"));
      const userExternalId = getCookie("volunteersExternalId");
      const accessToken = auth?.accessToken;

      const response = await ApiClient.get(
        `/v1/ngo/${ngoExternalId}/volunteers`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
};
