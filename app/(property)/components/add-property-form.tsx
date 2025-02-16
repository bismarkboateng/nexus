"use client";

import { z } from "zod";
import { PropertySchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import initialPropertyValues from "../lib/const";
import PropertyDetailsFields from "./split-property-forms/property-details-fields";

import PropertyAddressFields from "./split-property-forms/property-address-fields";
import PropertySpecifications from "./split-property-forms/property-specifications";
import PropertyPricingAvailability from "./split-property-forms/property-pricing-availability";
import PropertyOwnerInformation from "./split-property-forms/property-owner-infor";

import PropertyAmenitiesFeatures from "./split-property-forms/property-amenities-features";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "@/components/composites/file-uploader";


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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
        <PropertyDetailsFields form={form} />
        <PropertyAddressFields form={form} />
        <PropertySpecifications form={form} />
        <PropertyPricingAvailability form={form} />
        <PropertyOwnerInformation form={form} />
        <PropertyAmenitiesFeatures form={form} />
        <FormField
          control={form.control}
          name="pet_policy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Policy</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-input"
                  placeholder="Enter utilities"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FileUploader />
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
