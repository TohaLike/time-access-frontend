"use client";
import React, { ReactNode, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateTimeSchema } from "@/validations/DateTime";
import { DateListItemProps, TimeProps } from "@/type";
import { format } from "date-fns";
import { useUpdateTime } from "@/hooks/useUpdateTime";
import { timeCreated } from "@/helpers/timeCreated";
import { useDate } from "@/hooks/useDate";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function TextFiledTime({ register, name }: { register: any; name: string }) {
  return (
    <TextField
      type="time"
      slotProps={{
        input: {
          ...register,
          name: name,
        },
      }}
      sx={{
        width: "100%",
        "& .MuiInputBase-root": {
          width: "100%",
          height: "38px",
          fontFamily: "var(--font-SF-Rrounded)",
        },
        "& .MuiOutlinedInput-root": {
          height: "38px",
          borderRadius: "12px",
          p: "12.5px 0",
          bgcolor: "#F7FBFF",
          "&.Mui-focused": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-input": {
            p: "11.5px 14px",
          },
        },
      }}
    />
  );
}

function ButtonComponent({
  type,
  icon,
  onClick,
}: {
  type: "submit" | "reset" | "button";
  icon: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button
      type={type}
      sx={{
        maxWidth: "35px",
        minWidth: "35px",
        maxHeight: "35px",
        minHeight: "35px",
        borderRadius: "100px",
      }}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}

export const TextFieldShowDate: React.FC<DateListItemProps> = ({
  day,
  startTime,
  endTime,
  openIndex,
  setOpenIndex,
  elementIndex,
  updatedAt,
}) => {
  const { mutate } = useDate();
  const { updateTrigger } = useUpdateTime();

  const handleOpenEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenIndex(elementIndex);
  };

  const form = useForm({
    resolver: zodResolver(dateTimeSchema),
    defaultValues: {
      startTime: format(startTime, "HH:mm") || "00:00",
      endTime: format(endTime, "HH:mm") || "00:00",
    },
  });

  const handleClose = () => setOpenIndex(null);

  const handleSubmit = async (event: TimeProps) => {
    try {
      await updateTrigger({
        day,
        startTime: event.startTime,
        endTime: event.endTime,
      }).finally(() => {
        mutate()
        setOpenIndex(null);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {openIndex === elementIndex ? (
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <TextFiledTime
                name={"startTime"}
                register={form.register("startTime")}
              />
              <TextFiledTime
                name={"endTime"}
                register={form.register("endTime")}
              />

              <ButtonComponent
                type="submit"
                icon={<DoneOutlineOutlinedIcon />}
              />

              <ButtonComponent
                type="button"
                icon={
                  <CloseOutlinedIcon sx={{ width: "30px", height: "30px" }} />
                }
                onClick={handleClose}
              />
            </Box>
          </form>
        </FormProvider>
      ) : (
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
      )}
    </>
  );
};
