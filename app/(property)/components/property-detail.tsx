"use client";

import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import LightHouse from "@/components/widgets/light-house/light-house";
import LocationIcon from "@/public/assets/icons/location";

import { useBoundStore } from "@/store";
import { Separator } from "@/components/ui/separator";
import { BedSingle, Bath, ChartArea, SquareParking } from "lucide-react";
import PropertyFeature from "./property-feature";

import { Plus } from "lucide-react";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AddProperty from "./add-property";

export default function PropertyDetail() {
  const properties = useBoundStore((state) => state.property);
  const property = properties[0];

  return (
    <section className="col-span-3 mt-5">
      <div className="flex items-center justify-end mb-3">
        <Sheet>
          <SheetTrigger>
            <Icon className="bg-gradient-to-r from-[#56e1f3] to-[#3301a7] hover:bg-[#3301a7]">
              <Plus className="text-white" />
            </Icon>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[700px] max-h-[700px]
          overflow-y-scroll">
            <AddProperty />
          </SheetContent>
        </Sheet>
      </div>
      <LightHouse />
      <div className="mt-7 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Text className="font-semibold text-base">{property.title}</Text>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <LocationIcon />
            <Text>{property.address.postal_code}</Text>,
            <Text>{property.address.city}</Text>,
            <Text>{property.address.country}</Text>
          </div>
        </div>
        <Button variant="outline" className="rounded-full">
          View video
        </Button>
      </div>
      <Separator className="my-3" />
      <div className="grid grid-cols-4 mt-4">
        <PropertyFeature title="Bedroom" value={property.no_of_bedrooms}>
          <BedSingle className="text-gray-500" />
        </PropertyFeature>
        <PropertyFeature title="Bathroom" value={property.no_of_bathrooms}>
          <Bath className="text-gray-500" />
        </PropertyFeature>
        <PropertyFeature title="Area (m²)" value={property.sq_foot}>
          <ChartArea className="text-gray-500" />
        </PropertyFeature>
        <PropertyFeature title="Parking" value={property.parking}>
          <SquareParking className="text-gray-500" />
        </PropertyFeature>
      </div>
      <div className="mt-5">
        <Text className="font-bold">Property details</Text>
        <Text className="mt-1 text-gray-500 text-sm">
          {property.property_details}
        </Text>
      </div>
    </section>
  );
}
