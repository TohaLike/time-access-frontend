"use client";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { DateListItem } from "../ui";
import { DateTimeProps } from "@/type";
import DateService from "@/services/date-service";

export const MainPage: React.FC = () => {
  const [dateTimes, setDateTimes] = useState<DateTimeProps[] | undefined>([]);
  const [isIndex, setIsIndex] = useState<number | null>(null);

  const getDateTimes = async () => {
    try {
      const response = await DateService.getDateTimes();
      setDateTimes(response.data);
      return response.data;
    } catch (element) {
      console.log(element);
    }
  };

  useEffect(() => {
    getDateTimes();
  }, []);

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
        {dateTimes?.map((element: any, index: number) => (
          <DateListItem
            key={`week-day-${index}`}
            day={element?.day}
            startTime={element?.startTime}
            endTime={element?.endTime}
            updatedAt={element?.updatedAt}
            elementIndex={index}
            openIndex={isIndex}
            setOpenIndex={setIsIndex}
          />
        ))}
      </Box>
    </div>
  );
};
