const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

afterAll(() => {
  mongoose.connection.close();
});

describe("Testing Environment", () => {
  test("should manipulate test database", () => {
    return request(app).get("/api/user").expect(200);
  });
});
