import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ActivityCardProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  children: React.ReactNode;
}

export default function LeadCard({
  leftSide,
  rightSide,
  children,
}: ActivityCardProps) {
  return (
    <Card className="card">
      <CardHeader className="flex flex-row items-center justify-between gap-2 p-2">
       {leftSide}
       {rightSide}
      </CardHeader>
      <Separator className="bg-gray-200 w-full h-[0.5px]" />
      <CardContent className="p-3">
        {children}
      </CardContent>
    </Card>
  );
}
