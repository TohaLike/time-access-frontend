"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DateListItem } from "../ui";
import DateService from "@/services/date-service";
import { DateTimeProps } from "@/type";

export const MainPage: React.FC = () => {
  const [dateTimes, setDateTimes] = useState<DateTimeProps[] | undefined>([]);

  const getDateTimes = async () => {
    try {
      const response = await DateService.getDateTimes();
      setDateTimes(response.data);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDateTimes();
  }, []);

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
        {dateTimes?.map((e: any, i: number) => (
          <DateListItem
            key={`week-day-${i}`}
            title={e?.day}
            startTime={e?.startTime}
            endTime={e?.endTime}
            updatedAt={e?.updatedAt}
          />
        ))}
      </Box>
    </div>
  );
};
