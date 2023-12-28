const mongoose=require('mongoose');
const Coffee=require('../models/Coffee');

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

const createNewCoffee=async(req,res, next)=>{
    const {itemName, recipe, imageName}=req.body;
    if(!itemName||!recipe||!imageName){
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
module.exports={
    getAllCoffeeInfo,
    createNewCoffee,
};