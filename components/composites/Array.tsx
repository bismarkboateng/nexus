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

type ArrayTypes = {
    form: z.infer<typeof formSchema>;
    item: formSchema;
  };

const Array = ({ item, form }: ArrayTypes) => {
  return (
    <FormField
      key={item.title}
      control={form.control}
      name={item.title as keyof z.infer<typeof formSchema>}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={`Enter ${item.label} (comma-separated)`}
              onChange={(e) =>
                field.onChange(
                  e.target.value.split(",").map((val) => val.trim())
                )
              }
              value={field.value?.join(", ") ?? ""}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default Array;
