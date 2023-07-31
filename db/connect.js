const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectDB;

// const { Pool } = require("pg");
// const ENV = process.env.NODE_ENV || "development";

// require("dotenv").config({
//   path: `${__dirname}/../.env.${ENV}`,
// });

// if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
//   throw new Error("PGDATABASE or DATABASE_URL not set");
// }

// const config = {};

// if (ENV === "production") {
//   config.connectionString = process.env.DATABASE_URL;
//   config.max = 2;
// }

// module.exports = new Pool(config);
