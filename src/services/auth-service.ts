import axiosWithAuth from "@/http/token";
import { AuthResponse } from "@/type";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async registration(data: object): Promise<AxiosResponse<AuthResponse>> {
    const response = await axiosWithAuth.post("/registration", data);
    return response.data;
  }

  static async login(data: object): Promise<AxiosResponse<AuthService>> {
    const response = await axiosWithAuth.post("/login", data);
    return response.data;
  }
}
