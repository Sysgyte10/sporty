import { BASE_URL } from "../endpoint/endpoint";
import {
  GetFootballCountryResponse,
  GetLiveCurrentFixturesLeaguesResponse,
  GetLiveFixtureByIdResponse,
  GetLiveFixtureOfLeaguesByIdResponse,
  GetLiveFixtureOfLeaguesByNameResponse,
  GetLiveFixturesByRoundsResponse,
  GetLiveFixturesBySeasonAndLeagueResponse,
  GetLiveFixturesLeaguesBySeasonResponse,
  GetLiveFixturesOfLeaguesByCountryResponse,
  GetLiveFixturesResponse,
  GetLiveFixturesRoundsDatesByLeagueAndSeasonResponse,
  GetStandingsByLeagueIdSeasonTeamIdResponse,
  GetTeamsByCountryResponse,
  GetTeamsByIdResponse,
  GetTeamsByLeagueAndSeasonResponse,
  GetTeamsByNameResponse,
  GetTeamsByVenueResponse,
  GetTeamsCountriesResponse,
  GetTeamsSeasonsResponse,
  GetVenuesByIdResponse,
  SearchLiveFixturesResponse,
} from "../types/responses";
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
  standingsByLeagueIdSeasonTeamId,
  teamsById,
  teamsByLeagueAndSeason,
  teamsByName,
  teamsByVenue,
  teamsCountries,
  teamsSeasons,
  venuesById,
} from "../types/types";

export const getListOfFootballCountries = async (): Promise<
  footballCountries[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/ApiFootball/countries`);

    // 👇 Parse + type in one line
    const responseData: GetFootballCountryResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching football countries:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getCountryByName = async (
  name: string,
): Promise<footballCountries[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/countries/by-name?name=${name}`,
    );
    const responseData: GetFootballCountryResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching countries by name:", err);
    return [];
  }
};

export const getLiveFixtures = async (live: "all"): Promise<liveFixtures[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/fixtures/live?live=${live}`,
    );
    const responseData: GetLiveFixturesResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures", err);
    return [];
  }
};

export const getLiveFixturesById = async (
  ids: string,
): Promise<liveFixturesById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/fixtures/by-ids?ids=${ids}`,
    );
    const responseData: GetLiveFixtureByIdResponse = await response?.json();
    return responseData?.response;
  } catch (err) {
    console.error("Error fetching live fixtures by id", err);
    return [];
  }
};

//use league = 39 and season = 2019 for test purposes
export const getLiveFixturesByLeagueOrSeason = async (
  league: string,
  season: string,
): Promise<liveFixturesByLeagueAndSeason[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/fixtures/by-league-season?league=${league}&season=${season}`,
    );
    const responseData: GetLiveFixturesBySeasonAndLeagueResponse =
      await response?.json();
    return responseData?.response;
  } catch (err) {
    console.error("Error fetching live fixtures by league and season", err);
    return [];
  }
};

//use league = 39 and season = 2019 for test purposes
export const getLiveFixturesByRounds = async (
  league: string,
  season: string,
): Promise<liveFixturesByRounds[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/fixtures/rounds?league=${league}&season=${season}`,
    );
    const responseData: GetLiveFixturesByRoundsResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use league = 39 and season = 2019 for test purposes
export const getLiveFixturesRoundsDateByLeagueOrSeason = async (
  league: string,
  season: string,
): Promise<liveFixturesRoundsDatesByLeagueAndSeason[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/fixtures/rounds/dates?league=${league}&season=${season}`,
    );
    const responseData: GetLiveFixturesRoundsDatesByLeagueAndSeasonResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use id = 6
export const getLiveFixturesOfLeaguesById = async (
  id: number,
): Promise<liveFixturesOfLeaguesById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/leagues?id=${id}`,
    );
    const responseData: GetLiveFixtureOfLeaguesByIdResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use name = NPFL
export const getLiveFixturesOfLeaguesByName = async (
  name: string,
): Promise<liveFixturesOfLeaguesByName[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/leagues/by-name?name=${name}`,
    );
    const responseData: GetLiveFixtureOfLeaguesByNameResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use country = Nigeria
export const getLiveFixturesOfLeaguesByCountry = async (
  country: string,
): Promise<liveFixtureOfLeaguesByCountry[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/leagues/by-country?country=${country}`,
    );
    const responseData: GetLiveFixturesOfLeaguesByCountryResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use season = 2019
export const getLiveFixturesOfLeaguesBySeason = async (
  season: string,
): Promise<liveFixturesLeaguesBySeason[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/leagues/by-season?season=${season}`,
    );
    const responseData: GetLiveFixturesLeaguesBySeasonResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use searchString = NPFL
export const searchLiveFixturesLeaguesByName = async (
  searchString: string,
): Promise<searchLiveFixtureLeagues[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/leagues/search?search=${searchString}`,
    );
    const responseData: SearchLiveFixturesResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

export const getLiveCurrentFixtureLeague = async (): Promise<
  liveCurrentFixtureLeagues[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/ApiFootball/leagues/current`);
    const responseData: GetLiveCurrentFixturesLeaguesResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err) {
    console.error("Error fetching live fixtures by rounds", err);
    return [];
  }
};

//use id = 399
export const getTeamsById = async (id: number): Promise<teamsById[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/ApiFootball/teams/${id}`);
    const responseData: GetTeamsByIdResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams by id", err);
    return [];
  }
};

//use id = 399
export const getTeamsByName = async (id: number): Promise<teamsByName[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/ApiFootball/teams/${id}`);
    const responseData: GetTeamsByNameResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams by name", err);
    return [];
  }
};

//use league = 39 and season = 2019 for test purposes
export const getTeamsByLeagueAndSeason = async (
  league: number,
  season: number,
): Promise<teamsByLeagueAndSeason[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/teams/by-league-season?league=${league}&season=${season}`,
    );
    const responseData: GetTeamsByLeagueAndSeasonResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams by league and season", err);
    return [];
  }
};

//use country = Nigeria for test purposes
export const getTeamsByCountry = async (
  country: string,
): Promise<teamsByLeagueAndSeason[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/teams/by-country?country=${country}`,
    );
    const responseData: GetTeamsByCountryResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams by country", err);
    return [];
  }
};

//use venueId = 3909 for test purposes
export const getTeamsByVenue = async (
  venueId: number,
): Promise<teamsByVenue[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/teams/by-venue?venueId=${venueId}`,
    );
    const responseData: GetTeamsByVenueResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams by venue", err);
    return [];
  }
};

//use teamId = 3909 for test purposes
export const getTeamsSeasons = async (
  teamId: number,
): Promise<teamsSeasons[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/teams/seasons?teamId=${teamId}`,
    );
    const responseData: GetTeamsSeasonsResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams seasons", err);
    return [];
  }
};

export const getTeamsCountries = async (): Promise<teamsCountries[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/ApiFootball/teams/countries`);
    const responseData: GetTeamsCountriesResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching teams countries", err);
    return [];
  }
};

//use venuesId = 3909 for test purposes
export const getVenuesById = async (
  venuesId: number,
): Promise<venuesById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/venues/${venuesId}`,
    );
    const responseData: GetVenuesByIdResponse = await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching venues by id", err);
    return [];
  }
};

//use leagueId = 6, seasonId = 2019 and teamId = 32 for test purposes
export const getStandingsLeagueIdSeasonTeamId = async (
  leagueId: number,
  seasonId: number,
  teamId: number,
): Promise<standingsByLeagueIdSeasonTeamId[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiFootball/standings/by-league-season-teamid?league=${leagueId}&season=${seasonId}&teamId=${teamId}`,
    );
    const responseData: GetStandingsByLeagueIdSeasonTeamIdResponse =
      await response?.json();
    return responseData?.response ?? [];
  } catch (err: any) {
    console.error("Error fetching venues by id", err);
    return [];
  }
};
