import { create } from "zustand";

interface IActiveBottomTabProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  tabName: string;
  setTabName: (value: string) => void;
}

export const useActiveBottomTabStore = create<IActiveBottomTabProps>((set) => ({
  activeTab: "",
  setActiveTab: (activeTab) => set({ activeTab: activeTab }),
  tabName: "",
  setTabName: (tabName) => set({ tabName: tabName }),
}));
