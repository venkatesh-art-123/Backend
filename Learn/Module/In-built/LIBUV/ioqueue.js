// Most of the async methods from the inbuilt module queue the cb func
// in the I/O queue


// Callback in the microtask queue executed before callb in the I/O queue
const fs = require("fs");

// fs.readFile(__dirname + "../File/strfile.txt", (err, data) => {
//     if (err) {

//     }
//     console.log("readed the file")
// })

//  process.nextTick(() => {
//         console.log("This is the inner tic")
//     })

//     Promise.resolve().then(() => console.log("resolve the promises"))



// ------------------------------------------------------------------------------------------------
// consistently not come exact guaranated value
// When running setTimeout delay 0ms & I/O async method
// the order of execution never be guaranteed

// setTimeout(() => {
// console.log("this is setTimeout 1", 0)
// }, 0)

// fs.readFile(__dirname + "../File/strfile.txt", (err, data) => {
//     if (err) {

//     }
//     console.log("readed the file")
// })

// ------------------------------------------------------------------------------------

// fs.readFile(__dirname + "../File/strfile.txt", (err, data) => {
//     if (err) {

//     }
//     console.log("readed the file")
// });


// process.nextTick(() => {
//     console.log("This is the inner tic")
// });


// Promise.resolve().then(() => console.log("promise resoved"));

// setTimeout(() => {
//     console.log("This is the before comes the readFIle I/o")
// })


// -------------------------------------------------------------------------------

// I/O polling


fs.readFile(__dirname + "../File/strfile.txt", (err, data) => {
    if (err) {

    }
    console.log("readed the file")
});


process.nextTick(() => {
    console.log("This is the inner tic")
});


Promise.resolve().then(() => console.log("promise resoved"));

setTimeout(() => {
    console.log("This is the before comes the readFIle I/o")
})


setImmediate(() => {
    console.log("setImmediated")
})

for(let i=0; i<2000000000; i++) {

}