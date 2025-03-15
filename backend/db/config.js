const mongoose = require('mongoose')
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL ;

const dbConnection = async()=>{
    try{
      await mongoose.connect(MONGO_URL)
      console.log("mongodb connect")

    }catch(error){
        console.log(error)
    }
}
module.exports =dbConnection