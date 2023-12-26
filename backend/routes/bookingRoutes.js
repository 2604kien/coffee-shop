const express =require('express');
const router=express.Router();
const bookingController=require('../controllers/bookingController');
router.route('/')
.get(bookingController.getAllBooking)
.post(bookingController.addNewBooking)
module.exports=router