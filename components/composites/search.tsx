import { Search as SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

export default function Search() {
  return (
    <div className="border border-[#ccc] px-2 flex items-center gap-2
    rounded-md">
      <SearchIcon
       className="text-gray-500" size={20}
       aria-placeholder="search icon"
      />
      <Input
        className="outline-none border-none shad-input
         focus-visible:ring-0 focus-visible:ring-offset-0
         placeholder:text-sm placeholder:text-gray-500"
        placeholder="Search activity, notes, email and more"
      />
    </div>
  );
}
