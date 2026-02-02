import {
  footballCountries,
  liveCurrentFixtureLeagues,
  liveFixtureOfLeaguesByCountry,
  liveFixtures,
  liveFixturesById,
  liveFixturesByLeagueAndSeason,
  liveFixturesByRounds,
  liveFixturesLeaguesBySeason,
  liveFixturesOfLeaguesById,
  liveFixturesOfLeaguesByName,
  liveFixturesRoundsDatesByLeagueAndSeason,
  searchLiveFixtureLeagues,
} from "./types";

export type GetFootballCountryResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: footballCountries[];
};

export type GetFootballCountryByNameResponse = {
  get: string;
  parameters: {
    name: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: footballCountries[];
};

export type GetLiveFixturesResponse = {
  get: string;
  parameters: {
    live: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: 1;
    total: 1;
  };
  response: liveFixtures[];
};

export type GetLiveFixtureByIdResponse = {
  get: string;
  parameters: {
    ids: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesById[];
};

export type GetLiveFixturesBySeasonAndLeagueResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesByLeagueAndSeason[];
};

export type GetLiveFixturesByRoundsResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesByRounds[];
};

export type GetLiveFixturesRoundsDatesByLeagueAndSeasonResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesRoundsDatesByLeagueAndSeason[];
};

export type GetLiveFixtureOfLeaguesByIdResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesOfLeaguesById[];
};

export type GetLiveFixtureOfLeaguesByNameResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesOfLeaguesByName[];
};

export type GetLiveFixturesOfLeaguesByCountryResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixtureOfLeaguesByCountry[];
};

export type GetLiveFixturesLeaguesBySeasonResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesLeaguesBySeason[];
};

export type SearchLiveFixturesResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: searchLiveFixtureLeagues[];
};

export type GetLiveCurrentFixturesLeaguesResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
    dates: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveCurrentFixtureLeagues[];
};
