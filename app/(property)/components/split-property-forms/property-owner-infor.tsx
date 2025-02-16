import {
  FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { PropertySchema } from "../../schema";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

export default function PropertyOwnerInformation({
  form,
}: {
  form: UseFormReturn<z.infer<typeof PropertySchema>>;
}) {
  return (
    <section className="flex flex-col gap-3 mt-3">
      <Text className="text-lg text-blue-600">Owner information</Text>
      <FormField
        control={form.control}
        name="owner.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                className="shad-input"
                placeholder="Enter name"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="owner.contact"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact</FormLabel>
            <FormControl>
              <Input
                className="shad-input"
                placeholder="Enter contact"
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
