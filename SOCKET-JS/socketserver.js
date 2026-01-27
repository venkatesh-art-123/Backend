const express = require("express");
const http = require("http");
const cors = require("cors")
const { Server } = require("socket.io")
const app = express();
app.use(cors({
    origin: "*"
}))
const server = http.createServer(app);

const socketIO = new Server(server, {
    cors: { origin: "*" }
});

socketIO.on("connect", (socket) => {
    console.log("Connection is established")

    socket.on("new-messages", (message) => {
        console.log("NEw messages", message)
        socketIO.emit("receive-message", message)
    });

})

server.listen(3000, () => console.log("Server is running port ui 3000"))