const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoutes")

dbConnect();

const app = express();
// console.log("entered app.js");
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/user/', authRouter);

app.listen(PORT, ()=>{
    console.log(`server is listening to port ${PORT}`);
})