const mongoose=require('mongoose');
const coffeeSchema= new mongoose.Schema({
    itemName:{
        type: String,
        required: true
    },
    recipe:{
        type:String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})
module.exports=mongoose.model('Coffee', coffeeSchema)