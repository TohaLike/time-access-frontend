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
  const handleOpenEdit = () => setOpenIndex(elementIndex);

  function EditTime() {
    if (openIndex === elementIndex)
      return (
        <TextFieldShowDate
          day={day}
          startTime={startTime}
          endTime={endTime}
          setOpenIndex={setOpenIndex}
        />
      );

    return (
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            fontStyle: "italic",
            color: "#00000070",
            mr: "40px",
          }}
        >
          Обновлено {timeCreated(updatedAt)}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "28px" }}>
          {format(startTime, "HH:mm")}
          {" - "}
          {format(endTime, "HH:mm")}
        </Typography>

        <div onClick={handleOpenEdit}>
          <EditOutlinedIcon sx={{ width: "24px", height: "24px" }} />
        </div>
      </Box>
    );
  }

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

        <EditTime />
      </Paper>
    </>
  );
};
