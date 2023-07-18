import axios from "axios";

export default axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
