import DateService from "@/services/date-service";
import useSWRMutation from "swr/mutation";
import { useDate } from "./useDate";
import AuthService from "@/services/auth-service";

export const useLogout = () => {
  const { trigger } = useSWRMutation(
    ["logout_mutation"],
    (url, { arg }: { arg?: object }) => AuthService.logout()
  );

  return { logoutTrigger: trigger };
};
