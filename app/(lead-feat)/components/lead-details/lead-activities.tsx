import Filter from "@/components/composites/filter";
import Text from "@/components/ui/text";
import { Calendar, NotebookPen, Ellipsis, CircleCheckBig, Trash2 } from "lucide-react";
import { leadNotes } from "../../data";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LeadCard from "./lead-card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import PriorityCard from "@/components/ui/priority-card";

export default function LeadActivities() {
  const options1 = ["option1", "option2", "option3"];
  const options2 = ["option4", "option5", "option6"];

  const note = leadNotes[0];
  const date = "Today, 12:00 PM";

  return (
    <section>
      <div className="flex items-center gap-3 mt-4">
        <Filter options={options1} title="Filter activity 21/25" />
        <Filter options={options2} title="All user" />
      </div>
      <section className="mt-5">
        <Text variant="p" className="font-semibold text-base mb-1">
          Upcoming Activity
        </Text>
        <LeadCard
          leftSide={
            <div className="flex items-center gap-2">
              <NotebookPen size={18} className="text-blue-500" />
              <Text
                className="text-gray-500 text-sm mr-auto flex gap-2"
                variant="p"
              >
                Task created {note.author}
              </Text>
            </div>
          }
          rightSide={
            <>
              <div className="flex items-center gap-2">
                <Text className="text-gray-300 text-sm" variant="span">
                  Due:
                </Text>
                <Calendar size={18} className="text-gray-500" />
                <Text className="text-gray-500 text-sm">{date}</Text>
                <Menubar className="border-none">
                  <MenubarMenu>
                    <MenubarTrigger className="">
                      <Ellipsis className="text-gray-500 text-sm cursor-pointer" />
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem className="cursor-pointer">
                        Mark as done
                        <CircleCheckBig className="w-4 h-4 text-green-500 ml-auto" />
                      </MenubarItem>
                      <MenubarItem>
                        Remove
                        <Trash2 className="w-4 h-4 text-red-500 ml-auto" />
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
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
            className="w-full border border-gray-300 mt-3 rounded-sm p-3
              flex flex-row justify-between px-4"
          >
            <div>
              <Text className="text-gray-400 text-sm">Reminder</Text>
              <Text variant="p">No reminder</Text>
            </div>
            <div>
              <Text className="text-gray-400 text-sm">Task Priority</Text>
              <PriorityCard level="Low" />
            </div>
            <div>
              <Text className="text-gray-400 text-sm">Assigned to</Text>
              <div className="flex items-center gap-1 mt-1">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Text className="text-sm">Owusua Joshua</Text>
              </div>
            </div>
          </div>
        </LeadCard>
      </section>
    </section>
  );
}