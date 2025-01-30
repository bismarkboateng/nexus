"use client"

import { saveNewPasswordSchema } from "@/app/(auth-feat)/schema";
import Headline from "@/components/ui/headline";
import Logo from "@/components/ui/logo";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";


export default function SetNewPassword() {
  const form = useForm<z.infer<typeof saveNewPasswordSchema>>({
    resolver: zodResolver(saveNewPasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof saveNewPasswordSchema>) {
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
         Change password
        </Headline>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input required type="password" className="shad-input" placeholder="Enter new password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input required type="password" className="shad-input" placeholder="Confirm new password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
            className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color"
            type="submit"
          >
            Save new password
          </Button>
          </form>
        </Form>
      </section>
    </section>
  );
}
