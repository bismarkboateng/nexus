import { FileUp } from "lucide-react"
import Icon from "../ui/icon"
import Text from "../ui/text"

export default function FileUploader() {
  return (
    <section className="mt-3 border border-dashed rounded-md p-10
    shadow-md flex flex-col items-center justify-center">
     <Icon isBordered className="bg-blue-100">
      <FileUp className="text-blue-600" />
     </Icon>
     <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-1">
       <Text className="text-blue-500">Click here</Text>
       <Text className="text-sm text-gray-500">to upload property image(s)</Text>
      </div>
      <Text className="text-sm text-gray-500">Supported Format: JPG, PNG</Text>
     </div>
    </section>
  )
}
