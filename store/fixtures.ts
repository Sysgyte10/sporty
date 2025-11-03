import { fixtureDataType } from "@src/types/types";
import { create } from "zustand";

interface IFixturesStoreProps {
  fixtures: fixtureDataType[];
  setFixtures: (data: fixtureDataType[]) => void;
}

export const useFixturesStore = create<IFixturesStoreProps>((set) => ({
  fixtures: [],
  setFixtures: (fixtures) => set({ fixtures: fixtures }),
}));
