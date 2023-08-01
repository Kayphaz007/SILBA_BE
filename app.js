const express = require("express");
const app = express();
const db = require("./db/connect");
const Business = require("./models/businessSchema");
const User = require("./models/userSchema");
const mongoose = require("mongoose");
const userRouter = require('./routes/user')
const businessRouter = require('./routes/business')

//middleware
app.use(express.json());

const start = async () => {
  try {
    // connect DB
    await db();
    console.log("Database is running");
  } catch (error) {
    console.log({error});
  }
};
start();

//routes

app.use('/api/users', userRouter)

app.use("/api/business", businessRouter )
module.exports = app;
