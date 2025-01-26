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
  title: string;
  startTime: string;
  endTime: string;
  updatedAt: string;
}

export interface DateTimeProps {
  id: string;
  day: string;
  startTime: Date;
  endTime: Date;
  updatedAt: Date;
}


export interface TimeProps {
  startTime: string;
  endTime: string;
}