// LIBUV


// A few async method like fs.readFile & cryptopbkdf2 run on a separate thread in libuv's thread
// pool. They don run synchrounously in their own thread but as far as the main thread
// is concerned, it appearsas if the method is running asynchronously


// const crypto = require("node:crypto");
// let start = Date.now();

// let MAX_LIMIT = 4;

// for(let i=0; i<MAX_LIMIT; i++) {
// crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
// console.log("HASH i", i, Date.now() - start )
// })

// }

// -------------------------------------------------------------------------------------------------------------------------------------
// Libuv has 4 thread pool is default

// By increasing the thread pool size, we are able to improve the total
// time taken to run multiple calls of asynchronous method like pbkdf2

// const crypto = require("node:crypto");

// let start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 8
// let MAX_LIMIT = 8;

// for(let i=0; i<MAX_LIMIT; i++) {
//    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
// console.log("HASH i", i, Date.now() - start )
// }) 
// }


// ----------------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------
// Increasing the thread pool size can help with performance but that is limited 
// by the number of available CPU cores
const crypto = require("node:crypto");

let start = Date.now();
process.env.UV_THREADPOOL_SIZE = 16 // The same amount of time get twice amount compare the previous one
let MAX_LIMIT = 16;

for (let i = 0; i < MAX_LIMIT; i++) {
   crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
      console.log("HASH i", i, Date.now() - start)
   })
}


// some of the async method, not all async method ---> WHy the not all async method & explained the file networkIO.js




// JS is a synchrounous, single-threaded language.
// To make async programming possiblee. we need the help of libuv 

// console.log("First");
// console.log("Second");
// console.log("Third")

const fs = require("fs");
const path = require("path")
console.log("First", path.join(__dirname, "../File/strfile.txt"));
fs.readFile(path.join(__dirname, "../File/strfile.txt"), (err) => {
   if (err) {
   } console.log("second")
})
console.log("Third")