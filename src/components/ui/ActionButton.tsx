import React from "react";
import { ButtonProps } from "@/type";
import { Button } from "@mui/material";

export const ActionButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type,
  variant,
  title,
  onClick,
  children,
  startIcon,
  endIcon,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  ...props
}) => {
  return (
    <>
      <Button
        type={type}
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHaspopup}
        onClick={onClick}
        disableElevation
        disableRipple
        disableFocusRipple
        disableTouchRipple
        sx={{ ...props }}
      >
        {children || "title"}
      </Button>
    </>
  );
};
