import { fileUploadController } from "./utils";
import notify from "../../Utils/notify";
import { uris } from "../../Config/Router/URI";
import ApiClient from "../Client";

export const ngoController = {
    createNgo: (navigate, { ...args }, logoData) => {
        const fileName = logoData.fileName;
        const fileType = logoData.fileType;
        const ownerFileCategory = logoData.ownerFileCategory;

        const result = ApiClient.post(`/v1/ngo`, { ...args })
            .then((response) => {
                const id = response?.data?.ngoExternalId;
                document.cookie = `ngoExternalId=${id};domain=localhost;secure`
                document.cookie = `ngoExternalId=${id};domain=ngo-donation-management.netlify.app;secure`
                fileUploadController(fileName, fileType, ownerFileCategory, id);
                navigate(uris.profileCreated);
            })

        notify.promise(result, {
            pending: "validating data..",
            success: 'Form submitted',
            error: {
                render({ data }) {
                    return `${data.message}`
                }
            }
        })
    },

    getNgo:async () => {
        try{
            const response = await ApiClient.get(`/v1/ngo`);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
}