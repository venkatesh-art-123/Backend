const express = require('express');
const userRouter = require('./User/Router/userRouter');
const router = express.Router();


router.use("/v1",userRouter);

module.exports = router;

