import {exchangeTokenController} from "../../Api/Ngo/utils"
import { getCookie } from "../../Utils/cookie";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

 export const volunteer =async()=>{
     console.log(URL);
    const token = localStorage.getItem('accessToken');
    const ngoExternalId = getCookie("ngoExternalId");

    const result = await axios.put(`http://${URL}/v1/ngo/${ngoExternalId}/volunteers`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        body:{
            ngoExternalId:ngoExternalId
        }

    });
    console.log(result?.data);
    return result?.data;
}
export const getVolunteer =async()=>{
    console.log(URL);
   const token = localStorage.getItem('accessToken');
   const ngoExternalId = getCookie("ngoExternalId");

   const result = await axios.get(`http://${URL}/v1/ngo/${ngoExternalId}/volunteers`,{
       headers: {
           Authorization: `Bearer ${token}`
       }
      
   });
   console.log(result?.data);
   return result?.data;
}