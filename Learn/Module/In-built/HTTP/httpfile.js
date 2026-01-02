const http = require("http");
const fs = require("node:fs");


const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type" : "text/html"});
    // res.end("<h1> Hello world </h1>")

    // const readFile = fs.readFileSync(__dirname + "/index.html", "utf-8")

    // res.end(readFile)

    // let html = fs.readFileSync(__dirname + "/index1.html", "utf-8")
    // html = html.replace("{{name}}", "venkatesh")
    // res.end(html)


let html = fs.createReadStream(__dirname + "/index1.html", "utf-8");
html = html.replace("{{name}}", "venkatesh")

readStream.pipe(res)
});


server.listen(3000, () => {
    console.log("server is running port 3000")
})