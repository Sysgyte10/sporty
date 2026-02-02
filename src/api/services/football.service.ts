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
