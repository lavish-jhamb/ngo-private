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
};
