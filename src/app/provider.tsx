"use client";
import { AuthComponent } from "@/components/shared";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authData, loadingAuthData } = useAuth();

  if (loadingAuthData)
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

  if (!authData) return <AuthComponent />;

  return (
    <>
      <div>{children}</div>
    </>
  );
};
