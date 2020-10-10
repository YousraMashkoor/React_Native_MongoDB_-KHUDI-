import axios from "axios";

const BASE_URL = "http://86893df619b2.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
