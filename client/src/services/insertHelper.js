import axios from "axios";

export default async function insertHelper(token, id, incomingFormData) {
  incomingFormData.account_id = id;
  const response = await axios.post("inserthours", incomingFormData, {
    headers: { Authorization: "Bearer " + token },
  });
  return response;
}
