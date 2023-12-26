const mongoose=require('mongoose');

const bookingSchema= new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    name:{
        type: String,
        required: true
    },
    numPeople:{
        type: Number,
        required: true
    },
    mobilePhone:{
        type: Number,
        required: true
    }
})
module.exports=mongoose.model('Booking', bookingSchema);