const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000

//middleware
app.use(express.json());

// mounting routes
const blog = require('./routes/blog');
app.use("/api/v1",blog);

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log("Server listening on port 3000")
})

app.get('/', (req,res)=>{
    res.send("Welcome")
})