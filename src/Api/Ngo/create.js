import { fileUploadController } from "./utils";
import notify from "../../Utils/notify";
import { uris } from "../../Config/Router/URI";
import ApiClient from "../Client";

export const ngoController = {
    createNgo: (navigate, { ...args }) => {
        const { ngoLogo } = args;
        const fileName = ngoLogo.name;
        const fileType = ngoLogo.type;
        const ownerFileCategory = ngoLogo.name;

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
}