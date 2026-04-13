import {
  basketballCountries,
  basketballLeagues,
  basketballSeasons,
  basketballStatistics,
  basketballTeamsById,
  basketballTimeZones,
} from "@src/api/types/types";
import { BASE_URL } from "../../endpoint/endpoint";
import {
  GetBasketballCountriesResponse,
  GetBasketballLeaguesResponse,
  GetBasketballSeasonsResponse,
  GetBasketballStatisticsResponse,
  GetBasketballTeamsByIdResponse,
  GetBasketballTimeZonesResponse,
} from "@src/api/types/responses";

export const getBasketballTimezones =
  async (): Promise<basketballTimeZones> => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/ApiBasket/basketball/timezones`,
      );
      const data: GetBasketballTimeZonesResponse = await response.json();
      return data?.response || [];
    } catch (err: any) {
      console.log("Error fetching basketball timezones:", err.message);
      return [] as basketballTimeZones;
    }
  };

export const getBasketballSeasons = async (): Promise<basketballSeasons> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiBasket/basketball/seasons`,
    );
    const data: GetBasketballSeasonsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching basketball seasons:", err.message);
    return [] as basketballSeasons;
  }
};

export const getBasketballCountries = async (): Promise<
  basketballCountries[]
> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiBasket/basketball/seasons`,
    );
    const data: GetBasketballCountriesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching basketball countries:", err.message);
    return [] as basketballCountries[];
  }
};

export const getBasketballLeagues = async (): Promise<basketballLeagues[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiBasket/basketball/leagues`,
    );
    const data: GetBasketballLeaguesResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching basketball leagues:", err.message);
    return [] as basketballLeagues[];
  }
};

export const getBasketballByTeamsId = async (
  id: number,
): Promise<basketballTeamsById[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiBasket/basketball/teams/${id}`,
    );
    const data: GetBasketballTeamsByIdResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching basketball teams:", err.message);
    return [] as basketballTeamsById[];
  }
};

export const getBasketballStatistics = async (
  season: string,
  teamId: number,
  leagueId: number,
): Promise<basketballStatistics[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/ApiBasket/basketball/statistics?season=${season}&team=${teamId}&league=${leagueId}`,
    );
    const data: GetBasketballStatisticsResponse = await response.json();
    return data?.response || [];
  } catch (err: any) {
    console.log("Error fetching basketball statistics:", err.message);
    return [] as basketballStatistics[];
  }
};
