import mongoose from "mongoose";

export const dbConnection = ()=>{
  mongoose.connect(process.env.MONGO_URL,{
    dbName: "RESTAURANT"
})
.then(()=>{
    console.log("Connected To MongoDB database Successfully!")
})
.catch((err)=>{
    console.log(`Some error occured while connecting to database! ${err}`);
});

};
