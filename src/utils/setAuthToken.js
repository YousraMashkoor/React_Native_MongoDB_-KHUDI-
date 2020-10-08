import axios from "axios";
const setAuthToken = (token) => {
  if (token) {
    // apply to every request
    // axios.defaults.headers.common = { Authorization: `${token}` };
    axios.defaults.headers.common["authorization"] = token;
    // console.log(
    //   "Inside SetAuthToken: ",
    //   axios.defaults.headers.common["authorization"]
    // );
  } else {
    //delete authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
