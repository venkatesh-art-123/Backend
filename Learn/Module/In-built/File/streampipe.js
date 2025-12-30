const fs = require("fs")
const path = require("path")


let readStream = fs.createReadStream(path.join(__dirname + "/strfile.txt"), {
    encoding: "utf-8",
    highWaterMark: 2
})

let writeStream = fs.createWriteStream(path.join(__dirname + "/strfile1.txt"))

readStream.on("data", (chunk) => {
    const canWrite = writeStream.write(chunk)
    if (!canWrite) {
        readStream.pause();
    }
})

writeStream.on("drain", () => {
    console.log("Resume the readSTream")
    readStream.resume()
})

// This is exactly what pipe() does internally.


readStream.pipe(writeStream)

