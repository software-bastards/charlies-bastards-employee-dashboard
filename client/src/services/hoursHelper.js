import axios from "axios";

export default async function dashboardHelper(token) {
  const response = await axios.get("/displayhours", {
    headers: { Authorization: "Bearer " + token },
  });
  return response;
}
