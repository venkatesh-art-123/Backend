const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        console.log("send the response")
        res.end("HOme page")
    } else if (req?.url == "/slow-page") {
        for (let i = 0; i < 6000000000; i++) { };
        res.writeHead(200, { "Content-Type": "text/plain" });
        console.log("send the slow response");
        res.end("slow response")
    }
});

server.listen(8000, () => console.log("Listen the port 8000"))