const moongoose = require('moongoose');

require("dotenv").config();

const dbConnect = moongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("Database connection established");
})
.catch((error)=>{
    console.log("DB connection failed");
    console.error(error.message);
    process.exit(1);
})

module.exports = dbConnect;