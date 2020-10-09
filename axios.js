import axios from "axios";

const BASE_URL = "http://54fdcff8d156.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
});
