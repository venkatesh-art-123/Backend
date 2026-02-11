import axios from "axios";
import { decryptObj, encryptObj } from "../Lib/cryptoJS";


export const Axios = async (reqData) => {
    try {
        let encryptTok = encryptObj(reqData?.data);
        console.log("encryptTokencryptTok", encryptTok)
        delete reqData.data
        reqData['data'] = { token: encryptTok };
        console.log("reqData_det", reqData)
        let response = await axios(reqData);
        console.log("response__Det", response)
        if (response) {
            let decrypt = decryptObj(response?.data);
            return { data: decrypt };
        }


    } catch (e) {
        console.log("Axios__Err", e)
    }
}