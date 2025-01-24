import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { formSchema, defaultValues, formData } from "@/app/(lead-feat)/data";
import { Form } from "@/components/ui/form";

const LeadForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form Values:", values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formData.map((item) => {
          if (item.type === "input" || item.type === "number" || item.type === "date") {
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
                        type={item.type === "number" ? "number" : item.type}
                        placeholder={`Enter ${item.label}`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            );
          } else if (item.type === "textarea") {
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
            );
          } else if (item.type === "checkbox") {
            return (
              <FormField
                key={item.title}
                control={form.control}
                name={item.title as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>{item.label}</FormLabel>
                  </FormItem>
                )}
              />
            );
          } else if (item.type === "array") {
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
                          field.onChange(e.target.value.split(",").map((val) => val.trim()))
                        }
                        value={field.value.join(", ")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            );
          } else if (item.type === "select") {
            return (
              <FormField
                key={item.title}
                control={form.control}
                name={item.title as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={`Select ${item.label}`} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {item.options?.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
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
          }
          return null;
        })}
        <SheetFooter>
          <SheetClose>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default LeadForm;
