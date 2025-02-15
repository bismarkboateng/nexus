import { create } from "zustand"
import { PropertyStoreType } from "../types/property-types"
import Properties from "@/db/index.json"


export const usePropertySlice = create<PropertyStoreType>(() => ({
    property: Properties,
    addProperty: () => ({})
}))