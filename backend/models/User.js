const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    roles:[{
        type:String,
        default:"Employee"
    }],
    createdDate:{
        type: String,
        default: Date.now()
    }
})
module.exports=mongoose.model('User', userSchema);