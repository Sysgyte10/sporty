import { footballLeaguesResponse } from "@src/api/types/app";
import { create } from "zustand";

interface IFootballLeaguesResponse {
  footballLeagues: footballLeaguesResponse[] | undefined;
  setFootBallLeagues: (data: footballLeaguesResponse[] | undefined) => void;
}

export const useFootballLeaguesStore = create<IFootballLeaguesResponse>(
  (set) => ({
    footballLeagues: [],
    setFootBallLeagues: (footballLeagues) =>
      set({ footballLeagues: footballLeagues }),
  })
);
