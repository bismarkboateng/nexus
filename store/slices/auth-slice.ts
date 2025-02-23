import { create } from "zustand";
import { AuthSliceType } from "../types/auth-types";

export const useAuthSlice = create<AuthSliceType>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
}));
