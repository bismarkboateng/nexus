import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { formSchema } from "@/app/(lead-feat)/data";
import { Textarea } from "../ui/textarea";


type TextAreaTypes = {
    form: z.infer<typeof formSchema>;
    item: formSchema;
  };

const TextArea = ({ item, form }: TextAreaTypes) => {
  return (
    <FormField
    key={item.title}
    control={form.control}
    name={item.title as keyof z.infer<typeof formSchema>}
    render={({ field }) => (
      <FormItem className="space-y-3">
        <FormLabel>{item.label}</FormLabel>
        <FormControl>
          <Textarea placeholder={`Enter ${item.label}`} {...field} />
        </FormControl>
      </FormItem>
    )}
  />

  )
}

export default TextArea
