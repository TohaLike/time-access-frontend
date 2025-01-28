import axiosWithAuth, { API_URL } from "@/http/token";
import { AuthResponse } from "@/type";
import axios, { AxiosResponse } from "axios";

export default class AuthService {
  static async registration(
    data: object
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await axiosWithAuth.post("/registration", data);
    localStorage.setItem("accessToken", response.data.accessToken)

    return response.data;
  }

  static async login(data: object): Promise<AxiosResponse<AuthService>> {
    const response = await axiosWithAuth.post("/login", data);
    localStorage.setItem("accessToken", response.data.accessToken)

    return response.data;
  }

  static async logout(): Promise<AxiosResponse<AuthService>> {
    const response = await axiosWithAuth.post("/logout");
    localStorage.removeItem("accessToken")
    return response.data;
  }

  static async refresh() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem("accessToken", response.data.accessToken)

      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}
