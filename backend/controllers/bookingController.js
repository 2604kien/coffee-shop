const mongoose=require('mongoose');
const Booking=require('../models/Booking');

const addNewBooking=async(req,res, next)=>{
    const {dateTime, name, numPeople, mobilePhone}=req.body;
    try{
        if(!dateTime||!name||!numPeople||!mobilePhone){
            return res.status(400).json({message: "All data need to be entered"});
        }

        const bookingObject={
            dateTime: dateTime,
            name: name,
            numPeople: numPeople,
            mobilePhone: mobilePhone
        }
        const booking= await Booking.create(bookingObject);
        
        if(booking){
            return res.status(201).json({message: "New Booking is successfully added"});
        }
        else{
            return res.status(400).json({message: "Invalid data received"});
        }
    }
    catch(err){
        console.log(err);
        next(err);
    }
}
const getAllBooking=async(req,res, next)=>{
    try{
        const foundedBooking= await Booking.find().lean();
        if(!foundedBooking) return res.status(400).json({memssage: "No booking found"});
        return res.status(200).json({message:"All booking retrieved", data:foundedBooking});
    }   
    catch(err){
        next(err)
    }
}
const deleteOneBooking=async(req,res, next)=>{
    try{
        const {id}=req.params;
        if(!id){
            return res.status(400).json({message:"An id required to delete the booking"});
        }
        const booking= await Booking.findById(id).exec();
        if(!booking) {
            return res.status(400).json({message: "The booking is not found"});
        }
        const result= await booking.deleteOne();
        res.json({message:`The booking is deleted.`});
    }
    catch(err){
        next(err)
    }
}
module.exports={
    getAllBooking,
    addNewBooking,
    deleteOneBooking
}