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

export type getFootballLeagueLiveScoreResp = {
  event_key: number;
  event_date: string;
  event_time: string;
  event_home_team: string;
  home_team_key: number;
  event_away_team: string;
  away_team_key: number;
  event_halftime_result: string;
  event_final_result: string;
  event_ft_result: string;
  event_penalty_result: string;
  event_status: string;
  country_name: string;
  league_name: string;
  league_key: number;
  league_round: string;
  league_season: string;
  event_live: string;
  event_stadium: string;
  event_referee: string;
  home_team_logo: string;
  away_team_logo: string;
  event_country_key: number;
  league_logo: string;
  country_logo: string;
  event_home_formation: string;
  event_away_formation: string;
  fk_stage_key: number;
  stage_name: string;
  league_group: string | null;

  goalscorers: {
    time: string;
    home_scorer: string;
    home_scorer_id: string;
    home_assist: string;
    home_assist_id: string;
    score: string;
    away_scorer: string;
    away_scorer_id: string;
    away_assist: string;
    away_assist_id: string;
    info: string;
    info_time: string;
  }[];

  substitutes: {
    time: string;
    home_scorer:
      | []
      | {
          in: string;
          out: string;
          in_id: number;
          out_id: number;
        };
    home_assist: string;
    score: string;
    away_scorer:
      | []
      | {
          in: string;
          out: string;
          in_id: number;
          out_id: number;
        };
    away_assist: string;
    info: string;
    info_time: string;
  }[];

  cards: {
    time: string;
    home_fault: string;
    card: string;
    away_fault: string;
    info: string;
    home_player_id: string;
    away_player_id: string;
    info_time: string;
  }[];

  vars: {
    home_team: any[];
    away_team: any[];
  };

  lineups: {
    home_team: {
      starting_lineups: {
        player: string | null;
        player_number: number | null;
        player_position: number;
        player_country: string | null;
        player_key: string | null;
        info_time: string;
      }[];
      substitutes: any[];
      coaches: {
        coache: string;
        coache_country: string | null;
      }[];
      missing_players: any[];
    };

    away_team: {
      starting_lineups: {
        player: string | null;
        player_number: number | null;
        player_position: number;
        player_country: string | null;
        player_key: string | null;
        info_time: string;
      }[];
      substitutes: any[];
      coaches: {
        coache: string;
        coache_country: string | null;
      }[];
      missing_players: any[];
    };
  };

  statistics: {
    type: string;
    home: string;
    away: string;
  }[];
};

export type getFootballCompareHeadToHeadResp = {
  event_key: number;
  event_date: string;
  event_time: string;
  event_home_team: string;
  home_team_key: number;
  event_away_team: string;
  away_team_key: number;
  home_team_logo: string;
  away_team_logo: string;
  event_halftime_result: string;
  event_final_result: string;
  event_status: string;
  country_name: string;
  league_name: string;
  league_key: number;
  league_round: string;
  league_season: string;
  event_live: string;
  event_country_key: number;
};

export type OddsItem = {
  match_Id: number;
  odd_Bookmakers: string;

  odd_1: number | null;
  odd_X: number | null;
  odd_2: number | null;
  odd_1X: number | null;
  odd_12: number | null;
  odd_X2: number | null;

  ah_Minus_4_5_1: number | null;
  ah_Minus_4_5_2: number | null;
  ah_Minus_4_1: number | null;
  ah_Minus_4_2: number | null;
  ah_Minus_3_5_1: number | null;
  ah_Minus_3_5_2: number | null;
  ah_Minus_3_1: number | null;
  ah_Minus_3_2: number | null;
  ah_Minus_2_5_1: number | null;
  ah_Minus_2_5_2: number | null;
  ah_Minus_2_1: number | null;
  ah_Minus_2_2: number | null;
  ah_Minus_1_5_1: number | null;
  ah_Minus_1_5_2: number | null;
  ah_Minus_1_1: number | null;
  ah_Minus_1_2: number | null;

  ah0_1: number | null;
  ah0_2: number | null;

  ah_Plus_0_5_1: number | null;
  ah_Plus_1_1: number | null;
  ah_Plus_1_2: number | null;
  ah_Plus_1_5_1: number | null;
  ah_Plus_1_5_2: number | null;
  ah_Plus_2_1: number | null;
  ah_Plus_2_2: number | null;
  ah_Plus_2_5_1: number | null;
  ah_Plus_2_5_2: number | null;
  ah_Plus_3_1: number | null;
  ah_Plus_3_2: number | null;
  ah_Plus_3_5_1: number | null;
  ah_Plus_3_5_2: number | null;
  ah_Plus_4_1: number | null;
  ah_Plus_4_2: number | null;
  ah_Plus_4_5_1: number | null;
  ah_Plus_4_5_2: number | null;

  o_Plus_0_5: number | null;
  u_Plus_0_5: number | null;
  o_Plus_1: number | null;
  u_Plus_1: number | null;
  o_Plus_1_5: number | null;
  u_Plus_1_5: number | null;
  o_Plus_2: number | null;
  u_Plus_2: number | null;
  o_Plus_2_5: number | null;
  u_Plus_2_5: number | null;
  o_Plus_3: number | null;
  u_Plus_3: number | null;
  o_Plus_3_5: number | null;
  u_Plus_3_5: number | null;
  o_Plus_4: number | null;
  u_Plus_4: number | null;
  o_Plus_4_5: number | null;
  u_Plus_4_5: number | null;
  o_Plus_5: number | null;
  u_Plus_5: number | null;
  o_Plus_5_5: number | null;
  u_Plus_5_5: number | null;

  bts_Yes: number | null;
  bts_No: number | null;
};

export type getFootballOddsResp = {
  [matchId: string]: OddsItem[];
};

export type getFootballLeagueOddsLiveResp = {
  odd_name: string;
  is_odd_suspended: "Yes" | "No";
  odd_type: string;
  odd_value: string; // comes as string from API
  odd_participant_handicap: string | null;
  odd_last_updated: string; // timestamp string
  match_id: number;
};

export type getFootballOddsLiveResult = Record<
  string,
  getFootballLeagueOddsLiveResp[]
>;

export type ApiResponse<T> = {
  success: boolean;
  message: string | null;
  data: T | null;
};

export type UserResponse = {
  id: number;
  emailConfirmed: boolean;
  country: string | null;
  accountType: "User" | string;
  lastLogin: string; // ISO datetime string
  isDeleted: boolean;
  homeAddress: string | null;
  accountStatus: "active" | string;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  countryOfResidence: string | null;
  isDisable: boolean;
  code: string;
} | null;

export type loginResponse = {
  userId: number;

  token: {
    token: string;
    expireFrom: string; // ISO datetime string
    expireTo: string; // ISO datetime string
    expireTimeTo: string; // time-only string
    is2FAEnabled: boolean;
    twoFactorToken: string | null;
  };

  id: number;
  emailConfirmed: boolean;
  country: string | null;
  accountType: "User" | string;
  lastLogin: string; // ISO datetime string
  isDeleted: boolean;
  homeAddress: string | null;
  accountStatus: "active" | string;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  countryOfResidence: string | null;
  isDisable: boolean;
  code: string;
} | null;

export type registerUserTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type loginUserTypes = {
  email: string;
  password: string;
};
