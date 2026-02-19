const path = require("path") // node - Its is the references of node in-built func.
console.log("direc name", __filename)
console.log("current dic", __dirname, __filename)
// console.log("directory baseName", path.basename(__dirname), "----", path.basename(__filename))
// console.log("directory ExtName", path.extname(__dirname), "----", path.extname(__filename))
// console.log("path Parse", path.parse(__dirname), path.format(path.parse(__filename)))


// // JOIN PATH 
// console.log("Path oin", path.join("folder1", "folder2", "path.js"));
// console.log("Path oin", path.join("/folder1", "folder2", "path.js"))
// console.log("Path oin", path.join("//folder1", "//folder2", "path.js"))
// console.log("Path oin", path.join("folder1", "folder2", "../server"))

// console.log("---------------------------------------------------------------------------------------------------------------")
// console.log("Path resolve", path.resolve("folder1", "folder2", "path.js"));
// console.log("Path resolve", path.resolve("/folder1", "folder2", "path.js"))
// console.log("Path resolve", path.resolve("/folder1", "/folder2", "folder3", "path.js"))
// console.log("Path resolve", path.resolve("folder1", "folder2", "../server"))
// console.log("Path oin", path.join("folder1", "folder2", "path.js"))