const express=require('express');
const router =express.Router();
const userController=require('../controllers/userController');
router.route('/')
    .get(userController.getAllUser)
    .post(userController.createNewUser)
    .put(userController.updateUser)
router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUser);
module.exports=router