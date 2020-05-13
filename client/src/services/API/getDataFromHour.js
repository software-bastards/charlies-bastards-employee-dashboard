import axios from "axios";
/**
 * @function getDataFromHour
 * @param {number} id -client id
 * @param {string} token -token provide by jwt
 * @returns {obj} - with information from the hour table
 */

export default async function getDataFromHour(token, id) {
  const newLocal = "http://localhost:5000/myhours";
  const response = await axios.get(newLocal, {
    headers: { Authorization: token },
    params: { account_id: id },
  });

  return response;
}
