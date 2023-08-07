const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connect");
const mongoose = require("mongoose");
const testData = require("../db/data/test-data");
const Business = require("../models/businessSchema");

beforeEach(async () => {
  await seed(testData);
});
afterAll(() => {
  mongoose.connection.close();
});

xdescribe("GET /api/business", () => {
  test("should manipulate test database", () => {
    return request(app)
      .get("/api/business")
      .expect(200)
      .then(({ body: { business } }) => {
        console.log({ business });
      });
  });
});

xdescribe("GET /api/business/:business_id", () => {
  test("should get business by id", async () => {
    const business = await Business.find({});
    // console.log(business);
    return request(app)
      .get(`/api/business/${business[0]._id}`)
      .expect(200)
      .then(
        ({
          body: {
            business: { _id: business_id },
          },
        }) => {
          expect(business_id).toBe(business[0]._id.toString());
        }
      );
  });
});
