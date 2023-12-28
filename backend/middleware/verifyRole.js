const verifyRoles=(...allowedRoles)=>{
    return(req, res, next)=>{

        if(!req.roles){
            return res.status(401).json({message:"Unauthorized"});
        }
        const roleArray=[...allowedRoles];
        const result=req.roles.map(role=>roleArray.includes(role)).find(val=>val===true);
        if(!result) return res.status(401);
        next();
    }

}
module.exports=verifyRoles;