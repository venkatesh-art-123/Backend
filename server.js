require("./Learn/Module/In-built/path")
// buy price greater than sell price its must exectued

// require("./Learn/Module/In-built/function")
// require("./Learn/Module/In-built/events")
// require("./Learn/Module/In-built/extendevent")

// File
// require("./Learn/Module/In-built/File/file") 
//Stream
// require("./Learn/Module/In-built/File/stream")
// require("./Learn/Module/In-built/File/duplexstream")
// Pipe
// require("./Learn/Module/In-built/File/streampipe")

// require("./Learn/Module/In-built/HTTP/http")

// require("./Learn/Module/In-built/HTTP/httpfile")


// Libuv
// MainThread (SYNC)
// require("./Learn/Module/In-built/LIBUV/mainthread")

// Namaste JS //
// require("./Learn/Module/In-built/LIBUV/event-loop-3")
// require("./Learn/Module/In-built/LIBUV/event-loop-4")
// ThreadPool (ASYNC)
// require("./Learn/Module/In-built/LIBUV/threadpool")

// Network IO
// require("./Learn/Module/In-built/LIBUV/networkio")

// Event loop (MICROTASK)
// require("./Learn/Module/In-built/LIBUV/eventloop")

// NAMSTE
// require("./Learn/Module/In-built/LIBUV/event-loop-3")

// Timer queue
// require("./Learn/Module/In-built/LIBUV/timerqueue")

//IO/queue
// require("./Learn/Module/In-built/LIBUV/ioqueue")

// Check queue
// require("./Learn/Module/In-built/LIBUV/checkqueue")

// Close queue
// require("./Learn/Module/In-built/LIBUV/closequeue")

// Cluster
// require("./Learn/Module/In-built/CLUSTER/no-cluster");
// require("./Learn/Module/In-built/CLUSTER/cluster")

// Express
// require("./Learn/Module/In-built/CLUSTER/mainthread")

// require("./Learn/Module/In-built/Express/express")

// JWT
// require("./JWT/jwtsecurity")

// SOCKET.IO
// require("./SOCKET-JS/socketserver")



// console.log("direc name", __filename)
// const app = require('express');
// const PORT = 3000;


// app.use()

// app.listen(PORT, () => {
//     console.log("Server is listening");
// })



// app.use(express.static("public"));



const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const learnRoutes = require("./Module/Router/learnRouter");


// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", learnRoutes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});