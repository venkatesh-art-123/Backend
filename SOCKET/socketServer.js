const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require('socket.io');
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
    crenditals: true
}))

const server = http.createServer(app);
const socketIO = new Server(server);

const todoList = [];
// Established the channel
const todoListSpaceName = socketIO.of('/http:'); // channel

todoListSpaceName.on("connection", (socket) => {
console.log("new connection established")
    socket.emit("update", todoList);

    socket.on("todoListData", (data) => {
        const insertData = { id: 0, item: data }
        todoList.push(insertData);
        todoListSpaceName.emit("updateItem", todoList);
    });

    socket.on("updateItem", (data) => {
        const findIndex = todoList.findIndex(item => item.id == data.id);
        if (findIndex != -1) {
            todoList[findIndex].item = data
        }
    })

    socket.on("deleteItem", (data) => {
        const removeData = todoList.filter(item => item.id != data.id);
        todoList.push(removeData)
    });

    socket.on("disconnect", () => {
    console.log("Server is disconnected")
})
});





server.listen(3000, () => {
    console.log("server is listening port 3000")
})