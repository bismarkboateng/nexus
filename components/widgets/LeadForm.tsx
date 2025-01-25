import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { formSchema, defaultValues, formData } from "@/app/(lead-feat)/data";
import { Form } from "@/components/ui/form";
import InputNumDate from "../composites/InputNumDate";
import SelectForm from "../composites/SelectForm";
import TextArea from "../composites/TextArea";
import CheckBox from "../composites/CheckBox";
import Array from "../composites/Array";


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
          if (
            item.type === "input" ||
            item.type === "number" ||
            item.type === "date"
          ) {
            return <InputNumDate key={item.title} item={item} form={form} />;
          } else if (item.type === "select") {
            return <SelectForm key={item.title} item={item} form={form} />;
          } else if (item.type === "textarea") {
            return <TextArea key={item.title} item={item} form={form} />;
          } else if (item.type === "checkbox") {
            return <CheckBox key={item.title} item={item} form={form} />;
          } else if (item.type === "array") {
            return <Array key={item.title} item={item} form={form} />;
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
