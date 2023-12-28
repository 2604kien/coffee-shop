const express=require('express');
const router=express.Router();
const multer=require('multer');
const path=require('path')
const coffeeController=require('../controllers/coffeeController')
const verifyJWT=require('../middleware/verifyJWT');

const storage=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb( null, 'public/images')
    },
    filename: (req,file, cb)=>{
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})
router.route('/')
    .get(coffeeController.getAllCoffeeInfo)
    .post(coffeeController.createNewCoffee)
router.route('/upload').post(upload.single('file'), coffeeController.createNewCoffee)
module.exports=router