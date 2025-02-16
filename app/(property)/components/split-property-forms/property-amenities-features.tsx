import {
  FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form";
import Text from "@/components/ui/text";

import { PropertySchema } from "../../schema";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

export default function PropertyAmenitiesFeatures({
  form,
}: {
  form: UseFormReturn<z.infer<typeof PropertySchema>>;
}) {
  return (
    <section className="flex flex-col gap-3 mt-3">
      <Text className="text-lg text-blue-600">Amenities & features</Text>
      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={form.control}
          name="nearby_amenities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nearby amenities</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-input"
                  placeholder="Enter amenities"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="utilities_included"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Utilities Included</FormLabel>
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
      </div>

      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={form.control}
          name="security_features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Security features</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-input"
                  placeholder="Enter security features"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="what_this_place_offers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What this place offers</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-input"
                  placeholder="Enter offerings"
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
