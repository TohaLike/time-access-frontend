import axiosWithAuth from "@/http/token";
import { DateTimeProps, TimeProps } from "@/type";
import { AxiosResponse } from "axios";

export default class DateService {
  static async getDateTimes(): Promise<AxiosResponse<DateTimeProps[]>> {
    const response = await axiosWithAuth.get("/date_times");
    return response;
  }

  static async setDateTime(data: object): Promise<AxiosResponse<TimeProps>> {
    console.log(data)
    const response = await axiosWithAuth.post("/set_time", data);
    return response;
  }
}


