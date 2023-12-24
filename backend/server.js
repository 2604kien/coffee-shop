require('dotenv').config();
const express=require('express');
const app=express();
const connectDB=require('./config/dbConn');
const path=require('path');
const mongoose=require('mongoose');
const {logger, logEvent}=require('./middleware/logger');

const PORT=3500;
connectDB();
app.use(logger);
app.use(express.json());


app.use('/', express.static(path.join(__dirname, "public")));
app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'));

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=>{
        console.log("Server is running at port "+PORT);
    })
})