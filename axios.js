import axios from "axios";

const BASE_URL = "http://1692b7780922.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
