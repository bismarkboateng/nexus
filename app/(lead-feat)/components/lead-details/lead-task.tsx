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
import PriorityCard from "@/components/ui/priority-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function LeadTask() {
  const note = leadNotes[0];
  const date = "Today, 12:00 PM";

  return (
    <div>
      <div className="flex w-full items-center justify-between mt-2">
        <div className="w-[30%]">
          <Filter title="All User" options={["All User", "James"]} />
        </div>
        <Button className="bg-blue-color hover:bg-blue-500 active:bg-blue-500">
          Create task
        </Button>
      </div>
      <section className="mt-5">
        <Text variant="p" className="font-semibold text-base">
          Upcoming task
        </Text>
        <LeadCard
          leftSide={
            <>
              <NotebookPen size={18} className="text-blue-500" />
              <Text className="text-gray-500 text-sm mr-auto" variant="p">
                Task created by {note.author}
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
              flex flex-row justify-between px-4"
          >
            <div className="">
              <Text className="text-gray-400 text-sm">Reminder</Text>
              <Text variant="p" className="text-sm">
                20 mins before
              </Text>
            </div>
            <div>
              <Text className="text-gray-400 text-sm">Task priority</Text>
              <PriorityCard level="Medium" />
            </div>
            <div>
              <Text className="text-gray-400 text-sm">Assigned to</Text>
              <div className="text-sm flex flex-row items-center gap-1">
                <Avatar className="w-4 h-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Text>James Osei</Text>
              </div>
            </div>
          </div>
        </LeadCard>
      </section>
    </div>
  );
}
