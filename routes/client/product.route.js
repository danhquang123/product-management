const express = require('express')
const router = express.Router();
const controller = require("../../controllers/client/product.controller")

router.get('/', controller.index)

router.get('/add', controller.add)
router.get('/edit', controller.edit)
router.get('/delete', controller.delete)

router.get('/detail/:slug', controller.detail)

module.exports = router