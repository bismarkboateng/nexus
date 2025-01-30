import Text from "@/components/ui/text";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function RightSidebar() {
  return (
    <section className="px-3">
      <Text className="font-semibold mt-2">Company</Text>
      <div className="flex flex-row items-center gap-3 mt-2">
        <Image
          src="/assets/images/google.svg"
          width={35}
          height={35}
          alt="google"
          className="w-14 h-14"
        />
        <div className="flex flex-col">
          <Text className="font-bold">Google inc.</Text>
          <Text className="text-gray-500 text-sm">google.com</Text>
        </div>
      </div>
      <div className="px-3 py-3 mt-3 border border-gray-300 rounded">
        <div className="flex items-center gap-2">
          <Mail className="text-gray-400 w-4 h-4" />
          <Text className="text-sm">jeromebell@gmail.com</Text>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-gray-400 w-4 h-4" />
          <Text className="text-sm">(405) 555-0128</Text>
        </div>
      </div>
    </section>
  );
}
