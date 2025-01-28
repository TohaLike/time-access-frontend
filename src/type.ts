import { ReactNode } from "react";

export interface UserData {
  id: string;
  email: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserData;
}

export interface DateListItemProps {
  day: string;
  startTime: string;
  endTime: string;
  updatedAt: string;
  elementIndex: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface DateTimeProps {
  id?: string;
  day: string;
  startTime: Date;
  endTime: Date;
  updatedAt: Date;
}

export interface TimeProps {
  startTime: string;
  endTime: string;
}

export interface ButtonProps {
  type: "button" | "reset" | "submit";
  variant?: "contained" | "outlined" | "text";
  children?: string | number | ReactNode;
  onClick?: (action: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  [props: string]: any;
  ariaControls?: string | undefined | any;
  ariaHaspopup?: boolean | undefined | any;
  ariaExpanded?: boolean | undefined | any;
}

export interface AuthInputProps {
  type: "email" | "password" | "text";
  placeholder: string;
  name: string;
  register?: any;
  error?: boolean;
  errorText?: string;
  titleField?: string
}