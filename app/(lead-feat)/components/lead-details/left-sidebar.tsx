import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Text from "@/components/ui/text";
import Actions from "../actions";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeadInfo from "./lead-info";
import AddressInfo from "./address-info";

export default function LeftSidebar() {
  const lead_name = "Jerome Bell";
  const company_name = "Google";
  const last_activity = "2 Jan 2020 at 09:00AM";

  return (
    <div className="border-r border-gray-200">
      <div className="flex flex-col items-center justify-center mt-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Text variant="h1" className="text-xl font-semibold">
          {lead_name}
        </Text>
        <Text className="text-gray-500">{company_name}</Text>
      </div>
      <Actions />
      <div className="flex items-center justify-center mt-4">
        <Button
          className="bg-blue-color text-white w-[80%] hover:bg-blue-500
       active:bg-blue-color"
        >
          Convert to contact
        </Button>
      </div>
      <Text variant="p" className="text-center mt-2 text-xs text-gray-500">
        * Last activity: {last_activity}
      </Text>

      <section className="mt-7">
        <Tabs defaultValue="leads info" className="w-full">
          <TabsList className="ml-3">
            <TabsTrigger value="leads info">Leads Info</TabsTrigger>
            <TabsTrigger value="address info">Address Info</TabsTrigger>
          </TabsList>
          <TabsContent value="leads info">
            <LeadInfo />
          </TabsContent>
          <TabsContent value="address info">
            <AddressInfo />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
