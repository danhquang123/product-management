const express = require('express')
const router = express.Router();
const homecontroller = require("../../controllers/client/home.controller")

router.get('/',homecontroller.index)


module.exports = router