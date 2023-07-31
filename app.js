const express = require("express");
const app = express();
const db = require("./db/connect");
const Business = require("./models/businessSchema");
const User = require("./models/userSchema");
const mongoose = require("mongoose");

//middleware
app.use(express.json());

const start = async () => {
  try {
    // connect DB
    await db();
    console.log("Database is running");
  } catch (error) {
    console.log(error);
  }
};
start();

//routes
app.get("/api/user", async (req, res) => {
  const user = await User.find({});
  res.status(200).send({ user });
});
app.get("/api/business", async (req, res) => {
  const business = await Business.find({});
  res.status(200).send({ business });
});

module.exports = app;
