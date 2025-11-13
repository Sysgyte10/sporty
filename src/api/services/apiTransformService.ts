import { Alert } from "react-native";
import {
  getFootBallCountriesResp,
  getFootballLeaguesResp,
  getFootballLeagueStandingResp,
  getFootballLeagueTopScorerResp,
} from "../types/types";
import { useEffect, useState } from "react";
import { fixtureDataType } from "@src/types/types";
import { transformSportDataToFixtures } from "./transform";
import { useFixturesStore } from "store";

// Base URL
const BASE_URL = "https://zairapay.com/sysgytesport";

export const getFootballCountries = async (): Promise<
  getFootBallCountriesResp[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AllSportFootball/countries`);

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { result }: { result: getFootBallCountriesResp[] } =
      await response.json();
    return result;
  } catch (err) {
    console.error("Error fetching football countries:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

//use 6 as id
export const getFootballLeagues = async (
  id: number | string
): Promise<getFootballLeaguesResp[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AllSportFootball/leagues?countryId=${id}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football leagues data");
    }
    // 👇 Parse + type in one line
    const { result }: { result: getFootballLeaguesResp[] } =
      await response.json();
    return result;
  } catch (err) {
    console.error("Error fetching football leagues:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

//use 3 as id
export const getFootballLeagueTopScorer = async (
  id: number | string
): Promise<getFootballLeagueTopScorerResp[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AllSportFootball/topscorers?leagueId=${id}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football leagues top scorer data");
    }

    // 👇 Parse + type in one line
    const { result }: { result: getFootballLeagueTopScorerResp[] } =
      await response.json();
    return result;
  } catch (err) {
    console.error("Error fetching football leagues top scorer:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

//use 3 as id
export const getFootballLeagueStanding = async (
  id: number | string
): Promise<getFootballLeagueStandingResp[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AllSportFootball/standings/${id}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football leagues standing data");
    }

    // 👇 Parse and bind only what you need
    const { result }: { result: { total: getFootballLeagueStandingResp[] } } =
      await response.json();

    // ✅ Return only the "total" array
    return result.total;
  } catch (err) {
    console.error("Error fetching football leagues standing:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const useFetchSportData = () => {
  const { setFixtures, fixtures } = useFixturesStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSportData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [countries, leagues, topScorers, standings] = await Promise.all([
        getFootballCountries(),
        getFootballLeagues(6),
        getFootballLeagueTopScorer(3),
        getFootballLeagueStanding(3),
      ]);

      // 🎯 Transform API data to match your constant data structure
      const transformedData = transformSportDataToFixtures(
        countries,
        leagues,
        topScorers,
        standings
      );

      setFixtures(transformedData);
    } catch (err) {
      console.error("Error in getSportData:", err);
      setError("Failed to fetch sports data");
      Alert.alert("Error", "Failed to fetch sports data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSportData();
  }, []);

  return { fixtures, loading, error, refetch: getSportData };
};
