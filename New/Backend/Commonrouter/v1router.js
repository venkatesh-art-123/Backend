import express from "express";
import userRouter from "../User/Router/userRouter.js"
const router = express.Router();


router.use("/v1", userRouter);

export default router;