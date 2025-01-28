"use client";
import React from "react";
import { OutlinedInputProps, TextField, Typography } from "@mui/material";
import { AuthInputProps } from "@/type";

const styles = {
  width: "100%",
  "& .MuiInputBase-root": {
    width: "100%",
    height: "48px",
    fontFamily: "var(--font-SF-Rrounded)",
  },
  "& .MuiOutlinedInput-root": {
    height: "48px",
    borderRadius: "12px",
    p: "12.5px 0",
    bgcolor: "#F7FBFF",
    "&.Mui-focused": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-input": {
      p: "11.5px 14px",
    }
  },
};

export const AuthInput: React.FC<AuthInputProps> = ({
  type,
  name,
  placeholder,
  register,
  error,
  errorText,
  titleField,
}) => {
  return (
    <div>
      {titleField && (
        <Typography
          variant="body1"
          fontSize={"16px"}
          fontWeight={"400"}
          textAlign={"start"}
          color="var(--primary-text)"
          p="0 3px 8px"
        >
          {titleField}
        </Typography>
      )}
      <TextField
        type={type}
        placeholder={placeholder}
        sx={styles}
        autoComplete=""
        slotProps={{
          input: {
            ...register,
            name: name,
            // disableUnderline: false,
          } as Partial<OutlinedInputProps>,
        }}
      />
      {error && (
        <Typography
          variant="body2"
          sx={{ fontSize: "12px", color: "red", p: "5px", textAlign: "start" }}
        >
          {errorText}
        </Typography>
      )}
    </div>
  );
};
