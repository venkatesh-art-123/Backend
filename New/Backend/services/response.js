
import { decryptObj, encryptObj } from "../Decryption/decrypt";


export const decryptRequest = async (req, res, next) => {
    try {
        let token = req?.body?.token ?? "";
        let decryptData = await decryptObj(token);
        if (decryptData) {
            req.body = decryptData;
            return next()
        } else {
            // return res.json({ status: false, status: 400, message: "Invalid token" })
            sendResponse(res, { status: false, statusCode: 400, message: "Invalid token" })
        }

    } catch (e) {
        console.log("decryptRequest__Err", e)
    }
}

export const sendResponse = (res, data) => {
    try {
        return res.json(encryptObj(data))
    } catch (e) {
        console.log("sendResponse__Err", e)
    }
}