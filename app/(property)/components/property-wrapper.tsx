"use client";

import { useBoundStore } from "@/store";
import PropertyCard from "./property-card";
import PropertyDetail from "./property-detail";
import Text from "@/components/ui/text";
import FilterProperty from "./filter-property";

export default function PropertyWrapper() {
  const properties = useBoundStore((state) => state.property);

  return (
    <>
      <div className="col-span-2 flex flex-col gap-3 mt-5">
        <div className="flex items-center justify-between">
          <Text className="text-gray-500 text-sm">
            More than <span className="font-bold">{properties.length}</span>{" "}
            house available
          </Text>
          <FilterProperty />
        </div>
        {properties.map((item) => (
          <PropertyCard key={item.price} />
        ))}
      </div>
      <PropertyDetail />
    </>
  );
}
