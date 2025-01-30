"use client"

import { forgotPasswordSchema } from "@/app/(auth-feat)/schema";
import Headline from "@/components/ui/headline";
import Logo from "@/components/ui/logo";
import Text from "@/components/ui/text";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          Enter your <strong>email address</strong> that you used to register. We&apos;ll send
          you an email with a link to reset your password.
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input required className="shad-input" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
            className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color"
            type="submit"
          >
            Reset password
          </Button>
          </form>
        </Form>
      </section>
    </section>
  );
}
