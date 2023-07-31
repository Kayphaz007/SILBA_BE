const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connect");
const mongoose = require("mongoose");
const testData = require("../db/data/test-data");

beforeEach(async () => {
  await seed(testData);
});
afterAll(() => {
  mongoose.connection.close();
});

fdescribe("Testing Environment", () => {
  test("should manipulate test database", () => {
    return request(app)
      .get("/api/business")
      .expect(200)
      .then(({ text }) => {
        const { business } = JSON.parse(text);
        console.log(business);
      });
  });
});

describe("Testing Environment", () => {
  test("should manipulate test database", () => {
    return request(app)
      .get("/api/user")
      .expect(200)
      .then((data) => {
        console.log(data);
      });
  });
});
