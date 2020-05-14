import axios from "axios";

export default async function hoursHelper(token, id) {
  const response = await axios.get(
    "/displayhours",

    {
      headers: { Authorization: token },
      params: { id },
    }
  );
  return response;
}
