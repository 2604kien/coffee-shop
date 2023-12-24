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
    role:[{
        type:String,
        default:"Employee"
    }]
})
module.exports=mongoose.model('User', userSchema);