// THe cluster module enables the creation of child processes (also called workers)
// that run simultaneously 

// All created work share the same server port

// Master is only in charge of the workers 

// Workers are in charge of handling incoming
// request, reading files etc

//Each workers get its own event loop, memory 
// & v8 Engine 

// Why shouldn't we simply create a large number of workers using cluster.fork() ?

//  We should only create as many workers as there are CPU cores on the machine the app is running

// If you create more workers than there are logical cores on the computer
// it can cause an overhead as the system will have to schedule
// all the created workers with fewer number of cores 

const cluster = require("cluster")
const http = require("http");
const Os = require("node:os");

console.log("ossss", Os.cpus().length);
// best number worker create your machine npm package is pm2 
if (cluster.isMaster) {
    console.log(`Master proess ${process.pid} is running`)
    cluster.fork(); // If you created one worker is same like no-cluster scenario
    cluster.fork();
} else {
    console.log(`Workers proess ${process.pid} is running`);
    const server = http.createServer((req, res) => {

        if (req.url == "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            console.log("send the response")
            res.end("HOme page")
        } else if (req?.url == "/slow-page") {
            for (let i = 0; i < 6000000000; i++) { };
            res.writeHead(200, { "Content-Type": "text/plain" });
            console.log("send the slow response")
            res.end("slow response")
        }
    });

    server.listen(8000, () => console.log("Listen the port 8000"))
}