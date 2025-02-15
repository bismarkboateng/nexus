"use client";

import { z } from "zod";
import { PropertySchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormMessage,
  FormField, FormItem, FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import initialPropertyValues from "../lib/const";

export default function AddPropertyForm() {
  const form = useForm<z.infer<typeof PropertySchema>>({
    resolver: zodResolver(PropertySchema),
    defaultValues: initialPropertyValues,
  });

  function onSubmit(values: z.infer<typeof PropertySchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="sm"
          type="submit"
          className="bg-gradient-to-r from-[#56e1f3] to-[#3301a7] hover:bg-blue-500
            h-7 px-[20px] text-sm shadow"
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
