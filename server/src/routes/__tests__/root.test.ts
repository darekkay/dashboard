import request from "supertest";

import app from "../../app";

describe("root", () => {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  test("should respond with 200", () => {
    return request(app).get("/").expect(200);
  });
});
