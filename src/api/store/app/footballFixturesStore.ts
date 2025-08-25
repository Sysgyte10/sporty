import { footballFixturesResponse } from "@src/api/types/app";
import { create } from "zustand";

interface IFootballFixturesProps {
  footballFixtures: footballFixturesResponse[] | undefined;
  setFootBallFixtures: (data: footballFixturesResponse[] | undefined) => void;
}

export const useFootballFixturesStore = create<IFootballFixturesProps>(
  (set) => ({
    footballFixtures: [],
    setFootBallFixtures: (footballFixtures) =>
      set({ footballFixtures: footballFixtures }),
  })
);
