"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const captureFormSchema = z.object({
  first_name: z.string().min(2).max(200),
  last_name: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string(),
  company_name: z.string().min(2).max(200),
  interested_product: z.string().min(2).max(200),
  source: z.string().min(2).max(200),
  message: z.string().min(2).max(200),
  contact_method_preferred: z.string().min(2).max(200),
});

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company_name: "",
  interested_product: "",
  source: "",
  message: "",
  contact_method_preferred: "",
};

const formData: { label: string; name: keyof z.infer<typeof captureFormSchema> }[] = [
    { label: "First name", name: "first_name" },
    { label: "Last name", name: "last_name" },
    { label: "Email", name: "email" },
    { label: "Phone", name: "phone" },
    { label: "Company name", name: "company_name" },
    { label: "What product are you interested in?", name: "interested_product" },
    { label: "Where did you hear about us?", name: "source" },
    { label: "Preferred Contact Method", name: "contact_method_preferred" },
    { label: "Message", name: "message" },
]

export default function CaptureForm() {
  const form = useForm<z.infer<typeof captureFormSchema>>({
    resolver: zodResolver(captureFormSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof captureFormSchema>) {
    // send info to lead database.
    console.log(values);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mb-3">
          {formData.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={item.name} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          ))}
          <Button type="submit" className="w-full bg-blue-color hover:bg-blue-color
          active:bg-blue-color">Submit</Button>
        </form>
      </Form>
    </section>
  );
}