const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const Business = require("./models/businessSchema");
const businessJson = require("./data/business.json");
const { default: mongoose } = require("mongoose");

const ENV = process.env.NODE_ENV;
require("dotenv").config({ path: `${__dirname}/.env.${ENV}` });
//middleware
app.use(express.json());

const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URL);
    console.log({ ENV });
    console.log("Database is running");
    await Business.deleteMany();
    await Business.create(businessJson);
    console.log("success collection created");
    // process.exit(0);
    // mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};
start();

//routes
app.get("/api/user", (req, res) => {
  res.status(200).send({ hello: "hello" });
});

module.exports = app;
