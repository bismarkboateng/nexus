import Icon from "@/components/ui/icon";
import Text from "@/components/ui/text";

type PropertyFeatureProp = {
    children: React.ReactNode;
    title: string;
    value: number | string;
}

export default function PropertyFeature({ children, title, value }: PropertyFeatureProp ) {
  return (
    <div className="flex items-center gap-3">
      <Icon isBordered className="bg-gray-200">
        {children}
      </Icon>
      <div>
        <Text className="text-sm text-gray-500">{title}</Text>
        <Text className="font-semibold">{value}</Text>
      </div>
    </div>
  );
}
