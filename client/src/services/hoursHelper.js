import axios from "axios";

export default async function dashboardHelper(token) {
  const response = await axios.get("/hours", {
    headers: { Authorization: "Bearer " + token },
  });
  return response;
}
