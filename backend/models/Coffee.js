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
    imageName:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

})
module.exports=mongoose.model('Coffee', coffeeSchema)