const {seed} = require("../db/seeds/seed");
const testData = require("../db/data/test-data/index");
const app = require("../server");
const db = require("../db/connection");
const request = require("supertest");
const endpoints = require("../endpoints.json");

beforeEach(() => seed(testData));

afterAll(() => db.end());

describe("GET /api", () => {
    test("should return the endpoints JSON object", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(endpoints);
        });
    });
  });