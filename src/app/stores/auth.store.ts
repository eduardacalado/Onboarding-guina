import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStoreProps = {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
};

const defaultState: Omit<AuthStoreProps, "setToken" | "clearToken"> = {
  token: "",
};

export const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      ...defaultState,
      setToken: set,
      clearToken: () => set(defaultState),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
