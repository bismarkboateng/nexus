import Text from "@/components/ui/text";
import AddPropertyForm from "./add-property-form";


export default function AddProperty() {
  return (
    <section>
     <Text className="text-lg font-medium">Add Property</Text>
     <Text className="text-sm text-gray-500 mt-2">
        Enter the details for the new property and click &quot;Save&quot; when done.
     </Text>
     <section>
      <AddPropertyForm />
     </section>
    </section>
  )
}
