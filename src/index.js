// 1. The very first thing: Load environment variables
import 'dotenv/config'; 


import connectDB from "./db/index.js";


connectDB();

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

//import connectDB from "./db/index.js";



//connectDB();
/*
import express from "express";
const app =express()


;(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("errr:",error);
            throw error

        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listenig at port ${process.env.PORT}`);
        })

    }
    catch(error){
        console.error("ERROR: ",error)
        throw err

    }

})()
    */
