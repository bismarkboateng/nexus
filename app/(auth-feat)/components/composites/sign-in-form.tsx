"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInFormSchema } from "../../schema";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import Text from "@/components/ui/text";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import Headline from "@/components/ui/headline";

import { signInDefaultValues } from "../../const";
import useSignin from "../../hooks/useSignin";
import { Loader } from "lucide-react";

export default function SignInForm() {
  const { handleSignin, loading } = useSignin()

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    await handleSignin(values.email, values.password)
  }

  return (
    <section className="bg-white p-5 w-1/3 mx-auto rounded-md shadow-md">
      <Logo />
      <Headline variant="h4" className="text-center font-medium text-2xl mb-2">
        Sign in to Nexus
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
                <FormControl>
                  <Input
                    className="mb-2 shad-input"
                    required
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
              text-text-gray"
            >
              Remember me
            </label>
          </div>
          <Button
            className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color"
            type="submit"
            disabled={loading === "loading"}
            >
             {loading === "loading" ? (
              <>
               <Loader className="w-4 h-4 animate-spin text-white" />
              </>
             ): (
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
