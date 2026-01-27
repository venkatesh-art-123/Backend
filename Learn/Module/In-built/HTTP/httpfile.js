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


let readStream = fs.createReadStream(__dirname + "/index1.html", "utf-8");

readStream.on("data", (chunks) => {
    console.log("reqdStream chunks", chunks)
   let modified =  chunks.replace("{{name}}", "VENKATESH JJ");
    res.write(modified)
});

readStream.on("end", () => {
readStream.pipe(res)
})

});


server.listen(3000, () => {
    console.log("server is running port 3000")
})