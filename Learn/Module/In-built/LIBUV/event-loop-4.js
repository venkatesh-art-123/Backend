// OUTPUT
// Last line of the code
// nextTic
// inner nextTic
// promise resoved
// Timer expired
// setImmediate
// readed the file

const fs = require("fs")
const path = require("path")


setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer expired"), 0)


Promise.resolve().then(() => console.log("promise resoved"));

fs.readFile(path.join(__dirname, "../File/strfile.txt"), "utf-8", (err, data) => {
    if (err) {

    } else {
        console.log("readed the file")
    }
});


process.nextTick(() => {
    process.nextTick(() => { console.log("inner nextTic")});
    console.log("nextTic")
});

console.log("Last line of the code")