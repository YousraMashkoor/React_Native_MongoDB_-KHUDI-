import axios from "axios";

const BASE_URL = "http://01bb9bc39f25.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
