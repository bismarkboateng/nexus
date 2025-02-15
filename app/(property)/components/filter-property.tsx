"use client";

import {
  Select, SelectContent,
  SelectItem, SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterProperty() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[30%]">
          <SelectValue placeholder="Filter By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Last_Added">Last Added</SelectItem>
          <SelectItem value="Price_Low_to_High">Price: Low to High</SelectItem>
          <SelectItem value="Price_High_to_Low">Price: High to Low</SelectItem>
          <SelectItem value="Property_Type">Property Type</SelectItem>
          <SelectItem value="Location">Location</SelectItem>
          <SelectItem value="Bedrooms">Number of Bedrooms</SelectItem>
          <SelectItem value="Bathrooms">Number of Bathrooms</SelectItem>
          <SelectItem value="Status">Property Status</SelectItem>
          <SelectItem value="Amenities">Amenities</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
