import ApiClient from "../Client";
import { exchangeTokenController } from "../Exchange/controller";

export const fileUploadController = async (fileName, fileType, ownerFileCategory, ngoExternalId, imageObject) => {
    try {
        await exchangeTokenController();
        const auth = JSON.parse(localStorage.getItem('auth'));
        const accessToken = auth?.accessToken;
        const url = await ApiClient.put(`/v1/ngo/${ngoExternalId}/upload`,
            {
                fileName,
                fileType,
                ownerFileCategory
            }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const logoUrl = url?.data?.uploadUrl;

        fetch(logoUrl, {
            method: 'PUT',
            body: imageObject
        }).then(res => console.log(res));

        return url?.status;
    } catch (error) {
        return error;
    }
}