import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAccountCreatedStore {
  hasCreatedAccount: boolean;
  setHasCreatedAccount: (value: boolean) => void;
  resetHasCreatedAccount: () => void;
}

export const useAccountCreatedStore = create<IAccountCreatedStore>()(
  persist(
    (set) => ({
      hasCreatedAccount: false,

      setHasCreatedAccount: (hasCreatedAccount) => set({ hasCreatedAccount }),

      resetHasCreatedAccount: () => set({ hasCreatedAccount: false }),
    }),
    {
      name: "account-created-storage", // storage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
