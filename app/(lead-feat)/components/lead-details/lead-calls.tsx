import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { Calendar, Ellipsis, NotebookPen } from "lucide-react";
import { leadNotes } from "@/app/(lead-feat)/data";

import LeadCard from "./lead-card";
import Filter from "@/components/composites/filter";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function LeadCalls() {
  const note = leadNotes[0];
  const date = "Today, 12:00 PM";

  return (
    <div>
      <div className="flex w-full items-center justify-between mt-2">
        <div className="w-[30%]">
          <Filter title="All User" options={["All User", "James"]} />
        </div>
        <Button className="bg-blue-color hover:bg-blue-500 active:bg-blue-500">
          Create call
        </Button>
      </div>
      <section className="mt-5">
        <Text variant="p" className="font-semibold text-base">
          Call schedule
        </Text>
        <LeadCard
          leftSide={
            <>
              <NotebookPen size={18} className="text-blue-500" />
              <Text className="text-gray-500 text-sm mr-auto" variant="p">
                Note by {note.author}
              </Text>
            </>
          }
          rightSide={
            <>
              <Calendar size={18} className="text-gray-500" />
              <Text className="text-gray-500 text-sm">{date}</Text>
              <Menubar className="border-none">
                <MenubarMenu>
                  <MenubarTrigger className="">
                    <Ellipsis className="text-gray-500 text-sm cursor-pointer" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="cursor-pointer">
                      option 1
                    </MenubarItem>
                    <MenubarItem>option 2</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </>
          }
        >
          <Text variant="div" className="font-medium">
            {note.title}
          </Text>
          <Text variant="p" className="text-gray-500 text-sm mt-1">
            {note.description}
          </Text>
          <div
            className="mt-3 border border-gray-300 rounded-sm p-3
              flex flex-row px-4"
          >
            <div className="mr-10">
              <Text className="text-gray-400 text-sm">Reminder</Text>
              <Text variant="p" className="text-sm">20 mins before</Text>
            </div>
            <div>
              <Text className="text-gray-400 text-sm">Call Purpose</Text>
              <Text className="text-sm">Negotiation</Text>
            </div>
          </div>
        </LeadCard>
      </section>
    </div>
  );
}
