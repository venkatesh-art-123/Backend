const express = require("express")
const learnController = require("../Controller/learndb")
const router = express.Router()

router.route("/learnModel").post(learnController.monthlyBudget)

module.exports = router