const http = require("http");
const path = require("node:path");
const { Worker } = require("node:worker_threads")
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        console.log("send the response")
        res.end("HOme page")
    } else if (req?.url == "/slow-page") {
        const worker = new Worker(path.join(__dirname, "workerthread.js"))
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            console.log("send the slow response");
            res.end("slow response " + j)
        })
    }

});

server.listen(8000, () => console.log("Listen the port main 8000"))