"use client";
import React, { ReactNode } from "react";
import { Box, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateTimeSchema } from "@/validations/DateTime";
import { TimeProps } from "@/type";
import { format } from "date-fns";
import DateService from "@/services/date-service";

import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface Props {
  day: string;
  startTime: string;
  endTime: string;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const styles = {
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
};

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
      sx={styles}
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

export const TextFieldShowDate: React.FC<Props> = ({
  day,
  startTime,
  endTime,
  setOpenIndex,
}) => {
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
      const response = await DateService.setDateTime({
        day,
        startTime: event.startTime,
        endTime: event.endTime,
      });
      setOpenIndex(null);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(form.formState.errors);

  return (
    <>
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

            <ButtonComponent type="submit" icon={<DoneOutlineOutlinedIcon />} />

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
    </>
  );
};
