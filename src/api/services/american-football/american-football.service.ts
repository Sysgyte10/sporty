import { BASE_URL } from "@src/api/endpoint/endpoint";
import {
  GetAmericanFootballGamesEventsResponse,
  GetAmericanFootballGamesResponse,
  GetAmericanFootballGamesStatisticsOfPlayersResponse,
  GetAmericanFootballGamesStatisticsOfTeamsResponse,
  GetAmericanFootballInjuriesResponse,
  GetAmericanFootballLeaguesResponse,
  GetAmericanFootballPlayersByIdResponse,
  GetAmericanFootballPlayersStatisticsResponse,
  GetAmericanFootballSeasonsResponse,
  GetAmericanFootballTeamsByIdResponse,
  GetAmericanFootballTimeZonesResponse,
} from "@src/api/types/responses";
import {
  americanFootballGames,
  americanFootballGamesEvents,
  americanFootballGamesStandings,
  americanFootballGamesStatisticsOfPlayers,
  americanFootballGamesStatisticsOfTeams,
  americanFootballInjuries,
  americanFootballLeagues,
  americanFootballPlayersById,
  americanFootballPlayersStatistics,
  americanFootballSeasons,
  americanFootballTeamsById,
  americanFootballTimeZones,
} from "@src/api/types/types";

export const getAmericanFootballTimeZones = async (): Promise<
  americanFootballTimeZones[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AmericanFootball/timezone`);
    const data: GetAmericanFootballTimeZonesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football timezones:", err.message);
    return [] as americanFootballTimeZones[];
  }
};

export const getAmericanFootballSeasons = async (): Promise<
  americanFootballSeasons[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AmericanFootball/seasons`);
    const data: GetAmericanFootballSeasonsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football seasons:", err.message);
    return [] as americanFootballTimeZones[];
  }
};

export const getAmericanFootballLeagues = async (): Promise<
  americanFootballLeagues[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AmericanFootball/leagues`);
    const data: GetAmericanFootballLeaguesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football leagues:", err.message);
    return [] as americanFootballLeagues[];
  }
};

export const getAmericanFootballTeamsById = async (
  teamId: number,
): Promise<americanFootballTeamsById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/teams?id=${teamId}`,
    );
    const data: GetAmericanFootballTeamsByIdResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football teams:", err.message);
    return [] as americanFootballTeamsById[];
  }
};

export const getAmericanFootballPlayersById = async (
  playerId: number,
): Promise<americanFootballPlayersById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/players?id=${playerId}`,
    );
    const data: GetAmericanFootballPlayersByIdResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football players:", err.message);
    return [] as americanFootballPlayersById[];
  }
};

export const getAmericanFootballPlayersStatistics = async (
  id: number,
  season: number,
): Promise<americanFootballPlayersStatistics[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/players/statistics?id=${id}&season=${season}`,
    );
    const data: GetAmericanFootballPlayersStatisticsResponse =
      await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log(
      "Error fetching american football players statistics:",
      err.message,
    );
    return [] as americanFootballPlayersStatistics[];
  }
};

export const getAmericanFootballPlayersInjuries = async (
  id: number,
): Promise<americanFootballInjuries[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/players/injuries?player${id}`,
    );
    const data: GetAmericanFootballInjuriesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football injuries:", err.message);
    return [] as americanFootballInjuries[];
  }
};

export const getAmericanFootballGames = async (
  date: string,
): Promise<americanFootballGames[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/games?date${date}`,
    );
    const data: GetAmericanFootballGamesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football games:", err.message);
    return [] as americanFootballGames[];
  }
};

export const getAmericanFootballGamesEvents = async (
  id: number,
): Promise<americanFootballGamesEvents[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/games?events?id=${id}`,
    );
    const data: GetAmericanFootballGamesEventsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football games events:", err.message);
    return [] as americanFootballGamesEvents[];
  }
};

export const getAmericanFootballGamesStatisticsOfTeams = async (
  id: number,
): Promise<americanFootballGamesStatisticsOfTeams[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/games/statistics/teams?id=${id}`,
    );
    const data: GetAmericanFootballGamesStatisticsOfTeamsResponse =
      await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log(
      "Error fetching american football games statistics of teams:",
      err.message,
    );
    return [] as americanFootballGamesStatisticsOfTeams[];
  }
};

export const getAmericanFootballGamesStatisticsOfPlayers = async (
  id: number,
): Promise<americanFootballGamesStatisticsOfPlayers[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/games/statistics/players?id=${id}`,
    );
    const data: GetAmericanFootballGamesStatisticsOfPlayersResponse =
      await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log(
      "Error fetching american football games statistics of players:",
      err.message,
    );
    return [] as americanFootballGamesStatisticsOfPlayers[];
  }
};

export const getAmericanFootballGamesStandings = async (
  leagueId: number,
  seasonId: number,
): Promise<americanFootballGamesStandings[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AmericanFootball/standings?league=${leagueId}&season=${seasonId}`,
    );
    const data: GetAmericanFootballGamesStatisticsOfPlayersResponse =
      await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching american football standings:", err.message);
    return [] as americanFootballGamesStandings[];
  }
};
