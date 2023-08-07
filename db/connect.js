const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectDB;

