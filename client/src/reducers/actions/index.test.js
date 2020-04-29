import { createSession, deleteSession, actionTypes } from "./index";

describe("createSession", () => {
  test("returns an action with type `CREATE_SESSION`", () => {
    const action = createSession();
    expect(action).toHaveProperty(
      "type",
      "firstname",
      "lastname",
      "message",
      "token"
    );
  });
});

describe("deleteSession", () => {
  test("returns an action with type `DELETE_SESSION`", () => {
    const action = deleteSession();
    expect(action).toHaveProperty(
      "type",
      "firstname",
      "lastname",
      "message",
      "token"
    );
  });
});
