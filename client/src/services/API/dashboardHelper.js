import axios from "axios";

/**
 * @function dashboardHelper - select the images from the upload table base on the user ID and the selected month
 * @param {*} token -token provide by JWT
 * @param {*} id - from account table
 * @param {*} month - select by the user
 * @returns {array} - an array of objects
 */

export default async function dashboardHelper(token, id) {
  const response = await axios.get(
    "/dashboard/hours?",

    {
      headers: { Authorization: token },
      params: { account_id: id },
    }
  );
  return response;
}
