

import config from "../config";
import { sendResponse } from "../services/response";
import userSchema from "../User/Model/userModel";
import jwt from "jsonwebtoken";

export const createJwtToken = async (data) => {
    try {
        let createTok = jwt.sign(data, config.SECRET_KEY);
        return createTok;
    } catch (e) {
        console.log("createJwtToken__Err", e)
    }
}


export const authorization = async (req, res, next) => {
    try {
        const authorization = req?.headers['Authorization'];
        let bearerTok = authorization.split(' ')[1];
        let decryptTok = jwt.verify(bearerTok, config.SECRET_KEY);
        if (decryptTok) {
            let userData = await userSchema({ email: decryptTok });
            if (!userData) {
                sendResponse(res, { "status": false, "statusCode": 401, "message": "unAuthorized token or invalid user" })
            } else {
                req.user.id = userData?._id;
                next()
            }
        }
    } catch (e) {
        sendResponse(res, { "status": false, "statusCode": 500, "message": "Error on server" })
        console.log("authorization__Err", e)
    }
}