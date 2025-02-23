import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UserSliceType } from "../types/user-types";

export const useUserSlice = create(
  persist<UserSliceType>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
