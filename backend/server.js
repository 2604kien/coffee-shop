require('dotenv').config();
const express=require('express');
const passport=require('passport');
const app=express();
const connectDB=require('./config/dbConn');
const path=require('path');
const session=require('express-session');
const mongoose=require('mongoose');
const cors=require('cors')
const corsOptions=require('./config/corsOptions');
const cookieParser=require('cookie-parser')
const {logger, logEvent}=require('./middleware/logger');
const MongoDBStore = require('connect-mongodb-session')(session);

app.use(cookieParser())
const PORT=3500;
connectDB();
app.use(cors(corsOptions));
app.set('trust proxy', 1);
const store = new MongoDBStore({
    uri: process.env.DATABASE_URI,
    collection: 'sessions'
});

store.on('error', function(error) {
    console.error('MongoDB Session Store Error:', error);
});
app.use(session({
    secret: process.env.ACCESS_SECRET_TOKEN,
    resave: true,
    name:'google-auth',
    saveUninitialized: true,
    store: store,
    proxy: true,
    cookie:{
        maxAge:24*60*60*1000,
        httpOnly:true,
        sameSite:true,
        secure: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.options('*', cors(corsOptions))
app.use(express.urlencoded({extended: false}));
app.use(logger);
app.use(express.json())


app.use('/', express.static(path.join(__dirname, "public")));
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/coffee', require('./routes/coffeeRoutes'));
app.use('/booking', require('./routes/bookingRoutes'));

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=>{
        console.log("Server is running at port "+PORT);
    })
})