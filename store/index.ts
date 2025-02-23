import { create } from "zustand";
import { useAuthSlice, usePropertySlice, useUserSlice } from "./slices";

export const useBoundStore = create(() => ({
  ...useAuthSlice.getState(),
  ...usePropertySlice.getState(),
  ...useUserSlice.getState()
}));
