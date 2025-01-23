"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterProps = {
  options: string[];
};

export default function Filter({ options }: FilterProps) {
  const title = "Filter activity 21/25";

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
