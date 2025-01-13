import Icon from "@/components/ui/icon";
import { Phone, Mail, Plus, Ellipsis } from "lucide-react";

export default function Actions() {
  return (
    <div className="flex items-center justify-center mt-3">
      <div className="flex items-center gap-4">
        <Icon isBordered>
          <Plus size={17} className="text-gray-400" />
        </Icon>
        <Icon isBordered>
          <Mail size={17} className="text-gray-400" />
        </Icon>
        <Icon isBordered>
          <Phone size={17} className="text-gray-400" />
        </Icon>
        <Icon isBordered>
          <Ellipsis size={17} className="text-gray-400" />
        </Icon>
      </div>
    </div>
  );
}
