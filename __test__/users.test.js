const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connect");
const mongoose = require("mongoose");
const testData = require("../db/data/test-data");
const User = require("../models/userSchema");

// beforeEach(async () => {
//   await seed(testData);
// });
afterAll(() => {
  mongoose.connection.close();
});

describe("Get /api/users", () => {
  describe("Get all users", () => {
    test("should get all users", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body: { users } }) => {
          expect(users.length).toBe(24);
        });
    });
  });
  describe("Get /api/user/:userId", () => {
    test("should get user by id", async () => {
      const user = await User.find({});
      return request(app)
        .get(`/api/users/${user[0]._id}`)
        .expect(200)
        .then(
          ({
            body: {
              user: { _id: user_id },
            },
          }) => {
            expect(user_id).toBe(user[0]._id.toString());
          }
        );
    });
    test("should give an error for wrong userId", async () => {
      const user = await User.find({});
      return request(app).get(`/api/users/hello45535`).expect(400);
    });
  });
});
