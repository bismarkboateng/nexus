import { Button } from "@/components/ui/button";
import Notes from "@/components/ui/notes";
import Text from "@/components/ui/text";

import { Calendar, Ellipsis, NotebookPen } from "lucide-react";
import { leadNotes } from "@/app/(lead-feat)/data";
import Image from "next/image";
import LeadCard from "./lead-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function LeadNotes() {
  const note = leadNotes[0];
  const date = "Today, 12:00 PM";

  return (
    <div>
      <div>
        <Text variant="p" className="mt-5 font-medium text-base">
          Add new note
        </Text>
        <Notes />
        <div className="flex items-left justify-end mt-2">
          <Button className="bg-blue-color cursor-pointer hover:bg-blue-500 active:bg-blue-color">
            Add note
          </Button>
        </div>
      </div>
      <section className="mt-5">
        <Text variant="p" className="font-semibold text-base">
          Note
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
                    <MenubarItem className="cursor-pointer">
                      option 2
                    </MenubarItem>
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
          <Image
            src={note.thumbnailUrl}
            alt="thumbnail source"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover rounded-md mt-2 mb-3"
          />
        </LeadCard>
      </section>
    </div>
  );
}
