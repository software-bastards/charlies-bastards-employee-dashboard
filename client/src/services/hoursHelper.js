import axios from "axios";

export default async function hoursHelper(token, id) {
  const response = await axios.post(
    "/displayhours",
    { id },
    {
      headers: { Authorization: token },
    }
  );
  return response;
}
