import React from "react";
import Text from "./text";

type PriorityLevel = "High" | "Medium" | "Low";

type PriorityCardProps = {
  level: PriorityLevel;
};

const priorityColors: Record<PriorityLevel, string> = {
  High: "bg-[#FF0000]",
  Medium: "bg-[#FFFF00]",
  Low: "bg-[#008000]",
};

export default function PriorityCard({ level }: PriorityCardProps) {
  const color = priorityColors[level];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${color}`} />
      <Text variant="div">{level}</Text>
    </div>
  );
}
