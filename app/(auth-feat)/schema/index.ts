import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email()
})

export const saveNewPasswordSchema = z.object({
  password: z.string(),
  confirm_password: z.string(),
})