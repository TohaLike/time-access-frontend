"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "./Container";
import { Box, Button, Paper, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "@/validations/Auth";
import { ActionButton, AuthInput } from "../ui";
import AuthService from "@/services/auth-service";

export const AuthComponent: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  const handleSubmit = async (data: object) => {
    try {
      const response = await AuthService.login(data);
      window.location.reload();
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "100vh",
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                maxWidth: "430px",
                width: "100%",
                p: "30px",
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="h2"
                fontFamily={"var(--font-SF-Rrounded)"}
                whiteSpace={"pre-wrap"}
                fontWeight={"600"}
                fontSize={"36px"}
                textAlign={"start"}
              >
                Авторизация
              </Typography>
              <Box mt={"30px"}>
                <AuthInput
                  type="text"
                  name="email"
                  titleField="Логин"
                  placeholder="email@email.ru"
                  register={register("email")}
                  error={!!errors.email}
                  errorText={errors?.email?.message}
                />
              </Box>
              <Box mt={"16px"}>
                <AuthInput
                  type="password"
                  name="password"
                  titleField="Пароль"
                  placeholder="Password123*"
                  register={register("password")}
                  error={!!errors.password}
                  errorText={errors?.password?.message}
                />
              </Box>
              <ActionButton
                type="submit"
                variant="contained"
                borderRadius={"12px"}
                width={"100%"}
                height={"52px"}
                fontSize={"20px"}
                mt={"24px"}
                textTransform={"none"}
                bgcolor={"#162D3A"}
              >
                Авторизоваться
              </ActionButton>
            </Paper>
          </Box>
        </form>
      </FormProvider>
    </Container>
  );
};
