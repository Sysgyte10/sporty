import { footballMatchesResponse } from "@src/api/types/app";
import { create } from "zustand";

interface IFootballMatchesProps {
  footballMatches: footballMatchesResponse[] | undefined;
  setFootBallMatches: (data: footballMatchesResponse[] | undefined) => void;
}

export const useFootballMatchesStore = create<IFootballMatchesProps>((set) => ({
  footballMatches: [],
  setFootBallMatches: (footballMatches) =>
    set({ footballMatches: footballMatches }),
}));
