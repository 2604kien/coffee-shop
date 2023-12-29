const express=require('express');
const router=express.Router();
const multer=require('multer');
const coffeeController=require('../controllers/coffeeController')
const verifyJWT=require('../middleware/verifyJWT');
const verifyRoles=require('../middleware/verifyRole');
const ROLE_LIST=require('../config/role_list');
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
    .get(verifyJWT, coffeeController.getAllCoffeeInfo)
    .post(verifyJWT, verifyRoles(ROLE_LIST.Admin), upload.single('imageFile'), coffeeController.createNewCoffee)
    .put(verifyJWT, verifyRoles(ROLE_LIST.Admin),coffeeController.updateCoffeeData)
    
router.route('/:id')
    .get(verifyJWT, coffeeController.getOneCoffeeInfo)
    .delete(verifyJWT, verifyRoles(ROLE_LIST.Admin),coffeeController.deleteCoffeeById)

module.exports=router