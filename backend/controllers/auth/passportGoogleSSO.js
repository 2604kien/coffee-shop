const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const User=require('../../models/User');
const CALLBACK="http://localhost:3500/auth/google/callback"
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:CALLBACK,
    passReqToCallback: true,
},async(req, accessToken, refreshToken,profile, done )=>{
    const defaultUser={
        fullName:`${profile.name.givenName} ${profile.name.familyName}`,
        username:`${profile.emails[0].value.split('@')[0]}`,
        password:JSON.stringify(Math.random()*999999999+100000000),
        googleId: profile.id,
    }
    try{
        const existtingUser=await User.findOne({googleId: profile.id}).lean().exec()
        if(!existtingUser) {
            await User.create(defaultUser)
        }
        return done(null, defaultUser);

    }
    catch(error){
        console.log(error);
        return done(error);
    }
}))
passport.serializeUser((user, cb)=>{
    cb(null, user.googleId);
})
passport.deserializeUser(async (id, cb)=>{
    try {
        const user=await User.findById(id);
        if(user) cb(null, user);
    } catch (err) {
        console.log("Error deserilizing: ", err);
        cb(err, null);
    }

})