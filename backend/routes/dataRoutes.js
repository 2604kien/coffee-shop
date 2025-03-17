const express=require('express');
const router=express.Router();
const dataController=require('../controllers/dataController.js')
router.route('/').get(dataController.getData)

module.exports=router