// npm install mongoose
import mongoose from "mongoose";

//Creating new DB

// Connect with database
// Example-1
var connect_db = function () {
    mongoose.connect("mongodb://localhost:27017/mern6").then(() => {
        console.log("Connect mongodb successfully.");
    });
}

// Example-2
var connect_db2 = function (dbName) {
    return mongoose.connect(`mongodb://localhost:27017/${dbName}`).then(() => {
        console.log(`Conntect ${dbName} database successfully`);
    }).catch((err) => {
        console.log(err);
    });
}
export { connect_db, connect_db2 };