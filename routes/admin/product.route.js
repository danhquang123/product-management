const express = require('express')
const router = express.Router();
const controller = require("../../controllers/admin/product.controller")
const multer  = require('multer')
const validate1= require("../../validate/admin/product.validate")                                 
// const upload = multer({ dest: './public/uploads/' })
const storageMulter = require("../../helpers/storage");
const { validate } = require('../../models/product.model');

const storage =storageMulter();

const upload = multer({ storage: storage })

router.get('/', controller.index);


router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.delete("/delete/:id", controller.delete);

router.get('/create', controller.create);

router.post('/create',upload.single('thumbnail'),validate1.createPost, controller.createNew);


router.get("/edit/:id", controller.edit);

router.patch('/edit/:id',upload.single('thumbnail'),validate1.createPost, controller.editNew);

router.get("/detail/:id", controller.detail);

module.exports = router