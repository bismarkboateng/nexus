import NoteCard from "@/components/composites/note-card";
import { Button } from "@/components/ui/button";
import Notes from "@/components/ui/notes";
import Text from "@/components/ui/text";

export default function LeadNotes() {
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
      <div className="mt-5">
        <Text variant="p" className="font-medium text-base">Note</Text>
        <NoteCard />
      </div>
    </div>
  );
}
