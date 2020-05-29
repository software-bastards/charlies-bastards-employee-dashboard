import React from "react";
import axios from "axios";
import dashboardHelper from "../API/dashboardHelper";

jest.mock("axios");

describe(" axios call when component mounts", () => {
  const data = { token: "test", id: 1 };
  const object = { id: 1, hour: 1 };
  const error = "Something went wrong";

  test("response is here", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(object));
    await expect(dashboardHelper(data.token, data.id)).resolves.toEqual(object);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "/dashboard/hours?",

      {
        headers: { Authorization: "test" },
        params: { account_id: 1 },
      }
    );
  });

  test(" request failure, retrieve an error", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(dashboardHelper()).rejects.toThrow(error);
  });
});
