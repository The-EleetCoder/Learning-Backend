const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database connected"))
    .catch((err) => {
      console.log("DB connection error: " + err);
      process.exit(1);
    });
};
