import axios from "axios";

const BASE_URL = "http://a606eb69a27b.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
