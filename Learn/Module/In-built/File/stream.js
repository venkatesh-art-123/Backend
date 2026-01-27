const fs = require("fs")
const path = require("path")

const readStream = fs.createReadStream(path.join(__dirname + "/strfile.txt"), {
    encoding: "utf-8",
    highWaterMark: 2
})

const writeStream = fs.createWriteStream(path.join(__dirname + "/strfile1.txt"), { flags: "a" })

readStream.on("data", (chunk) => {
    console.log("chunk_Deta", chunk, chunk.toString())
    writeStream.write(chunk)
    writeStream.on("finish", () => {
        console.log("All data written to disk");
    });

})

