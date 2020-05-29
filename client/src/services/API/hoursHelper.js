import axios from "axios";

/**
 * @function hoursHelper - select the images from the upload table base on the user ID and the selected month
 * @param {*} token -token provide by JWT
 * @param {*} id - from account table
 * @param {*} month - select by the user
 * @returns {array} - an array of objects
 */

export default async function hoursHelper(token, id, month) {
  const response = await axios.get(
    "/displayhours",

    {
      headers: { Authorization: token },
      params: { id: id, month: month },
    }
  );
  return response;
}
