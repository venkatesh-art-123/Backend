import { createJwtToken } from "../../Authentication/authorization";
import { sendResponse } from "../../services/response";
import userSchema from "../Model/userModel";

import fs from "fs";
import path from "path";

export const registration = async (req, res) => {
    try {
        console.log("req body", req?.body)
        const { name, email, password } = req?.body;
        const createData = new userSchema({
            userName: name, email: email, password: password
        });
        let saveData = await createData.save()
        if (createData) {
            let accessTok = await createJwtToken({ email: saveData?.email, _id: saveData?._id })
            sendResponse(res, { status: true, statusCode: 201, message: "user created successfully", accessTok: accessTok })
        }

    } catch (e) {
        sendResponse(res, { status: false, statusCode: 500, message: "Error on server while registration" })
        console.log("registration__Err", e)
    }
}


export const login = async (req, res) => {
    try {
        const { name, email, password } = req?.body;
        // const createData = ne 
    } catch (e) {
        console.log("login__Err", e)
    }
}


export const profileUpdation = async (req, res) => {
    try {
        console.log("profileUpdation_data", req?.body, req?.files)
        const { attachment } = req?.files;
        let profileName = `${Date.now()}.webp`;
        let pathJoin = path.join('assest');
        console.log("pathJoin_det", pathJoin)
        await fs.promises.mkdir(pathJoin, { recursive: true })

        // fs.mkdir(pathJoin, (err, data) => {
        //     if (err) {
        //         console.log("pathJoinpathJoin", pathJoin)
        //     } else {
        //         console.log("DIrectory created successuly")
        //     }
        // })

        const mv = await attachment.mv(pathJoin+"/"+profileName)
        console.log("mv data", mv)

    } catch (e) {
        console.log("profileUpdation__Err", e)
    }
}