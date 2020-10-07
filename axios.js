import axios from "axios";

const BASE_URL = "http://9393a541b8bb.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
