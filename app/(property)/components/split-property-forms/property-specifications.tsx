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

export default function PropertySpecifications({
  form,
}: {
  form: UseFormReturn<z.infer<typeof PropertySchema>>;
}) {
  return (
    <section className="flex flex-col gap-3 mt-3">
      <Text className="text-lg text-blue-600">Specifications</Text>   
      <div className="grid grid-cols-3 space-x-3">
        <FormField
          control={form.control}
          name="no_of_bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bedrooms</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Bedrooms"
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
          name="no_of_bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathrooms</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Bathrooms"
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
          name="sq_foot"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Enter area"
                  type="number"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}
