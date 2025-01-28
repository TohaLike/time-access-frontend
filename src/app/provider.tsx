"use client";
import { AuthComponent } from "@/components/shared";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import AuthService from "@/services/auth-service";
import { useAuth } from "@/hooks/useAuth";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<any>();
  const { dateTimeData, loadingTimeDate } = useAuth();


  if (loadingTimeDate)
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      </div>
    );

  if (!dateTimeData) return <AuthComponent />;

  return (
    <>
      <div>{children}</div>
    </>
  );
};
