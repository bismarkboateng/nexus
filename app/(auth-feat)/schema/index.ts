import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpFormSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email()
})

export const saveNewPasswordSchema = z.object({
  password: z.string().min(6).max(200),
  confirm_password: z.string().min(6).max(200),
})