import DateService from "@/services/date-service";
import useSWR from "swr";

export const useDate = () => {
  const { data, isLoading, mutate } = useSWR(["date_time"], DateService.getDateTimes, {
    revalidateOnFocus: false,
  });

  return { dateTimeData: data, loadingTimeDate: isLoading, mutate };
};
