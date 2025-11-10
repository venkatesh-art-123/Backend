const express = require('express');
const router = express.Router();
const { userAuthorization } = require('../Utils/userAutherization');
const { userLogin, userRegistration } = require('../Controller/userController');
const { userValidation } = require('../Validation/userValidation');


router.post("/createUser",  decrypt, userValidation, userRegistration);
router.post("/login", userAuthorization, decrypt, userValidation, userLogin);
module.exports = router;