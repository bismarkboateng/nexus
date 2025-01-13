import Text from "@/components/ui/text";
import { leads } from "../../data";

export default function LeadInfo() {
  const lead = leads[0];
  const lead_owner = "Owusu Adei";

  const headStyles = "text-gray-400 text-sm"
  const contentStyle = "text-gray-600 font-normal text-base mb-2"

  return (
    <section className="overflow-y-scroll pl-6 mt-2 flex flex-col gap-2">
      <Text className={headStyles}>Email</Text>
      <Text className={contentStyle}>{lead.email}</Text>
      <Text className={headStyles}>Phone</Text>
      <Text className={contentStyle}>{lead.phone}</Text>
      <Text className={headStyles}>Lead owner</Text>
      <Text className={contentStyle}>{lead_owner}</Text>
      <Text className={headStyles}>Job Title</Text>
      <Text className={contentStyle}>{lead.jobTitle}</Text>
      <Text className={headStyles}>Lead Status</Text>
      <Text className={contentStyle}>{lead.leadStatus}</Text>
      <Text className={headStyles}>Lead Stage</Text>
      <Text className={contentStyle}>{lead.leadStage}</Text>
      <Text className={headStyles}>Lead Priority</Text>
      <Text className={contentStyle}>{lead.leadPriority}</Text>
      <Text className={headStyles}>Industry</Text>
      <Text className={contentStyle}>{lead.industry}</Text>
      <Text className={headStyles}>Company size</Text>
      <Text className={contentStyle}>{lead.companySize}</Text>
      <Text className={headStyles}>Lead Score</Text>
      <Text className={contentStyle}>{lead.leadScore}</Text>
      <Text className={headStyles}>Assigned Rep</Text>
      <Text className={contentStyle}>{lead.assignedRep}</Text>
      <Text className={headStyles}>Date Created</Text>
      <Text className={contentStyle}>{lead.createdDate}</Text>
      <Text className={headStyles}>Last Activity Date</Text>
      <Text className={contentStyle}>{lead.lastActivityDate}</Text>
      <Text className={headStyles}>Next Step</Text>
      <Text className={contentStyle}>{lead.nextAction}</Text>
      <Text className={headStyles}>Deal Size</Text>
      <Text className={contentStyle}>{lead.dealSize}</Text>
      <Text className={headStyles}>Expected Close Date</Text>
      <Text className={contentStyle}>{lead.expectedCloseDate}</Text>
    </section>
  );
}
