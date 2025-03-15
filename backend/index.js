

const express =require('express')
const connectDB= require('./db/config')
require('dotenv').config()
const cors = require('cors');


const UserRoute = require('./routes/userRoute')
const Port = process.env.PORT || 3000



const app =express();
connectDB();

app.use(cors());
app.use(express.json())

app.use('/user',UserRoute)


app.listen(Port,()=>console.log("server"))

