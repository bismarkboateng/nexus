import { PropertyType } from "@/app/(property)/types"

export type PropertyStoreType = {
    property: PropertyType[];
    addProperty: () => void;
}