import {
  FormControl, FormField,
  FormItem, FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { PropertySchema } from "../../schema";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

export default function PropertyDetailsFields({
  form,
}: {
  form: UseFormReturn<z.infer<typeof PropertySchema>>;
}) {
  return (
    <section className="flex flex-col gap-3">
      <Text className="text-lg text-blue-600">Property Details</Text>
      <div className="grid grid-cols-2 space-x-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Enter property title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="property_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Enter property type"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 space-x-3">
        <FormField
          control={form.control}
          name="furnished_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Furnished Status</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Enter furnished status"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year_built"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year Built</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  placeholder="Enter year built"
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
          name="property_details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Details</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-input"
                  placeholder="Enter property details"
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