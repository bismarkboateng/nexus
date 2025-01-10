import { Button } from "@/components/ui/button"
import { leadStages } from "../../data"

export default function LeadStage() {

  return (
    <div className={`w-full flex items-center gap-4 mt-2`}>
     {leadStages.map((stage) => (
      <Button key={stage} className="px-7 bg-green-500 font-normal
      hover:bg-green-400 active:bg-green-500">
        {stage}
      </Button>
     ))}
    </div>
  )
}
