import React from "react";
import axios from "axios";
import insertHelper from "../insertHelper";

jest.mock("axios");

describe(" axios call when component mounts", () => {
  const data = { token: "test", id: 1 };
  const incomingFormData = { day: 1, month: 3, hour: 10 };
  const object = { id: 1, account_id: 1 };
  const error = "Something went wrong";

  test(" request successfull, retrieve the response", async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(object));
    await expect(
      insertHelper(data.token, data.id, incomingFormData)
    ).resolves.toEqual(object);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "/inserthours",
      {
        account_id: 1,
        day: 1,
        hour: 10,
        month: 3,
      },
      { headers: { Authorization: "test" } }
    );
  });

  /*   test(" request failure, retrieve an error", async () => {
    axios.post.mockImplementation(() => Promise.reject(new Error(error)));
    await expect(insertHelper()).rejects.toThrow(error);
  }); */
});
