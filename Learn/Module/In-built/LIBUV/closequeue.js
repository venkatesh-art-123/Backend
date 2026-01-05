// Close queue cb are executed after all other queues
// cb in a given iteration of event loop

const fs = require("node:fs");
const path = require("node:path");
const readStream = fs.createReadStream(path.join(__dirname, "../File/strfile.txt"));
readStream.close();

readStream.on("close", () => {
    console.log("this is from readableStream close event cb")
});

process.nextTick(() => {
    console.log("This is the inner tic")
});

Promise.resolve().then(() => console.log("promise resoved"));

setTimeout(() => {
    console.log("This is the setTimoeut")
}, 0)


setImmediate(() => {
    console.log("setImmediated")
});

setImmediate(() => {
    console.log("setImmediated 2")
});

setImmediate(() => {
    console.log("setImmediated 3")
});


fs.readFile(path.join(__dirname , "../File/strfile.txt"),"utf-8", (err, data) => {
    if (err) {

    } else {
    console.log("readed the file")
    }
});