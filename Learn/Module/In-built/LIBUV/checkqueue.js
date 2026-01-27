// Check queue cb are executed after microtask queue cb, time
// queue & I/O queue cb are executed

// const fs = require("node:fs");
// const path = require("path");

// console.log("fs readFile", path.join(__dirname , "../File/strfile.txt"))
// fs.readFile(path.join(__dirname, "../File/strfile.txt"), (err, data) => {
//     if(err) {
// console.log("when read the file got err", err)
//     } else {
//         console.log("reaFile")
//         setImmediate(() => {
//             console.log("setImmediated fs")
//         })
//     }
// });

// process.nextTick(() => {
//         console.log("This is the inner tic")
//     })

// Promise.resolve().then(() => console.log("resolve the promises"))

// setTimeout(() => {
//     console.log("this is the settmout")
// })



// ----------------------------------------------------------------------------------------
// Microtask queue cb are executed after I/O cb & before check queue cb
const fs = require("node:fs");
const path = require("node:path");

console.log("fs readFile", path.join(__dirname, "../File/strfile.txt"))
fs.readFile(path.join(__dirname, "../File/strfile.txt"), (err, data) => {
    if (err) {
        console.log("when read the file got err", err)
    } else {
        console.log("reaFile executed 1st")
        setImmediate(() => {
            console.log("inside the readFile setImmediated fs")
        });

        process.nextTick(() => {
            console.log("inside the readFile nextTick fs")
        })

        Promise.resolve().then(() => console.log("inside the readFile resolve fs"))
    }
});

process.nextTick(() => {
    console.log("This is the inner tic")
})

Promise.resolve().then(() => console.log("resolve the promises"))

setTimeout(() => {
    console.log("this is the settmout")
})


// -------------------------------------------------------------------------------------

// Microtask queue cb are executed in between check queue cb
// setImmediate(() => {
    // console.log("this is setImmediate 1")
// })

// setImmediate(() => {
//     console.log("this is setImmediate 2");
//     process.nextTick(() => {
//         console.log("This is the inner tic")
//     })

//     Promise.resolve().then(() => console.log("resolve the promises"))
// });

// setImmediate(() => {
//     console.log("this is setImmediate 3");
// })


// ------------------------------------------------------------------------------------------- 
// When running setTimeout delay 0ms & I/O async method
// the order of execution never be guaranteed
setTimeout(() => {
    console.log("this is setTimeout 1")
}, 0)

setImmediate(() => {
    console.log("this is setImmediate 1")
})