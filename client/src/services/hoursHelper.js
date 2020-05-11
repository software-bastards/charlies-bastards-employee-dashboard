import axios from "axios";

export default async function hoursHelper(token, id) {
  console.log(token);
  console.log(id);
  const response = await axios.post(
    "http://localhost:5000/displayhours",
    { id },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return response;
}
