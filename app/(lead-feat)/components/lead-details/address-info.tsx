import Text from "@/components/ui/text";
import { leads } from "../../data";

export default function AddressInfo() {
  const lead = leads[0]
  const headStyles = "text-gray-400 text-sm"
  const contentStyle = "text-gray-600 font-normal text-base mb-2"

  return (
    <section className="overflow-y-scroll pl-6 mt-2 flex flex-col gap-2">
      <Text className={headStyles}>Street Address</Text>
      <Text className={contentStyle}>{lead.streetAddress}</Text>
      <Text className={headStyles}>City</Text>
      <Text className={contentStyle}>{lead.city}</Text>
      <Text className={headStyles}>State</Text>
      <Text className={contentStyle}>{lead.state}</Text>
      <Text className={headStyles}>Country</Text>
      <Text className={contentStyle}>{lead.country}</Text>
      <Text className={headStyles}>Postal Code</Text>
      <Text className={contentStyle}>{lead.postalCode}</Text>
    </section>
  )
}
