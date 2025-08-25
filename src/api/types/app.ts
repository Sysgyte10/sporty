export type footballMarketResponse = {
  id: number;
  legacy_id: number;
  name: string;
  developer_name: string;
  has_winning_calculations: boolean;
};

export type footballFixturesResponse = {
  id: number;
  sport_Id: number;
  league_Id: number;
  season_Id: number;
  stage_Id: number;
  group_Id: any | null;
  aggregate_Id: any | null;
  round_Id: number;
  state_Id: number;
  venue_Id: number;
  name: string;
  starting_At: string;
  result_Info: string;
  leg: string;
  details: any | null;
  length: number;
  placeholder: boolean;
  has_Odds: boolean;
  has_Premium_Odds: boolean;
  starting_At_Timestamp: number;
};

export type footballMatchesResponse = {
  title: string;
  competition: string;
  matchviewUrl: string;
  competitionUrl: string;
  thumbnail: string;
  date: string;
  videos: {
    id: string;
    title: string;
    embed: string;
  }[];
};

export type footballLeaguesResponse = {
  id: number;
  sport_id: number;
  country_id: number;
  name: string;
  active: boolean;
  short_code: string;
  image_path: string;
  type: string;
  sub_type: string;
  last_played_at: string;
  category: 2;
  has_jerseys: boolean;
};
