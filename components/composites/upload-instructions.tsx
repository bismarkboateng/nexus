import Text from "../ui/text";

export default function UploadInstructions() {
  return (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-1">
      <Text className="text-blue-500">Click here</Text>
      <Text className="text-sm text-gray-500">to upload property image(s)</Text>
    </div>
    <Text className="text-sm text-gray-500">Supported Format: JPG, PNG</Text>
  </div>
  )
}