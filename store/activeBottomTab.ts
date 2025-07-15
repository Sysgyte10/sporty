import { create } from "zustand";

interface IActiveBottomTabProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const useActiveBottomTabStore = create<IActiveBottomTabProps>((set) => ({
  activeTab: "",
  setActiveTab: (activeTab) => set({ activeTab: activeTab }),
}));
