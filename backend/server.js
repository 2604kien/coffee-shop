require('dotenv').config();
const express=require('express');
const app=express();
const connectDB=require('./config/dbConn');
const path=require('path');
const mongoose=require('mongoose');
const cors=require('cors')
const corsOptions=require('./config/corsOptions');
const cookieParser=require('cookie-parser')
const {logger, logEvent}=require('./middleware/logger');

app.use(cookieParser())
const PORT=3500;
connectDB();
app.use(cors(corsOptions))
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