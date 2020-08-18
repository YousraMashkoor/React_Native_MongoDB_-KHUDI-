import axios from "axios";

const BASE_URL = "http://ea1127e73dde.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
