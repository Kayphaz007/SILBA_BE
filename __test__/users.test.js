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



describe("Get /api/users", () => {
    describe('Get all users', ()=>{
        test("should get all users", () => {
            return request(app)
              .get("/api/users")
              .expect(200)
              .then(({body: allUser}) => {

                console.log({allUser});
              });
          });
    })
    xdescribe('Get /api/user/:userId', ()=>{
        test('should get user bu id', ()=>{
            return request(app)
            .get('/api/users/64c8d085e41dc8be42bb3ea8')
            .expect(200)
            .then((body_userId)=>{
                    console.log({body_userId})
            })
        })
    })

  });