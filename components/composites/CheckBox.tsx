import React from "react";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from "@/components/ui/form";
  import { z } from "zod";
  import { formSchema } from "@/app/(lead-feat)/data";
import { Checkbox } from "../ui/checkbox";


type CheckBoxTypes = {
    form: z.infer<typeof formSchema>;
    item: formSchema;
  };


const CheckBox = ({ item, form }: CheckBoxTypes) => {
  return (
    <FormField
      key={item.title}
      control={form.control}
      name={item.title as keyof z.infer<typeof formSchema>}
      render={({ field }) => (
        <FormItem className="flex items-center space-x-3">
          <FormControl>
            <Checkbox
              checked={Boolean(field.value)}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel>{item.label}</FormLabel>
        </FormItem>
      )}
    />
  );
};

export default CheckBox;
