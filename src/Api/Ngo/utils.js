import ApiClient from "../Client";
import { exchangeTokenController } from "../Exchange/controller";

export const fileUploadController = async (fileName, fileType, ownerFileCategory, ngoExternalId,stream) => {
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

        const formData = new FormData();
        formData.append('image',stream,stream.name)

        ApiClient.put(logoUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => console.log(res)).catch(err => console.log(err));

        localStorage.setItem('url', logoUrl);
        return url?.status;
    } catch (error) {
        return error;
    }
}