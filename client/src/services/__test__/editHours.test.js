import axios from "axios";
import editHours from "../editHours";

jest.mock("axios");

describe(" axios send data to update", () => {
  const message = { message: "Everything went fine " };
  const object = {
    account_id: 1,
    hour: 2,
    month: 3,
    day: 4,
    token: "test"

  };
  const error = "Something went wrong";

  test(" request successfull, retrieve the response", async () => {
    axios.put.mockImplementationOnce(() => Promise.resolve(message));
    await expect(
      editHours(
        object.account_id,
        object.hour,
        object.month,
        object.day,
        object.token
      )
    ).resolves.toEqual(message);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith("/myhours/edit", {
      data: { account_id: 1, month: 1, day: 1, hour: 1 },
      headers: { Authorization: "Bearer test" },
    });
  });

  test(" request failure, retrieve an error", async () => {
    axios.put.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(editHours(object.account_id, object.hour)).rejects.toThrow(
      error
    );
  });
});
