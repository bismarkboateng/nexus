import { create } from "zustand";
import { usePropertySlice } from "./slices/property-slice";

export const useBoundStore = create(() => ({
  ...usePropertySlice.getState()
}));
