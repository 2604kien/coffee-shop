const mongoose=require('mongoose');
const Coffee=require('../models/Coffee');
const fsPromise=require('fs').promises;
const path=require('path');

const getAllCoffeeInfo=async (req,res,next)=>{
    try{
        const foundedCoffee=await Coffee.find().lean();
        if(!foundedCoffee?.length){
            return res.status(400).json({message: "No Coffee Item is found"});
        }
        return res.status(200).json({message: "All coffee recipe data retrieved", data:foundedCoffee});
    }
    catch(err){
        next(err);
    }

}
const getOneCoffeeInfo=async(req, res, next)=>{
    const {id}=req.params;
    try{
        const foundedCoffee= await Coffee.findById(id).select("-__v").exec();
        if(!foundedCoffee){
            return res.status(400).json({message: "No Coffee recipe found"});
        }
        return res.json({message: "Retrieve coffee recipe successfully", data: foundedCoffee});
    }
    catch(err){
        next(err)
    }
}

const createNewCoffee=async(req,res, next)=>{
    const {itemName, recipe, imageName}=req.body;
    if(!itemName||!recipe){
        return res.json({message: "All field is required"});
    }
    const existItem= await Coffee.findOne({itemName:itemName}).lean().exec();
    if(existItem){
        return res.status(409).json({message:`An item name: ${itemName} is already created`});
    }
    const coffeeObject={
        itemName:itemName,
        recipe: recipe,
        imageName: imageName
    }
    const coffee=await Coffee.create(coffeeObject);
    if(coffee){
        return res.status(201).json({message: `Item ${itemName} is successfuly added.`})
    }
    else{
        return res.status(400).json({message: 'Invalid data recieved.'})
    }
}
const deleteCoffeeById=async(req,res,next)=>{
    const {id}=req.params;
    try{
        if(!id) return res.status(400).json({message: "Id required"});
        const foundedCoffee=await Coffee.findById(id).exec();
        const imageName=foundedCoffee.imageName;
        await fsPromise.unlink(path.join(__dirname, "..", "public", "images", imageName));
        const result=await Coffee.deleteOne(foundedCoffee).exec();
        res.json(result);
    }
    catch(err){
        console.log(err);
    }

}
const updateCoffeeData=async(req,res,next)=>{
    const {recipe, id}=req.body;
    try{
        if(!id) return res.status(400).json({message: "Recipe data required"});
        const foundedRecipe=await Coffee.findById(id).exec();
        if(!foundedRecipe) return res.json({message: "Recipe not found"});
        foundedRecipe.recipe=recipe;
        const result=await foundedRecipe.save();
        res.json(result);
    }
    catch(err){
        next(err)
    }

}
module.exports={
    getAllCoffeeInfo,
    createNewCoffee,
    getOneCoffeeInfo,
    updateCoffeeData,
    deleteCoffeeById
};