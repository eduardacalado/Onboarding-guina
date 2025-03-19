import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
};

type UserStoreProps = {
  id: string | null;
  name: string | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const defaultState: Omit<UserStoreProps, "setUser" | "clearUser"> = {
  id: null,
  name: null,
};

export const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      ...defaultState,
      setUser: set,
      clearUser: () => set(defaultState),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
