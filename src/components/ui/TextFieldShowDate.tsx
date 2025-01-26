"use client";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateTimeSchema } from "@/validations/DateTime";
import { TimeProps } from "@/type";
import DateService from "@/services/date-service";

type Props = {
  day: string;
};

export const TextFieldShowDate: React.FC<Props> = ({ day }) => {
  const form = useForm({
    resolver: zodResolver(dateTimeSchema),
    defaultValues: {
      startTime: "00:00",
      endTime: "00:00",
    },
  });

  const handleSubmit = async (event: TimeProps) => {
    try {
      const response = await DateService.setDateTime({
        day,
        startTime: event.startTime,
        endTime: event.endTime,
      });

      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  console.log(form.formState.errors);

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <TextField
              type="time"
              slotProps={{
                input: {
                  ...form.register("startTime"),
                  name: "startTime",
                },
              }}
            />
            <TextField
              type="time"
              slotProps={{
                input: {
                  ...form.register("endTime"),
                  name: "endTime",
                },
              }}
            />
          </Box>

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>

      <Box></Box>
    </>
  );
};
