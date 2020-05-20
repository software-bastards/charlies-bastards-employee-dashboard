import React from "react";
import axios from "axios";
import hoursHelper from "../API/hoursHelper";

jest.mock("axios");

describe(" axios call when component mounts", () => {
  const data = { token: "test", id: 1 };
  const object = { id: 1, hour: 1 };
  const error = "Something went wrong";

  test("response is here", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(object));
    await expect(hoursHelper(data.token, data.id)).resolves.toEqual(object);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "/displayhours",

      {
        headers: { Authorization: "test" },
        params: { id: 1 },
      }
    );
  });

  test(" request failure, retrieve an error", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(hoursHelper()).rejects.toThrow(error);
  });
});
