const User=require('../models/User');
const bcrypt=require('bcrypt');
const getAllUser=async(req,res, next)=>{
    try{
        const foundedUsers=await User.find().select('-password').lean()
        if(!foundedUsers?.length){
            return res.status(400).json({message: "No users found"});
        }
        return res.json(foundedUsers);
    }
    catch(err){
        next(err);
    }
}

const createNewUser=async(req,res,next)=>{
    //destructure value in req.body
    const {username, password, roles, fullName}=req.body
    try{
        //check if all required value is fill
        if(!username ||!password||!fullName||!Array.isArray(roles)||!roles.length){
            return res.json({message: "All field is required"});
        }
        //check if there is existing user with the same username
        const existUsername= await User.findOne({username: username}).lean().exec()
        if(existUsername){
            return res.status(409).json({message: `An account with username: ${username} is already created`});
        }
        //hash the password and added to userObject
        const hashedPwd=await bcrypt.hash(password, 10);
        const userObject={
            username: username,
            password: hashedPwd,
            fullName: fullName,
            roles: roles,
        }
        //add user object to the database;
        const user=await User.create(userObject);
        if(user){
            return res.status(201).json({message: `User ${fullName} is created`});
        }
        else {
            return res.status(400).json({message: 'Invalid data received'});
        }

    }
    catch(err){
        next(err)
    }
}

module.exports={
    getAllUser,
    createNewUser,
}