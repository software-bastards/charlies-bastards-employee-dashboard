import axios from "axios";

export default async function dashboardHelper(token) {
  const response = await axios.get("/dashboard", {
    headers: { Authorization: "Bearer " + token },
  });
  return response;
}
