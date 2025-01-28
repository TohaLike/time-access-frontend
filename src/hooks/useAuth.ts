import AuthService from "@/services/auth-service";
import useSWR from "swr";

export const useAuth = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const { data, isLoading } = useSWR(["date_time"], () => token ? AuthService.refresh() : null, {
    revalidateOnFocus: false,
  });

  return { dateTimeData: data, loadingTimeDate: isLoading };
};
