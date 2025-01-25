import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { formSchema } from "@/app/(lead-feat)/data";
import { Input } from "../ui/input";

type InputTypes = {
  form: z.infer<typeof formSchema>;
  item: formSchema;
};

const InputNumDate = ({ item, form }: InputTypes) => {
  return (
    <FormField
      key={item.title}
      control={form.control}
      name={item.title as keyof z.infer<typeof formSchema>}
      render={({ field }) => (
        <FormItem className="my-3">
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <Input
              type={item.type === "number" ? "number" : item.type}
              placeholder={`Enter ${item.label}`}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputNumDate;
