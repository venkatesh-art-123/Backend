const mongoose = require("mongoose");

const connectDB = () => {
    // mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://localhost:27017/learn').then(() => {
        console.log("Mongodb connected")
    }).catch((err) => console.log("Catch err", err))

}


module.exports = { connectDB: connectDB }


// const { MongoClient } = require("mongodb");

// let uri = 'mongodb://127.0.0.1:27017/learn';

// const connectDB = async () => {
//     try {
//         let client = new MongoClient(uri);
//         client.connect();
//         console.log("Mongodb connectd successfully")
//         let database = client.db('learnschema');
//         return database
//     } catch (e) {
//         console.log("connectDB__Err", e)
//     }
// }

// const createDb = async () => {
//     try {
//         let db = await connectDB();
//         let insertDoc = await db.collection("users").insertOne({
//             userName: "venkatesh", age: 35
//         });
//         console.log('insertDoc', insertDoc)
//     } catch (e) {
//         console.log("createDb__Err", e)
//     }
// }
// module.exports = { connectDB, createDb }

