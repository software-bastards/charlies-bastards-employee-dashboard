import axios from "axios";
import editHours from "../API/editHours";

jest.mock("axios");

describe(" axios send data to update", () => {
  const message = { message: "Everything went fine " };
  const error = "Something went wrong";

  test(" request successfull, retrieve the response", async () => {
    axios.put.mockImplementationOnce(() => Promise.resolve(message));
    await expect(
      editHours("month", "day", "hour", "token", "account_id")
    ).resolves.toEqual(message);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5000/myhours/edit",
      {
        data: {
          account_id: "account_id",
          month: "month",
          day: "day",
          hour: "hour",
        },
        headers: { Authorization: "token" },
      }
    );
  });

  test(" request failure, retrieve an error", async () => {
    axios.put.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(editHours()).rejects.toThrow(error);
  });
});
