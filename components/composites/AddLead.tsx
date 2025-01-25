"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LeadForm from "./LeadForm";

function Addlead() {
 
  return (
    <SheetContent className="sm:max-w-[700px] max-h-[700px] overflow-y-scroll">
      <SheetHeader>
        <SheetTitle>Add Lead</SheetTitle>
        <SheetDescription>
          Enter the details for the new lead and click "Save" when done.
        </SheetDescription>
      </SheetHeader>

      <LeadForm />
      
    </SheetContent>
  );
}

export default Addlead;