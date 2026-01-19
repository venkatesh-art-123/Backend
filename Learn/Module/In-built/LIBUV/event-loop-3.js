// Last line of the code
// nextTic
// promise resolved
// Timer expired
// setImmediate
// 2nd innerTic
// Timer expired 2nd


// 2nd setImmediate
// readed the file
const fs = require("fs")
const path = require("path")

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer expired"), 0)

Promise.resolve().then(() => console.log("promise resoved"));

fs.readFile(path.join(__dirname, "../File/strfile.txt"), "utf-8", (err, data) => {
    if (err) {

    } else {
        setTimeout(() => console.log("Timer expired 2nd"), 0)
        process.nextTick(() => {
            console.log("2nd innerTic")
        });
        setImmediate(() => console.log("2nd setImmediate"), 0)
        console.log("readed the file")
    }
});


process.nextTick(() => {
    console.log("nextTic")
});
console.log("Last line of the code")