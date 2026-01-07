import { create } from "zustand";

interface IGoToPredictions {
  goToPredictions: boolean;
  setGoToPredictions: (value: boolean) => void;
}

export const useGoToPredictions = create<IGoToPredictions>((set) => ({
  goToPredictions: false,
  setGoToPredictions: (goToPredictions) => set({ goToPredictions }),
}));
