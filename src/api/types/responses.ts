import {
  basketballCountries,
  basketballGames,
  basketballLeagues,
  basketballSeasons,
  basketballStandings,
  basketballStandingsGroups,
  basketballStatistics,
  basketballTeamsById,
  basketballTimeZones,
  fixturesH2H,
  footballCountries,
  footballPlayersProfileById,
  lineUpsOfTeams,
  liveCurrentFixtureLeagues,
  liveFixtureOfLeaguesByCountry,
  liveFixtures,
  liveFixturesByDate,
  liveFixturesById,
  liveFixturesByLeagueAndSeason,
  liveFixturesByRounds,
  liveFixturesLeaguesBySeason,
  liveFixturesOfLeaguesById,
  liveFixturesOfLeaguesByName,
  liveFixturesRoundsDatesByLeagueAndSeason,
  playerSeasons,
  playerSidelinedByPlayerId,
  playersSidelinedBulkByPlayerId,
  playersTrophiesByPlayersId,
  searchLiveFixtureLeagues,
  standingsByLeagueIdSeasonTeamId,
  standingsByLeagueSeason,
  standingsByTeam,
  teamPlayersOrSquad,
  teamsByCountry,
  teamsById,
  teamsByLeagueAndSeason,
  teamsByName,
  teamsByVenue,
  teamsCountries,
  teamsPlayerSquadByPlayerId,
  teamsPlayerSquadByTeamId,
  teamsSeasons,
  transfersPlayerByPlayerId,
  venuesById,
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

export type GetLiveFixturesByDateResponse = {
  get: string;
  parameters: {
    date: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesByDate[];
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

export type GetTeamsByIdResponse = {
  get: string;
  parameters: {
    id: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsById[];
};

export type GetTeamsByNameResponse = {
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
  response: teamsByName[];
};

export type GetTeamsByLeagueAndSeasonResponse = {
  get: string;
  parameters: {
    id: null;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsByLeagueAndSeason[];
};

export type GetTeamsByCountryResponse = {
  get: string;
  parameters: {
    id: null;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsByCountry[];
};

export type GetTeamsByVenueResponse = {
  get: string;
  parameters: {
    id: null;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsByVenue[];
};

export type GetTeamsSeasonsResponse = {
  get: string;
  parameters: {
    team: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsSeasons[];
};

export type GetTeamsCountriesResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsCountries[];
};

export type GetVenuesByIdResponse = {
  get: string;
  parameters: {
    id: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: venuesById[];
};

export type GetStandingsByLeagueIdSeasonTeamIdResponse = {
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
  response: standingsByLeagueIdSeasonTeamId[];
};

export type GetStandingsByTeamResponse = {
  get: string;
  parameters: {
    league: null;
    season: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: standingsByTeam[];
};

export type GetStandingsByLeagueSeasonResponse = {
  get: string;
  parameters: {
    league: number;
    season: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: standingsByLeagueSeason[];
};

export type GetPlayerSeasonsResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: playerSeasons[];
};

export type GetFootballPlayersProfileByIdResponse = {
  get: string;
  parameters: {
    player: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: footballPlayersProfileById[];
};

export type GetTeamsPlayerSquadResponse = {
  get: string;
  parameters: {
    team: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsPlayerSquadByTeamId[];
};

export type GetTeamsPlayerSquadByPlayerIdResponse = {
  get: string;
  parameters: {
    player: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamsPlayerSquadByPlayerId[];
};

export type GetTransfersPlayerByPlayerIdResponse = {
  get: string;
  parameters: {
    player: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: transfersPlayerByPlayerId[];
};

export type GetPlayerSidelinedByPlayerIdResponse = {
  get: string;
  parameters: {
    player: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: playerSidelinedByPlayerId[];
};

export type GetPlayersSidelinedBulkByPlayerIdResponse = {
  get: string;
  parameters: {
    players: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: playersSidelinedBulkByPlayerId[];
};

export type GetPlayerTrophiesByPlayerIdResponse = {
  get: string;
  parameters: {
    player: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: playersTrophiesByPlayersId[];
};

export type GetFixturesH2HResponse = {
  get: string;
  parameters: {
    h2h: string;
    from: string;
    to: string;
  };
  errors: [];
  results: 1;
  paging: {
    current: 1;
    total: 1;
  };
  response: fixturesH2H[];
};

export type GetTeamPlayersOrSquad = {
  get: string;
  parameters: {
    team: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: teamPlayersOrSquad[];
};

export type GetLineUpsOfTeamsResponse = {
  get: string;
  parameters: {
    date: null;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: lineUpsOfTeams[];
};

//Basketball Responses

export type GetBasketballTimeZonesResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  response: basketballTimeZones;
};

export type GetBasketballSeasonsResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  response: basketballSeasons;
};

export type GetBasketballCountriesResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  response: basketballCountries[];
};

export type GetBasketballLeaguesResponse = {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  response: basketballLeagues[];
};

export type GetBasketballTeamsByIdResponse = {
  get: string;
  parameters: object;
  errors: unknown[];
  results: number;
  response: basketballTeamsById[];
};

export type GetBasketballStatisticsResponse = {
  get: string;
  parameters: {
    season: string;
    team: string;
    league: string;
  };
  errors: unknown[];
  results: number;
  response: basketballStatistics[];
};

export type GetBasketballStandingsResponse = {
  get: string;
  parameters: object;
  errors: unknown[];
  results: number;
  response: basketballStandings[];
};

export type GetBasketballStandingsGroupsResponse = {
  get: string;
  parameters: object;
  errors: unknown[];
  results: number;
  response: basketballStandingsGroups[];
};

export type GetBasketballGamesResponse = {
  get: string;
  parameters: object;
  errors: unknown[];
  results: number;
  response: basketballGames[];
};
