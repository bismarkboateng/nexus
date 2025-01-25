import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { Calendar, Ellipsis, NotebookPen } from "lucide-react";
import { leadNotes } from "@/app/(lead-feat)/data";

import LeadCard from "./lead-card";
import Filter from "@/components/composites/filter";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export default function LeadEmails() {
  const note = leadNotes[0];
  const date = "Today, 12:00 PM";

  return (
    <div>
      <div className="flex w-full items-center justify-between mt-2">
        <div className="w-[30%]">
          <Filter title="All User" options={["All User", "James"]} />
        </div>
        <Button className="bg-blue-color hover:bg-blue-500 active:bg-blue-500">
          Create email
        </Button>
      </div>
      <section className="mt-5">
        <Text variant="p" className="font-semibold text-base">
          12 December 2024
        </Text>
        <LeadCard
          leftSide={
            <>
              <NotebookPen size={18} className="text-blue-500" />
              <Text className="text-gray-500 text-sm mr-auto" variant="p">
                Thank you for connecting
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
          <>
            <div className="flex flex-row items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <Text>Darlene Robertoson</Text>
                <Text className="text-gray-300 text-sm">to: Jerome Bell</Text>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              I hope this message finds you well. As previously discussed, I
              have successfully connected "hello +1..." to the email address you
              provided. From now on, any new emails sent to this address will be
              processed accordingly.
              
              If you need any further assistance or have
              specific requirements, feel free to let me know, and I'll be happy
              to help. Looking forward to hearing from you!
            </div>
          </>
        </LeadCard>
      </section>
    </div>
  );
}
