import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Text from '@/components/ui/text';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

interface ActivityCardProps {
  headerLeftIcon: React.ReactNode;
  headerRightIcon: React.ReactNode;
  authorText: string;
  dateText: string; // Text showing the date
  contentTitle: string; // Title of the content
  contentDescription: string; // Description of the content
  contentThumbnailUrl: string; // URL of the thumbnail image
}


export default function ActivityCard({
    headerLeftIcon,
    headerRightIcon,
    authorText,
    dateText,
    contentTitle,
    contentDescription,
    contentThumbnailUrl,
}: ActivityCardProps) {

    return (
        <Card className="card">
      <CardHeader className="flex flex-row items-center gap-2 p-2">
        {headerLeftIcon}
        <Text className="text-gray-500 text-sm mr-auto" variant="p">
          {authorText}
        </Text>
        {headerRightIcon}
        <Text className="text-gray-500 text-sm">{dateText}</Text>
      </CardHeader>
      <Separator className="bg-gray-200 w-full h-[0.5px]" />
      <CardContent className="pt-4 mt-1">
        <Text variant="h2" className="font-medium">
          {contentTitle}
        </Text>
        <Text variant="p" className="text-gray-500 text-sm mt-1">
          {contentDescription}
        </Text>
        <Image
          src={contentThumbnailUrl}
          alt="thumbnail source"
          width={300}
          height={200}
          className="w-full rounded-md mt-2 mb-3"
          />
      </CardContent>
    </Card>
  );

}