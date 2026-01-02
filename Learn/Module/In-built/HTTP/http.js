const http = require("node:http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req?.url == "/html") {
        const readFile = fs.readFileSync(__dirname + "/htmlfile.html", "utf-8")
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(readFile)
    } else if(req?.url == "/pipe") {
        const readStream = fs.createReadStream(__dirname + "/htmlfile.html", "utf-8")
        res.writeHead(200, { "Content-Type": "text/html" })
        readStream.pipe(res)
        // res.end("Server is running")
    }

})


server.listen(3000, () => {
    console.log("server is running on port 3000")
})