"use client";

import { useBoundStore } from "@/store";
import PropertyCard from "./property-card";
import PropertyDetail from "./property-detail";
import Text from "@/components/ui/text";

import FilterProperty from "./filter-property";
import { useState } from "react";
import PaginationComponent from "@/components/composites/pagination";

export default function PropertyWrapper() {
  const properties = useBoundStore((state) => state.property);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentProperties = properties.slice(firstPostIndex, lastPostIndex);

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
        {currentProperties.map((item) => (
          <PropertyCard property={item} key={item.price} />
        ))}
        <PaginationComponent
         totalPosts={properties.length}
         postsPerPage={postsPerPage}
         setCurrentPage={setCurrentPage}
         currentPage={currentPage}
        />
      </div>
      <PropertyDetail />
    </>
  );
}
