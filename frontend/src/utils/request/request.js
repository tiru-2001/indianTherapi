import axios from "axios";
const configuredUrl = axios.create({
  baseURL: "http://localhost:8900/api/v1",
  withCredentials: true,
});

export default configuredUrl;
