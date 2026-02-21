import express from "express";
import * as userController from "../Controller/userContorller.js"
import { decryptObj } from "../../Decryption/decrypt.js";
import { decryptRequest } from "../../services/response.js";
import { authorization } from "../../Authentication/authorization.js";

const router = express.Router();

router.route("/signUp").post(decryptRequest, userController.registration);
router.route("/signIn").post(decryptRequest, authorization, userController.login);
router.route("/profileUpdate").post(userController.profileUpdation);


export default router;