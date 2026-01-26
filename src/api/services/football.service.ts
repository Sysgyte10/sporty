import { BASE_URL } from "../endpoint/endpoint";
import {
  GetFootballCountryResponse,
  GetLiveFixtureByIdResponse,
  GetLiveFixturesResponse,
} from "../types/responses";
import {
  footballCountries,
  liveFixtures,
  liveFixturesById,
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
