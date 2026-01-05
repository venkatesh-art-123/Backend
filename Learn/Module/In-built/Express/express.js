// const http = require("http");
const express = require("express");

const app = express();


// app.use("/second", (req, res, next) => {
//     console.log("Middleware second")
//     res.send("<h1> THis is the second midd </h1>")
//     // next()
// })


// app.use("/third", (req, res, next) => {
//     console.log("Middleware third")
//     res.send("<h1> THis is the third midd </h1>")
//     // next()
// })

// app.use("/", (req, res, next) => {
//     res.send("<h1> THis is the first midd </h1>")
//     console.log("Middleware 1st")
//     next()
// });
app.use("/add-product", (req, res, next) => {

});
app.listen(3000, () => { console.log("Server is running port 3000") })
// const server = http.createServer(app);
// server.listen(3000, () => { console.log("Server is running port 3000")})


