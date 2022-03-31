import { getCookie } from "../../Utils/cookie";
import ApiClient from "../Client";

export const volunteerController = {
  createUserProfileVolunteer: async ({ ...args }) => {
    try {
      const response = await ApiClient.put("/v1/profile", { ...args });
      return response;
    } catch (error) {
      return error;
    }
  },
  getNgoVolunteers: async () => {
    try {
      const ngoExternalId = getCookie("ngoExternalId");
      const response = await ApiClient.get(`/v1/ngo/${ngoExternalId}/volunteers`);
      return response;
    } catch (error) {
      return error;
    }
  },

  addNgoVolunteer: async (mobileNumber) => {
    try {
      const ngoExternalId = getCookie("ngoExternalId");
      const response = await ApiClient.put(`/v1/ngo/${ngoExternalId}/volunteers`, { mobileNumber });
      return response;
    } catch (error) {
      return error;
    }
  },

  deleteNGOVolunteer: async (userExternalId) => {
    try {
      const ngoExternalId = getCookie("ngoExternalId");
      const response = await ApiClient.delete(`/v1/ngo/${ngoExternalId}/volunteers`, { data: { userExternalId } });
      return response;
    } catch (error) {
      return error;
    }
  }
};
