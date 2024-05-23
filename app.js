const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoutes");
const {errorHandler, notFound} = require('./middlewares/errorHandler')

dbConnect();

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/user/', authRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`server is listening to port ${PORT}`);
})