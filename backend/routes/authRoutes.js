const express=require('express')
const router=express.Router();
const passport=require('passport');
const authController=require('../controllers/authController');
require('../controllers/auth/passportGoogleSSO');
router.route('/login')
    .post(authController.login)
router.route('/refresh')
    .post(authController.refresh)
router.route('/logout')
    .post(authController.logout)
router.route('/login/google')
    .get(passport.authenticate('google', {scope:["profile", "email"]}))
router.route('/google/callback')
    .get(passport.authenticate('google',{
        failureMessage:"Cannot login to Google, please try again later.",
        failureRedirect:"http://localhost:3000/login",
        successRedirect:"http://localhost:3000/login/success",
    }),
    (req, res)=>{
        console.log("User: "+req.user);
        res.send("Thank you for sign in");
    }
    )
module.exports=router;