import mongoose from "mongoose";

// Connect with database
// Example-1
/*
mongoose.connect("mongodb://localhost:27017/mern6").then(()=>{
    console.log("Connect mongodb successfully.");
});
*/

// Example-2
/*
const connectDB = (dbName)=>{
    return mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    .then(()=>{
        console.log("Conntect database successfully");
    })
    .catch((err)=>{
        console.log(err);
    });
};
*/
// Function Call
// connectDB("mern6");

