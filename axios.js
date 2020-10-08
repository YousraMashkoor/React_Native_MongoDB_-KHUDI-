import axios from "axios";

const BASE_URL = "http://cea3366084de.ngrok.io";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// import { AsyncStorage } from "react-native";
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://0d3cd4800832.ngrok.io",
// });

// intercepter for each request.
// check if it localStorage has token? Then attach the token to the headear.
// otherwise, attach nothing.
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem("jwtToken");
//     console.log("Token: ", token);
//     if (token) config.headers.Authorization = token;
// config.headers.Authorization =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2Q3OWEwZjhkZWRkOGVmNGJkN2U4ZSIsImZuYW1lIjoiU2JzaCIsImlhdCI6MTYwMjA1ODY1NywiZXhwIjoxNjAyMDYyMjU3fQ.btcJmkTA0hbgqjdwRWRQPJD16_YNEnNj74WxPDqMXME";
// console.log("Config: ", config)
//     return config;
//   },
//   (err) => Promise.reject(err)
// );

// export default axiosInstance;
