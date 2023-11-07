import axios from "axios";

// axios.defaults.headers.common = {
//   "Content-Type": "application/json",
// };
const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/",
});

apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("userInfo"))
      config.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("userInfo")!).token
      }`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default apiClient;
