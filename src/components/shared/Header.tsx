"use client";
import React from "react";
import { Box, Container as MuiContainer } from "@mui/material";
import { useLogout } from "@/hooks/useLogout";
import { ActionButton } from "../ui";

export const Header: React.FC = ({}) => {
  const { logoutTrigger } = useLogout();

  const handleLogout = async () => {
    await logoutTrigger().finally(() => {
      window.location.reload();
    });
  };

  return (
    <header>
      <Box display={"flex"} justifyContent={"flex-end"}> 
        <ActionButton type="button" variant="text" onClick={handleLogout}>
          Выйти
        </ActionButton>
      </Box>
    </header>
  );
};
