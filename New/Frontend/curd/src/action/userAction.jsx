import config from "../../config/env"
import { Axios } from "../../config/axios"
import axios from "axios";
// import axio

export const registrationHooks = async (data) => {
    try {
        console.log("`${config.API_URL}register`", data)
        const getData = await Axios({
            url: `${config.API_URL}/signUp`,
            method: "post",
            data: data
        });
        if (getData) {
            return sendResponse(getData)
        }
    } catch (e) {
        console.log("registrationHooks__Err", e)
    }
}

export const profileUpdateHooks = async (data) => {
    try {
        console.log("`${config.API_URL}register`", data)
        const getData = await axios.post(`${config.API_URL}/profileUpdate`, data,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if (getData) {
            return sendResponse(getData)
        }
    } catch (e) {
        console.log("registrationHooks__Err", e)
    }
}

const sendResponse = (data) => {
    let response = {
        result: data?.data,
        status: data?.data?.status,
        message: data?.data?.message
    }
    console.log("get Details", data, response)
    return response;
}