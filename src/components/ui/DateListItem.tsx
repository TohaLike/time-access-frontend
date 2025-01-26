"use client";
import { DateListItemProps } from "@/type";
import { Box, Paper, Typography } from "@mui/material";
import { TextFieldShowDate } from "./TextFieldShowDate";
import { format } from "date-fns";
import { timeCreated } from "@/helpers/timeCreated";

export const DateListItem: React.FC<DateListItemProps> = ({
  title,
  startTime,
  endTime,
  updatedAt,
}) => {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: "500", width: "150px" }}
        >
          {title || "title"}
        </Typography>

        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              fontStyle: "italic",
              color: "#00000070",
              mr: "40px"
            }}
          >
           Обновлено {timeCreated(updatedAt)}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "28px" }}>
            {format(startTime, "HH:mm")}
            {" - "}
            {format(endTime, "HH:mm")}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
