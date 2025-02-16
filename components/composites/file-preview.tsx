"use client";

import { CircleX } from "lucide-react";
import Image from "next/image";

export default function FilePreview({
  file,
  onRemove,
}: {
  file: File;
  onRemove: (name: string) => void;
}) {
  return (
    <li className="relative rounded-full shadow-lg">
      <Image
        src={file.preview}
        alt="preview uploaded property image"
        className="rounded-full"
        width={100}
        height={100}
        onLoad={() => URL.revokeObjectURL(file.preview)}
      />
      <div className="absolute top-0 right-0">
        <CircleX
          onClick={() => onRemove(file.name)}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </li>
  );
}
