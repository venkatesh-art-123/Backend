const express = require('express');
const userRouter = require('./User/Router/userRouter');
const learnRouter = require("./Module/Router/learnRouter")
const router = express.Router();


router.use("/v1",userRouter);
router.use("/v1",learnRouter)

module.exports = router;

