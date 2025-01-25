import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { formSchema, formData } from "@/app/(lead-feat)/data";

type selectTypes = {
  form: z.infer<typeof formSchema>,
  item:  formSchema 
}



const SelectForm = ({ item, form }: selectTypes) => {
  return (
    <FormField
      key={item.title}
      control={form.control}
      name={item.title as keyof z.infer<typeof formSchema>}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${item.label}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {item.options?.map((option: string) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SelectForm;
