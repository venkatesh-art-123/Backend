// Include the fs module
// const fs = require('fs');
// const path = require("path")

// console.log("First")
// // Read the file synchronously
// console.log("path hoin", path.join(__dirname, 'filetext.txt'))
// const data = fs.readFileSync(path.join(__dirname, 'filetext.txt'), 'utf8');
// console.log("synchronously data_Det", data)
// console.log("Second")
// // Read the file asynchronously
// fs.readFile(path.join(__dirname, 'filetext.txt'), "utf-8",(err, data) => {
// if(err) {
//     console.log("errrrr", err)
// }
// console.log("asynchronously data_Det", data)
// })

// console.log("Third")

// // --------------------------------------------------------------
// // Write File 
// const currentDirectory = process.cwd();
// console.log(currentDirectory)
// fs.writeFileSync(path.join(__dirname, "greet.txt"), "Hello world");

// // Without run the flag -> its over written the data, use the flag : a through we append the data
// fs.writeFile(path.join(__dirname, 'greet.txt'), " Hello venkatesh", {flag : "a"}, (err) => { 
//     if(err) {
//         console.log("errrrrr", err)
//     } else {
//         console.log("File is written")
//     }
// })

// -----------------------------------------------------------------------------
// const fs = require("fs/promises")
// const path = require("path")


// fs.readFile(path.join(__dirname + "/greet.txt"), "utf-8").then((data) => {
// console.log("readFile_data", data)
// }).catch((err) => {
//     console.log("readFile_cathc", err)
// })
// async function readFileData() {
// const data = await fs.readFile(path.join(__dirname +"/greet.txt"), "utf-8")
// console.log("read Data", data)
// }
// readFileData()
