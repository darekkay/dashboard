import request from "supertest";

import app from "../../app";

describe("root", () => {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  it("should respond with 200", (done) => {
    return request(app).get("/").expect(200, done);
  });
});
