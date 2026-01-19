const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const app = express();

const userData = [
    { id: 1, name: "venkatesh" },
    { id: 1, name: "karthick" }
];

function authorization(req, res, next) {
    let authorization = req.headers['authorization'];
    console.log("authorization__det", authorization);
    let token = authorization.split(' ')[1];
    let verify = jwt.verify(token, process.env.ACCESS_TOKEN);
    console.log("authorization__tok", verify);
    if (verify) {
        req.user = verify?.name;
    }
    next()
}

app.get("/login", (req, res) => {
    try {
        console.log("Login", process.env, process.env.ACCESS_TOKEN);
        let signature = jwt.sign({ name: "venkatesh" }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
        return res.send({ accesstoken: signature })
    } catch (e) {
        console.log("Login__err", e)
    }
})

app.post("/getUserData", authorization, (req, res) => {
    console.log("authorization__det", req?.user);
    let data = userData.filter((el) => el.name == req?.user);
    if (data) {
        return res.send(data)
    } else {
        return res.send({ message: "Invalid user" })
    }

})


app.get("/", (req, res) => {
    console.log("sssssssss")
    return res.send({ message: "server is running" })
    // return res.status(200).json({ message: "server is running" })
});


app.listen(3000, () => {
    console.log("server is listening 3000")
})