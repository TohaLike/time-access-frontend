import { z } from "zod";

export const dateTimeSchema = z
  .object({
    startTime: z.string(),
    endTime: z.string(),
  })
  .refine((data) => data.startTime < data.endTime, {
    message:
      "Значение времени в первом поле не должно превышать значение во втором поле. Убедитесь, что данные указаны корректно",
  })
  .refine((data) => data.startTime <= data.endTime, {
    message:
      "Укажите время",
  });

// data.startTime, data.endTime
