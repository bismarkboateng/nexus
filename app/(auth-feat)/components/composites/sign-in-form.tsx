"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInFormSchema } from "../../schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Text from "@/components/ui/text";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import Headline from "@/components/ui/headline";

import { signInDefaultValues } from "../../const";
import useSignin from "../../hooks/useSignin";
import { Loader, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSignin, loading } = useSignin();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    await handleSignin(values.email, values.password)
  }

  return (
    <section
      className="bg-white w-[90%] md:w-[50%] lg:w-[35%] p-5 xl:md:w-[25%]
      2xl:w-[20%] mx-auto rounded-md shadow-md"
    >
      <Logo />
      <Headline variant="h4" className="text-center font-medium text-2xl my-4">
        Welcome back 👋
      </Headline>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="shad-input"
                    required
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex items-center relative">
                  <div className="">
                    <Input
                      className="mb-2 shad-input"
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                    />
                    {showPassword ? (
                      <Eye
                        className="absolute top-2 right-1 text-gray-500 cursor-pointer"
                        size={20}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <EyeClosed
                        className="absolute top-2 right-1 text-gray-500 cursor-pointer"
                        size={20}
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color"
            type="submit"
            disabled={loading === "loading"}
          >
            {loading === "loading" ? (
              <>
                <Loader className="w-4 h-4 animate-spin text-white" />
              </>
            ) : (
              <>Sign in</>
            )}
          </Button>
          <Link className="block mt-1" href="/auth/forgot-password">
            <Text className="flex items-center justify-center text-xs cursor-pointer text-blue-color">
              Forgot your password?
            </Text>
          </Link>
        </form>
      </Form>
    </section>
  );
}
