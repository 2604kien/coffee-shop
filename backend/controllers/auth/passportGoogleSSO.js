const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const User=require('../../models/User');
const CALLBACK='http://localhost:3500/auth/google/callback'
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:CALLBACK,
    passReqToCallback: true,
},async(req, accessToken, refreshToken,profile, )=>{
    const defaultUser={
        fullName:`${profile.name.givenName} ${profile.name.familyName}`,
        username:`${profile.emails[0].value.split('@')[1]}`,
        googleId: profile.id,
    }
    try{
        const existtingUser=await User.findOne({googleId: profile.id}).lean().exec()
        if(!existtingUser) {
            await User.create(defaultUser)
        }
        if(existtingUser ) return cb(null, existtingUser);

    }
    catch(error){
        console.log(error)
    }
}))
passport.serializeUser((user, cb)=>{
    console.log("Serilizing user: "+user);
    cb(null, user.id);
})
passport.deserializeUser(async (id, cb)=>{
    try {
        const user=await User.findById(id);
        console.log("Deserilizing user");
        if(user) cb(null, user);
    } catch (err) {
        console.log("Error deserilizing: ", err);
        cb(err, null);
    }

})