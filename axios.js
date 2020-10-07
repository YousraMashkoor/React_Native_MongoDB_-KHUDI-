import axios from "axios";

const BASE_URL = "http://f4a923624281.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
