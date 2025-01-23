import { Button } from "@/components/ui/button";
import Notes from "@/components/ui/notes";
import Text from "@/components/ui/text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Calendar, NotebookPen } from "lucide-react";
import { leadNotes } from "@/app/(lead-feat)/data";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

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
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 p-2">
            <NotebookPen size={18} className="text-blue-500" />
            <Text className="text-gray-500 text-sm mr-auto" variant="p">
              Note by {note.author}
            </Text>
            <Calendar size={18} className="text-gray-500" />
            <Text className="text-gray-500 text-sm">{date}</Text>
          </CardHeader>
          <Separator className="bg-gray-200 w-full h-[0.5px]" />
          <CardContent className="pt-4 mt-1">
            <Text variant="h2" className="font-medium">
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
              className="w-full rounded-md mt-2 mb-3"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
