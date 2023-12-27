const express =require('express');
const router=express.Router();
const bookingController=require('../controllers/bookingController');
const verifyJWT=require('../middleware/verifyJWT');
router.route('/')
.get(verifyJWT, bookingController.getAllBooking)
.post(bookingController.addNewBooking)
router.route('/:id').delete(verifyJWT,bookingController.deleteOneBooking)

module.exports=router