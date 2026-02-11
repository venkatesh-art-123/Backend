import CryptoJS from "crypto-js";
import config from "../config/env";

export const encryptObj = (data) => {
    console.log("encryptTokencryptTok", config, data, config.SECRET_KEY)
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), config.SECRET_KEY).toString();
    return ciphertext;
}


export const decryptObj = (ciphertext) => {
    var bytes = CryptoJS.AES.decrypt(ciphertext, config.SECRET_KEY);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}