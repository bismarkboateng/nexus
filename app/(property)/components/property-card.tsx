import Text from "@/components/ui/text";
import { Dot, Heart, Maximize2 } from "lucide-react";
import Image from "next/image";
import { PropertyType } from "../types";

import Link from "next/link";

type Props = {
  property: PropertyType
}

export default function PropertyCard({ property }: Props) {
  return (
    <Link href="#"
      className="col-span-2 flex flex-row gap-2 border rounded-lg p-2
    cursor-pointer shadow"
    >
      <Image
        src="/assets/images/estate.jpeg"
        width={300}
        height={300}
        alt="estate image"
        className="w-[100px] h-[100px] object-cover rounded-lg"
      />
      <div className="w-full flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <Text className="text-xs text-gray-500 ">{property.property_details}</Text>
          <Heart className="text-red-500" size={15} />
        </div>
        <Text className="font-medium">{property.title}</Text>
        <div className="text-xs flex flex-row items-center text-gray-500">
          <Text>{property.no_of_bedrooms} bedroom</Text> <Dot />
          <Text>{property.no_of_bathrooms} bath</Text>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <Maximize2 size={14} className="text-gray-500" />
            <Text className="text-gray-500 text-sm">{property.sq_foot} m²</Text>
          </div>
          <Text className="text-sm font-bold">${property.price.toFixed(2)}</Text>
        </div>
      </div>
    </Link>
  );
}
