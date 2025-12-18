import { ImageSourcePropType } from "react-native";

// live score API data response
export type FootballLiveScoreApiResponse = {
  livescore: {
    updated: string;
    sport: string;
    league: footballLeague[];
  };
};

export type footballLeague = {
  country: string;
  name: string;
  cup: string;
  id: string;
  subId: string | null;
  match: {
    alternate_id: string;
    alternate_id_2: string;
    commentary: string;
    coveredlive: string;
    date: string;
    heatmap: string;
    id: string;
    inj_minute: string;
    inj_time: string;
    static_id: string;
    status: string;
    time: string;
    venue: string;
    home: {
      goals: string;
      id: string;
      name: string;
    };
    away: {
      goals: string;
      id: string;
      name: string;
    };
    events: null;
    ht: {
      score: string;
    };
  };
};

// upcoming schedule API data response
export type FootballUpcomingScheduleApiResponse = {
  fixtures: {
    updated: string;
    sport: string;
    country: string;
    league: fixtureLeague[];
  };
};

export type fixtureLeague = {
  country: string;
  name: string;
  id: string;
  subId: string | null;
  match: fixtureMatch[];
};

export type fixtureMatch = {
  alternateId: string | null;
  alternateId2: string | null;
  date: string;
  id: string;
  staticId: string | null;
  status: string;
  time: string;
  venue: string;
  home: {
    id: string;
    name: string;
  };
  away: {
    id: string;
    name: string;
  };
  tvStations: string | null;
};

// extended schedule API data response
export type ExtendedFixturesApiResponse = {
  extended_Fixtures: extendedFixtures;
};

export type extendedFixtures = {
  updated: string;
  sport: string;
  country: string;
  league: extendedLeague[];
};

export type extendedLeague = {
  name: string;
  season: string;
  id: string;
  sub_Id: string;
  week: week[];
};

export type week = {
  number: string;
  match: extendedMatch[];
};

export type extendedMatch = {
  alternate_Id: string;
  alternate_Id_2: string;
  attendance: string;
  date: string;
  id: string;
  static_Id: string;
  status: string;
  time: string;
  venue: string;
  venue_City: string;
  venue_Id: string;
  home: teamDetails;
  away: teamDetails;
  halftime: { score: string };
  lineups: any | null;
  substitutions: any | null;
  goals: any | null;
  coaches: coaches;
  referee: referee;
};

export type teamDetails = {
  et_Score: string;
  ft_Score: string;
  id: string;
  name: string;
  pen_Score: string;
  score: string;
  coach: coach | null;
};

export type coaches = {
  home: coachWrapper;
  away: coachWrapper;
};

export type coachWrapper = {
  et_Score: string | null;
  ft_Score: string | null;
  id: string | null;
  name: string | null;
  pen_Score: string | null;
  score: string | null;
  coach: coach;
};

export type coach = {
  id: string;
  name: string;
};

export type referee = {
  id: string;
  name: string;
};

// football standings API data response
export type StandingsApiResponse = {
  standings: standings;
};

export type standings = {
  country: string;
  updated: string;
  sport: string;
  league: standingLeague[];
};

export type standingLeague = {
  country: string;
  id: string;
  is_Current: string; // "True" | "False"
  name: string;
  season: string;
  sub_Id: string;
  team: standingTeam[];
};

export type standingTeam = {
  id: string;
  name: string;
  position: string;
  recent_Form: string; // e.g., "WWWWW"
  status: string; // e.g., "same"
  overall: stats;
  home: stats;
  away: stats;
  totals: totals;
  special: special | null;
};

export type stats = {
  draw: string;
  goals_Allowed: string;
  goals_Scored: string;
  lose: string;
  played: string;
  win: string;
  p?: string; // Only present in home/away
};

export type totals = {
  goal_Difference: string;
  points: string;
};

export type special = {
  name: string;
};

//scoring leaders API data response
export type ScorersApiResponse = {
  scorers: scorers;
};

export type scorers = {
  updated: string;
  sport: string;
  country: string;
  league: scorerLeague[];
};

export type scorerLeague = {
  country: string;
  name: string;
  id: string;
  sub_id: string;
  player: scorerPlayer[];
};

export type scorerPlayer = {
  goals: string;
  id: string;
  name: string;
  penalty_goals: string;
  pos: string; // Position in ranking, e.g., "1"
  team: string;
  team_id: string;
};

//football injuries API data response
export type InjuriesSuspensionsApiResponse = {
  injuries_suspensions: injuriesSuspensions;
};

export type injuriesSuspensions = {
  updated: string;
  sport: string;
  league: injuryLeague[];
};

export type injuryLeague = {
  name: string;
  id: string;
  sub_id: string;
  match: injuryMatch[];
};

export type injuryMatch = {
  alternate_id: string;
  alternate_id_2: string;
  date: string;
  id: string;
  static_id: string;
  status: string;
  time: string;
  home: teamInjury;
  away: teamInjury;
};

export type teamInjury = {
  goals: string;
  id: string;
  name: string;
  sidelined: sidelined;
};

export type sidelined = {
  to_miss: string | null;
  questionable: string | null;
};

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
