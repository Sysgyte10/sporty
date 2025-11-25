import { Alert } from "react-native";
import {
  getFootballCompareHeadToHeadResp,
  getFootBallCountriesResp,
  getFootballLeagueLiveScoreResp,
  getFootballLeagueOddsLiveResp,
  getFootballLeaguesResp,
  getFootballLeagueStandingResp,
  getFootballLeagueTopScorerResp,
  getFootballOddsResp,
} from "../types/types";
import { useEffect, useState } from "react";
import { transformSportDataToFixtures } from "./transform";
import { useFixturesStore } from "store";

// Base URL
export const BASE_URL = "https://zairapay.com/sysgytesport";

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
    // console.log("result1", result);
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
    // console.log("result2", result);
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
    // console.log("result3", result);
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
    // console.log("result4", result?.total);

    // ✅ Return only the "total" array
    return result.total;
  } catch (err) {
    console.error("Error fetching football leagues standing:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballLeagueLiveScore = async (): Promise<
  getFootballLeagueLiveScoreResp[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AllSportFootball/livescores`);
    const { result }: { result: getFootballLeagueLiveScoreResp[] } =
      await response.json();
    // console.log("result5", result);
    return result;
  } catch (err) {
    console.error("Error fetching football live score:", err);
    return [];
  }
};

//use 1 for from and 2 for to
export const getFootballLeagueCompareTeamHeadToHead = async (
  from: number,
  to: number
): Promise<getFootballCompareHeadToHeadResp[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AllSportFootball/compareteamheadtohead?firstTeamId=${from}&secondTeamId=${to}`
    );
    const { result }: { result: { h2H: getFootballCompareHeadToHeadResp[] } } =
      await response.json();
    // console.log("result6", result?.h2H);
    return result.h2H;
  } catch (err) {
    console.error("Error fetching football compare head-to-head", err);
    return [];
  }
};

//use 10 or 12 as matchId
export const getFootballLeagueOddsByMatchId = async (
  matchId: number
): Promise<getFootballOddsResp> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/AllSportFootball/odds/${matchId}`
    );

    const { result }: { result: getFootballOddsResp } = await response.json();

    // console.log("result7", result);
    return result;
  } catch (err) {
    console.error("Error fetching football odds", err);
    return {};
  }
};

export const getFootballLeagueOddsLive = async (): Promise<
  getFootballLeagueOddsLiveResp[]
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/AllSportFootball/odds-live`);

    const {
      result,
    }: { result: Record<string, getFootballLeagueOddsLiveResp[]> } =
      await response.json();

    // Flatten all odds from all match IDs into a single array
    if (!result || typeof result !== "object") {
      // console.log("No odds data available");
      return [];
    }

    const allOdds: getFootballLeagueOddsLiveResp[] = [];

    Object.keys(result).forEach((matchId) => {
      const matchOdds = result[matchId];
      if (Array.isArray(matchOdds)) {
        allOdds.push(...matchOdds);
      }
    });

    // console.log("Total odds fetched:", allOdds.length);
    return allOdds;
  } catch (err) {
    console.error("Error fetching football odds", err);
    return [];
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
      const [
        countries,
        leagues,
        topScorers,
        standings,
        liveScore,
        compareHeadToHead,
        oddsByMatchId,
        oddsLive,
      ] = await Promise.all([
        getFootballCountries(),
        getFootballLeagues(6),
        getFootballLeagueTopScorer(3),
        getFootballLeagueStanding(3),
        getFootballLeagueLiveScore(),
        getFootballLeagueCompareTeamHeadToHead(1, 2),
        getFootballLeagueOddsByMatchId(10),
        getFootballLeagueOddsLive(),
      ]);

      //Transform API data to match your constant data structure
      const transformedData = transformSportDataToFixtures(
        countries,
        leagues,
        topScorers,
        standings,
        liveScore,
        compareHeadToHead,
        oddsByMatchId,
        oddsLive
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
