import LeftSidebar from "./left-sidebar";
import LeadContent from "./lead-content";
import RightSidebar from "./right-sidebar";

export default function LeadDetail() {

  return (
    <main className="mt-7 grid grid-cols-[25%_50%_25%] gap-2 h-full">
      <LeftSidebar />
      <LeadContent />
      <RightSidebar />
    </main>
  );
}
