import axios from "axios";
/**
 * @function uploadAPI - send hte uploaded files to the server to store into the database according to the user id and selected month.
 * @param {*} formData
 */

export default async function uploadAPI(formData) {
  const newLocal = "http://localhost:5000/upload";
  const response = await axios.post(newLocal, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
}
