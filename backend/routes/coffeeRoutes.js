const express=require('express');
const router=express.Router();
const coffeeController=require('../controllers/coffeeController')
const verifyJWT=require('../middleware/verifyJWT');
router.use(verifyJWT);
router.route('/')
    .get(coffeeController.getAllCoffeeInfo)
    .post(coffeeController.createNewCoffee)
module.exports=router