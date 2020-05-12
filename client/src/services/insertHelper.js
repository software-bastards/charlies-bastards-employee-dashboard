import axios from "axios";

export default async function insertHelper(token, id, incomingFormData) {
  incomingFormData.account_id = id;
  const response = await axios.post(
    "http://localhost:5000/inserthours",
    incomingFormData,
    {
      headers: { Authorization: token },
    }
  );
  return response;
}
