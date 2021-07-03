// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
/*const userName = "dbadmin";
const userPassword = "tYjPsNZo8HJYc8qm";

const dbName = "ATN_SHOP";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.s7ukh.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";*/
/////////////////////////////////////////////////.
const userName = "bao2002";
const userPassword = "0901107442baott";

const dbName = "ATN_shop";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.x8ieg.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

///////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}