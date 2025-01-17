import Search from "@/components/composites/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeadActivities from "./lead-activities";
import LeadNotes from "./lead-notes";

import LeadEmails from "./lead-emails";
import LeadCalls from "./lead-calls";
import LeadTask from "./lead-task";
import LeadMeetings from "./lead-meetings";


export default function LeadContent() {
  return (
    <div className="border-r border-gray-200 w-full px-3">
      <Search />
      <Tabs defaultValue="account" className="w-full mt-5">
        <TabsList className="border bg-gray-200 w-full">
          <TabsTrigger value="Activity">Activity</TabsTrigger>
          <TabsTrigger value="Notes">Notes</TabsTrigger>
          <TabsTrigger value="Emails">Emails</TabsTrigger>
          <TabsTrigger value="Calls">Calls</TabsTrigger>
          <TabsTrigger value="Task">Task</TabsTrigger>
          <TabsTrigger value="Meetings">Meetings</TabsTrigger>
        </TabsList>
        <TabsContent value="Activity">
          <LeadActivities />
        </TabsContent>
        <TabsContent value="Notes">
          <LeadNotes />
        </TabsContent>
        <TabsContent value="Emails">
          <LeadEmails />
        </TabsContent>
        <TabsContent value="Calls">
          <LeadCalls />
        </TabsContent>
        <TabsContent value="Task">
          <LeadTask />
        </TabsContent>
        <TabsContent value="Meetings">
          <LeadMeetings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
