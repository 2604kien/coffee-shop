const express=require('express');
const router=express.Router();
const multer=require('multer');
const path=require('path')
const coffeeController=require('../controllers/coffeeController')
const verifyJWT=require('../middleware/verifyJWT');
const Coffee=require('../models/Coffee');
const storage=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb( null, 'public/images')
    },
    filename: (req,file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload=multer({
    storage:storage
})
router.route('/')
    .get(coffeeController.getAllCoffeeInfo)
    .post(upload.single('imageFile'), coffeeController.createNewCoffee)
router.route('/:id')
    .get(coffeeController.getOneCoffeeInfo);

module.exports=router