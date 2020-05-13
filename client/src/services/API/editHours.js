import axios from "axios";

/**
 * @function editHours
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} id
 * @param {number} token
 * @return {obj} - a message that comes from the server
 */

export default async function editHours(month, day, hour, token, id) {
  const newLocal = "http://localhost:5000/myhours/edit";
  const response = await axios.put(newLocal, {
    headers: { Authorization: token },
    data: {
      account_id: id,
      month: month,
      day: day,
      hour: hour,
    },
  });

  return response;
}
