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
import Text from "@/components/ui/text";


export default function SetNewPassword() {
  const form = useForm<z.infer<typeof saveNewPasswordSchema>>({
    resolver: zodResolver(saveNewPasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });


  function onSubmit(values: z.infer<typeof saveNewPasswordSchema>) {

    console.log(values);
  }

  return (
    <section className="relative bg-light-gray min-h-screen w-full flex items-center justify-center">
      <section className="bg-white w-[90%] md:w-[50%] lg:w-[35%] p-5 xl:md:w-[25%]
      2xl:w-[20%] mx-auto rounded-md shadow-md">
        <Logo />
        <Headline
          variant="h4"
          className="text-center font-medium text-2xl mb-2"
        >
         Create new password
        </Headline>
        <Text className="text-xs text-gray-500 text-center">
          Your new password must be different from previous
          used passwords.
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input required type="password" className="shad-input" placeholder="Password" {...field} />
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
                    <Input required type="password" className="shad-input" placeholder="Confirm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Text className="text-xs text-gray-500">
             Both passwords must match 
            </Text>
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
