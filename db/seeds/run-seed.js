const devData = require("../data/development-data");
const seed = require("./seed");
const db = require("../connect");
const mongoose = require("mongoose");

const runSeed = async () => {
  try {
    console.log("running seed");
    await seed(devData);
    mongoose.connection.close();
    console.log("end seed");
  } catch (error) {
    console.log(error);
  }
};

runSeed();

// const devData = require('../data/development-data/index.js');
// const seed = require('./seed.js');
// const db = require('../connection.js');

// const runSeed = () => {
//   return seed(devData).then(() => db.end());
// };

// runSeed();
