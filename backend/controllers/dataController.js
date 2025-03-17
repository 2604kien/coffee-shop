const path=require('path');
const fsPromise=require('fs').promises;

const getData=async (req,res,next)=>{
       try {
        
        return res.json(JSON.parse(process.env.DATA))
       } catch (error) {
        console.log(error);
       }
}
module.exports={
    getData
};