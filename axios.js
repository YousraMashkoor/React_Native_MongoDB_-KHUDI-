import axios from "axios";

const BASE_URL = "http://9e21833e93e3.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
