import { fixturesH2H } from "@src/api/types/types";
import {
  teamPlayersOrSquadDataType,
  topScorersDataType,
} from "@src/types/types";
import { create } from "zustand";

interface IOneMatchDataProps {
  competitionData: topScorersDataType[];
  setCompetitionData: (data: topScorersDataType[]) => void;
  oneMatchData: fixturesH2H[];
  setOneMatchData: (data: fixturesH2H[]) => void;
  playersData: teamPlayersOrSquadDataType[];
  setPlayersData: (data: teamPlayersOrSquadDataType[]) => void;
  selectedBtn: string;
  setSelectedBtn: (val: "Home" | "Away") => void;
  leagueTeams: topScorersDataType[];
  setLeagueTeams: (data: topScorersDataType[]) => void;
}

export const useOneMatchDataStore = create<IOneMatchDataProps>((set) => ({
  competitionData: [],
  setCompetitionData: (competitionData) => set({ competitionData }),
  oneMatchData: [],
  setOneMatchData: (oneMatchData) => set({ oneMatchData }),
  playersData: [],
  setPlayersData: (playersData) => set({ playersData }),
  selectedBtn: "Home",
  setSelectedBtn: (selectedBtn) => set({ selectedBtn }),
  leagueTeams: [],
  setLeagueTeams: (leagueTeams) => set({ leagueTeams }),
}));
