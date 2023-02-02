import axios from "axios";

import { BASE_URL } from "../config";

const axiosInstance = axios.create({ baseURL: BASE_URL });

axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Somthing went wrong"
    )
);

export default axiosInstance;
