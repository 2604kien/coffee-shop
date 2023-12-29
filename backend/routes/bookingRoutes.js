const express =require('express');
const router=express.Router();
const bookingController=require('../controllers/bookingController');
const verifyJWT=require('../middleware/verifyJWT');
const verifyRoles=require('../middleware/verifyRole');
const ROLE_LIST=require('../config/role_list');
router.route('/')
.get(verifyJWT, verifyRoles(ROLE_LIST.Admin), bookingController.getAllBooking)
.post(bookingController.addNewBooking)
router.route('/:id').delete(verifyJWT,verifyRoles(ROLE_LIST.Admin),bookingController.deleteOneBooking)

module.exports=router