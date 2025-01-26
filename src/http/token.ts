import { AuthResponse } from "@/type";
import axios from "axios";

export const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;

const axiosWithAuth = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

axiosWithAuth.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    try {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        return axiosWithAuth.request(originalRequest);
      }
    } catch (e) {
      console.log("Не авторизован");
    }
    throw error;
  }
);

export default axiosWithAuth;
