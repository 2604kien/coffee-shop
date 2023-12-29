const express=require('express');
const router =express.Router();
const verifyJWT=require('../middleware/verifyJWT');
const verifyRoles=require('../middleware/verifyRole');
const ROLE_LIST=require('../config/role_list');
const userController=require('../controllers/userController');
router.route('/')
    .get(verifyJWT, verifyRoles(ROLE_LIST.Admin),userController.getAllUser)
    .post(userController.createNewUser)
    .put(verifyJWT, verifyRoles(ROLE_LIST.Admin),userController.updateUser)
router.route('/:id')
    .get(verifyJWT, verifyRoles(ROLE_LIST.Admin),userController.getUserById)
    .delete(verifyJWT, verifyRoles(ROLE_LIST.Admin),userController.deleteUser);
module.exports=router