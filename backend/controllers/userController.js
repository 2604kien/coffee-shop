const User=require('../models/User');
const bcrypt=require('bcrypt');
const getAllUser=async(req,res, next)=>{
    try{
        const foundedUsers=await User.find().lean()
        if(!foundedUsers?.length){
            return res.status(400).json({message: "No users found"});
        }
        return res.status(200).json({message: "All user data retrieved", data:foundedUsers});
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
        console.log(err);
        next(err)
    }
}
const updateUser=async(req,res,next)=>{
    const {username, roles, fullName, _id}=req.body;
    try{
        const foundedUsers=await User.findById(_id).exec();
        if(!foundedUsers) return res.json({message: "No user found."})
        foundedUsers.username=username;
        foundedUsers.roles=roles;
        foundedUsers.fullName=fullName;
        const result=await foundedUsers.save();
        res.json(result);
    }
    catch(err){
        next(err);
    }

}
const getUserById=async(req,res,next)=>{
    const {id}=req.params;
    if(!id) return res.status(400).json({message: "User Id required"});
    const foundedUsers=await User.findById(id).select('-__v -password').lean().exec();
    if(!foundedUsers) res.json({message:"No user found"});
    res.json({message: "Retrieved data successfully", data: foundedUsers});
}
const deleteUser=async(req,res,next)=>{
    const {id}=req.params;
    try{
        if(!id) return res.status(400).json({message: "User Id required"});
        const foundedUsers=await User.findById(id).exec();
        if(!foundedUsers) res.json({message:"No user found"});
        const result=await User.deleteOne({_id:id});
        res.json(result);
    }
    catch(err){
        next(err);
    }
}
module.exports={
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
    getUserById
}