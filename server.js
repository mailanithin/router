const express = require("express");
const cors = require("cors");
const router = require("./routes/kings");
const path = require("path");

let app = express();

app.use(express.static(path.join(__dirname,"./client/build")));

app.use(cors());

app.use("/",router);

app.listen(8585,()=>{
    console.log("this port no is listening to 8585");
})