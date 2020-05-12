import { createSession, monthHours, setMessage, deleteSession } from "./index";

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
  test("returns an action with type `DISPLAY_MESSAGE`", () => {
    const action = setMessage();
    expect(action).toHaveProperty("type", "DISPLAY_MESSAGE");
    expect(action).toHaveProperty("message", undefined);
  });
  test("returns an action with type `MONTH_HOURS`", () => {
    const action = monthHours();
    expect(action).toHaveProperty("type", "MONTH_HOURS");
    expect(action).toHaveProperty("month", undefined);
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
