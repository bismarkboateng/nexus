"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpFormSchema } from "../../schema";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import Logo from "@/components/ui/logo";
import Headline from "@/components/ui/headline";
import { signUpDefaultValues } from "../../const";
import useSignup from "../../hooks/useSignup";

import { Loader } from "lucide-react"

export default function SignupForm() {
  const { handleSignup, loading } = useSignup()
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    await handleSignup(values);
  }

  return (
    <section className="bg-white p-5 w-1/3 mx-auto rounded-md shadow-md">
      <Logo />
      <Headline variant="h4" className="text-center font-medium text-2xl mb-2">
        Sign up to Nexus
      </Headline>
      <Form {...form}> 
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="shad-input"
                    required
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="shad-input"
                    type="email"
                    required
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
                    type="password"
                    className="mb-2 shad-input"
                    required
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
              I agree to <span className="text-blue-color">Nexus terms & conditions</span>
            </label>
          </div>
          <Button
            className="w-full bg-blue-color hover:bg-blue-color active:bg-blue-color
              disabled:bg-blue-300 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading === "loading"}
          >
           {loading === "loading" ? (
             <>
              <Loader className="w-4 h-4 animate-spin text-white" />
             </>
           ): (
             <>Create account</>
           )}
          </Button>
        </form>
      </Form>
    </section>
  );
}
