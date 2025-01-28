import { z } from "zod";

export const AuthSchema = z.object({
  email: z
    .string()
    .email({ message: "Некорректная почта" })
    .max(254, { message: "" }),
  password: z.string().min(8, {
    message: "Пароль должен содержать не менее 8 символов",
  }),
});
