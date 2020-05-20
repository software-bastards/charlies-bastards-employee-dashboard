import React from "react";
import axios from "axios";
import displayImages from "../API/displayImages";

jest.mock("axios");

describe(" axios call when component mounts", () => {
  const data = { token: "test", id: 1, month: "month" };
  const object = { id: 1, hour: 1 };
  const error = "Something went wrong";

  test(" request successfull, retrieve the response", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(object));
    await expect(
      displayImages(data.token, data.id, data.month)
    ).resolves.toEqual(object);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/upload/images?", {
      params: { userId: 1, month: "month" },
      headers: { Authorization: "test" },
    });
  });

  test(" request failure, retrieve an error", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(displayImages()).rejects.toThrow(error);
  });
});
