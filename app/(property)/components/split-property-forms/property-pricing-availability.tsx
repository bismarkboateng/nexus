import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import Text from "@/components/ui/text";
  import { PropertySchema } from "../../schema";
  import { z } from "zod";
  import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
  
  export default function PropertyPricingAvailability({
    form,
  }: {
    form: UseFormReturn<z.infer<typeof PropertySchema>>;
  }) {
    return (
      <section className="flex flex-col gap-3 mt-3">
        <Text className="text-lg text-blue-600">Pricing & Availability</Text>   
        <div className="grid grid-cols-2 space-x-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    className="shad-input"
                    placeholder="price"
                    type="number"
                    min={1}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability_status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability Status</FormLabel>
                <FormControl>
                  <Input
                    className="shad-input"
                    placeholder="Enter status"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="lease_terms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lease terms</FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-input"
                    placeholder="Enter lease terms"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </section>
    );
  }
  