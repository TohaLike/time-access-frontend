"use client";
import { DateListItemProps } from "@/type";
import { Box, Paper, Typography } from "@mui/material";
import { TextFieldShowDate } from "./TextFieldShowDate";
import { format } from "date-fns";
import { timeCreated } from "@/helpers/timeCreated";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
export const DateListItem: React.FC<DateListItemProps> = ({
  day,
  startTime,
  endTime,
  updatedAt,
  openIndex,
  elementIndex,
  setOpenIndex,
}) => {

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: "20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          cursor: "pointer",
          height: "80px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: "500", width: "150px" }}
        >
          {day || "day"}
        </Typography>

        <TextFieldShowDate
          day={day}
          startTime={startTime}
          endTime={endTime}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          elementIndex={elementIndex}
          updatedAt={updatedAt}
        />
      </Paper>
    </>
  );
};
