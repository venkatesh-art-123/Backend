const express = require("express");
const http = require("http");
const cors = require("cors")
const { Server } = require("socket.io");
const { connectDB } = require("../dbConnection/mongoconnect");
const router = require("../Module/Router/learnRouter");
const app = express();
app.use(cors({
    origin: "*"
}))
app.use("/api", router)
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

server.listen(4321, () => {
    connectDB()
    console.log("Server is running port ui 3000");
})