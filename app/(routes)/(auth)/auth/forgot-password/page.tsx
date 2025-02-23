"use client";

import { forgotPasswordSchema } from "@/app/(auth-feat)/schema";
import Headline from "@/components/ui/headline";
import Logo from "@/components/ui/logo";
import Text from "@/components/ui/text";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Form, FormControl, FormField,
  FormItem, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useResetPassword from "@/app/(auth-feat)/hooks/useResetPassword";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN!;

export default function ForgotPassword() {
  const { loading, errorMessage, handleResetPassword } = useResetPassword();
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  if (errorMessage) {
    toast.error(`${errorMessage}`)
  }

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    const res = await handleResetPassword(values.email, DOMAIN);
    console.log(res)
  }

  return (
    <section className="relative bg-light-gray min-h-screen w-full flex items-center justify-center">
      <section className="bg-white p-5 w-1/3 mx-auto rounded-md shadow-md">
        <Logo />
        <Headline
          variant="h4"
          className="text-center font-medium text-2xl mb-2"
        >
          Password Reset
        </Headline>
        <Text variant="div" className="text-sm text-text-gray mb-6">
          Enter your <strong>email address</strong> that you used to register.
          We&apos;ll send you an email with a link to reset your password.
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input
                      required
                      className="shad-input"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color
              disabled:bg-blue-400"
              type="submit"
              disabled={loading === "loading"}
            >
              {loading === "loading" ? (
                <>
                  <Loader className="w-4 h-4 animate-spin text-white" />
                </>
              ) : (
                <>Send Reset Email</>
              )}
            </Button>
          </form>
        </Form>
      </section>
    </section>
  );
}
