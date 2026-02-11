import express from "express";
import cors from "cors";
import commonRouter from "./Commonrouter/v1router.js"
import config from "./config.js"
import { connectDB } from "./DB/connection.js";
import fileUpload from "express-fileupload";


const app = express();
app.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "PUT"]
}))
app.use(express.json())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

app.use("/api", commonRouter);


app.listen(config.PORT, () => {
    connectDB()
    console.log("server is running successfully", config.PORT);

})



