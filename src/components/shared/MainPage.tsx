"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { DateListItem } from "../ui";
import { useDate } from "@/hooks/useDate";

export const MainPage: React.FC = () => {
  const [isIndex, setIsIndex] = useState<number | null>(null);
  const { dateTimeData } = useDate();

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
        {dateTimeData?.data?.map((element: any, index: number) => (
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
