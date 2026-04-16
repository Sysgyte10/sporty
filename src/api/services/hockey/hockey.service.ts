import { BASE_URL } from "@src/api/endpoint/endpoint";
import {
  GetHockeyCountriesResponse,
  GetHockeyGamesEventResponse,
  GetHockeyGamesH2HResponse,
  GetHockeyGamesResponse,
  GetHockeyLeaguesResponse,
  GetHockeySeasonsResponse,
  GetHockeyTeamsResponse,
  GetHockeyTeamsStatisticsResponse,
  GetHockeyTimeZonesResponse,
} from "@src/api/types/responses";
import {
  hockeyCountries,
  hockeyGames,
  hockeyGamesEvent,
  hockeyGamesH2H,
  hockeyLeagues,
  hockeySeasons,
  hockeyTeams,
  hockeyTeamStatistics,
  hockeyTimeZones,
} from "@src/api/types/types";

//check if the endpoint is correct, because it is not working
export const getHockeyTimeZones = async (): Promise<hockeyTimeZones[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/timezone`);
    const data: GetHockeyTimeZonesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey time zones:", err);
    return [] as hockeyTimeZones[];
  }
};

//check if the endpoint is correct, because it is not working
export const getHockeySeasons = async (): Promise<hockeySeasons[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/seasons`);
    const data: GetHockeySeasonsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey seasons:", err);
    return [] as hockeySeasons[];
  }
};

//check if the endpoint is correct, because it is not working
export const getHockeyCountries = async (): Promise<hockeyCountries[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/countries`);
    const data: GetHockeyCountriesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey countries:", err);
    return [] as hockeyCountries[];
  }
};

//check if the endpoint is correct, because it is not working
export const getHockeyLeagues = async (): Promise<hockeyLeagues[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/leagues`);
    const data: GetHockeyLeaguesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey leagues:", err);
    return [] as hockeyLeagues[];
  }
};

//check if the endpoint is correct, because it is not working
export const getHockeyTeams = async (
  teamId: number,
): Promise<hockeyTeams[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/teams?id=${teamId}`);
    const data: GetHockeyTeamsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey teams:", err);
    return [] as hockeyTeams[];
  }
};

//check if the endpoint is correct, because it is not working
export const getHockeyTeamStatistics = async (
  season: number,
  teamId: number,
  leagueId: number,
): Promise<hockeyTeamStatistics[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Hockey/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`,
    );
    const data: GetHockeyTeamsStatisticsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey teams statistics:", err);
    return [] as hockeyTeamStatistics[];
  }
};

//check if the endpoint is correct, because it is not working
export const hockeyGamesById = async (id: number): Promise<hockeyGames[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/games?id=${id}`);
    const data: GetHockeyGamesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey games:", err);
    return [] as hockeyGames[];
  }
};

//check if the endpoint is correct, because it is not working
export const hockeyGamesByH2H = async (
  h2h: string,
): Promise<hockeyGamesH2H[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/Hockey/games/h2h?h2h=${h2h}`);
    const data: GetHockeyGamesH2HResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey games h2h:", err);
    return [] as hockeyGamesH2H[];
  }
};

//check if the endpoint is correct, because it is not working
export const hockeyGamesEventByGameId = async (
  gameId: number,
): Promise<hockeyGamesEvent[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Hockey/games/events?game=${gameId}`,
    );
    const data: GetHockeyGamesEventResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching hockey games events:", err);
    return [] as hockeyGamesEvent[];
  }
};
