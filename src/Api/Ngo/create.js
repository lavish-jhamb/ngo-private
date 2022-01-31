import axios from "axios";
import { fileUploadController } from "./utils";
import notify from "../../Utils/notify";
import { uris } from "../../Config/Router/URI";
const URL = process.env.REACT_APP_API_URL;

export const ngoController = {
    createNgo: (navigate, { ...args }) => {
        const { ngoLogo } = args;
        const fileName = ngoLogo.name;
        const fileType = ngoLogo.type;
        const ownerFileCategory = ngoLogo.name;
        const token = localStorage.getItem('accessToken');

        const result = axios.post(`http://${URL}/v1/ngo`, { ...args }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            const id = response?.data?.ngoExternalId;
            document.cookie = `ngoExternalId=${id};domain=localhost;secure`
            document.cookie = `ngoExternalId=${id};domain=ngo-donation-management.netlify.app;secure`
            fileUploadController(fileName, fileType, ownerFileCategory, id);
        }).then(() => {
            navigate(uris.profileCreated)
        })

        notify.promise(result, {
            pending: "validating data...",
            success: 'Form submitted',
            error: {
                render({ data }) {
                    return `${data.message}`
                }
            }
        })
    },
}