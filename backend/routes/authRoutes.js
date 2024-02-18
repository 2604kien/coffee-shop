const express=require('express')
const router=express.Router();
const passport=require('passport');
const frontend="https://www.hiase.cafe/"
const authController=require('../controllers/authController');
require('../controllers/auth/passportGoogleSSO');
router.route('/auth0')
    .post(authController.auth0Login);
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
        failureRedirect:`${frontend}login`,
        successRedirect:`${frontend}login/success`,
    }),
    (req, res)=>{
        console.log("User: "+req.user);
        res.send("Thank you for sign in");
    }
    )
module.exports=router;