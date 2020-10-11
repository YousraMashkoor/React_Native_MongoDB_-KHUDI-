import axios from "axios";

const BASE_URL = "http://cb9c949342c9.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
