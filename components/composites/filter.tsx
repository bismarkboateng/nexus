"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type FilterProps = {
  options: string[];
  title: React.ReactNode;
};

export default function Filter({ options, title }: FilterProps) {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, index) => (
          <SelectItem value={item} key={`${item}-${index}`}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
