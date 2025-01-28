import DateService from "@/services/date-service";
import useSWRMutation from "swr/mutation";
import { useDate } from "./useDate";

export const useUpdateTime = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    ["date_mutation"],
    (url, { arg }: { arg: object }) => DateService.setDateTime(arg)
  );

  return { updateTrigger: trigger, dateUpdated: data, isMutating };
};
