import axios from "axios";

const BASE_URL = "http://2227b057ef75.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
