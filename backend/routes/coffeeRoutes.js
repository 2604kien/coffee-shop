const express=require('express');
const router=express.Router();
const coffeeController=require('../controllers/coffeeController')
router.route('/')
    .get(coffeeController.getAllCoffeeInfo)
    .post(coffeeController.createNewCoffee)
module.exports=router