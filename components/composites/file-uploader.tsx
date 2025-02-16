"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FileUp } from "lucide-react";
import Icon from "../ui/icon";

import Text from "../ui/text";
import UploadInstructions from "./upload-instructions";
import FilePreview from "./file-preview";

const acceptedFileTypes = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
};


export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    multiple: true,
  });

  const removeFile = (name: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
  };

  return (
    <>
      <section>
        <Text className="text-sm text-gray-500 mb-2">Preview Images: </Text>
        <ul className="flex items-center gap-2">
          {files.map((file) => (
            <FilePreview key={file.name} file={file} onRemove={removeFile} />
          ))}
        </ul>
      </section>
      <section
        {...getRootProps({
          className: `mt-3 border border-dashed rounded-md p-10 shadow-md flex flex-col items-center justify-center ${
            isDragActive ? "border-blue-200" : "border-blue-500"
          }`,
        })}
      >
        <Icon isBordered className="bg-blue-100">
          <FileUp className="text-blue-600" />
        </Icon>
        <UploadInstructions />
        <input type="hidden" {...getInputProps()} />
      </section>
    </>
  );
}