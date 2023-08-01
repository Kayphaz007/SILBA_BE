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
              .then(({body: {users}}) => {

                console.log({users});
              });
          });
    })
    fdescribe('Get /api/user/:userId', ()=>{
        test('should get user by id', ()=>{
            return request(app)
            .get('/api/users/64c8e6df89d5c452c8427de9')
            .expect(200)
            .then(({body})=>{
                    console.log(body)
            })
        })
    })

  });