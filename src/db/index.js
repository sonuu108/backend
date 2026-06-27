import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log("DB_URI check:", process.env.MONGODB_URI);

const connectDB =async()=>{
    try{
        const connectionInsatnce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED!! DB HOST ${connectionInsatnce.connection.host}`);

    }
    catch(error){
        console.log("MONGO DB CONNECTION ERROR",error);
        process.exit(1)
    }
}
export default connectDB