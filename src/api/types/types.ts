import { ImageSourcePropType } from "react-native";

export type getFootBallCountriesResp = {
  country_Key: number;
  country_Name: string;
  country_Iso2: string;
  country_Logo: string;
};

export type getFootballLeaguesResp = {
  league_key: number;
  league_name: string;
  country_key: number;
  country_name: string;
  league_logo: string;
  country_logo: string;
};

export type getFootballLeagueTopScorerResp = {
  player_place: number;
  player_name: string;
  player_key: number;
  team_name: string;
  team_key: number;
  goals: number;
  assists: null;
  penalty_goals: null;
};

export type getFootballLeagueStandingResp = {
  standing_Place: number;
  standing_Place_Type: string;
  standing_Team: string;
  standing_P: number;
  standing_W: number;
  standing_D: number;
  standing_L: number;
  standing_F: number;
  standing_A: number;
  standing_GD: number;
  standing_PTS: number;
  team_Key: number;
  league_Key: number;
  league_Season: string;
  league_Round: string;
  standing_Updated: string;
  fk_Stage_Key: number;
  stage_Name: string;
  team_Logo: string;
  standing_LP: number;
  standing_WP: number;
};
