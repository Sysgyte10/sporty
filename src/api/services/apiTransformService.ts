import { Alert } from "react-native";
import {
  ExtendedFixturesApiResponse,
  extendedLeague,
  fixtureLeague,
  footballLeague,
  FootballLiveScoreApiResponse,
  FootballUpcomingScheduleApiResponse,
  InjuriesSuspensionsApiResponse,
  injuryLeague,
  scorerLeague,
  ScorersApiResponse,
  standingLeague,
  StandingsApiResponse,
} from "../types/types";
import { useEffect, useState } from "react";
import { useFixturesStore } from "store";
import { transformApiToFixtures } from "./transform";

// Base URL
export const BASE_URL = "https://zairapay.com/sysgytesport";

export const getFootballLiveScores = async (): Promise<footballLeague[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/StatpalFootball/livescores`);

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { livescore }: FootballLiveScoreApiResponse = await response?.json();
    return livescore?.league ?? [];
  } catch (err) {
    console.error("Error fetching football live scores:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballUpcomingScheduleByCountry = async (
  country: string
): Promise<fixtureLeague[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/StatpalFootball/upcoming-schedule/${country}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { fixtures }: FootballUpcomingScheduleApiResponse =
      await response?.json();
    return fixtures?.league ?? [];
  } catch (err) {
    console.error("Error fetching football upcoming schedule by country:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballExtendedScheduleByCountry = async (
  country: string
): Promise<extendedLeague[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/StatpalFootball/extended-schedule/${country}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { extended_Fixtures }: ExtendedFixturesApiResponse =
      await response?.json();
    return extended_Fixtures?.league ?? [];
  } catch (err) {
    console.error("Error fetching football extended schedule by country:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballStandingsByCountry = async (
  country: string
): Promise<standingLeague[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/StatpalFootball/standings/${country}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { standings }: StandingsApiResponse = await response?.json();
    return standings?.league ?? [];
  } catch (err) {
    console.error("Error fetching football standings by country:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballScorersLeadersByCountry = async (
  country: string
): Promise<scorerLeague[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/StatpalFootball/scoring-leaders/${country}`
    );

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { scorers }: ScorersApiResponse = await response?.json();
    return scorers?.league ?? [];
  } catch (err) {
    console.error("Error fetching football scorers by country:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const getFootballInjuries = async (): Promise<injuryLeague[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/StatpalFootball/injuries`);

    if (!response.ok) {
      Alert.alert("Error", "Error fetching football countries data");
    }

    // 👇 Parse + type in one line
    const { injuries_suspensions }: InjuriesSuspensionsApiResponse =
      await response?.json();
    return injuries_suspensions?.league ?? [];
  } catch (err) {
    console.error("Error fetching football injuries:", err);
    return []; // Return an empty array to keep the return type consistent
  }
};

export const useFetchSportData = () => {
  const { setFixtures, fixtures } = useFixturesStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const getSportData = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const [
  //       liveScores,
  //       upcomingSchedules,
  //       extendedSchedules,
  //       standings,
  //       footballScorers,
  //       footballInjuries,
  //     ] = await Promise.all([
  //       getFootballLiveScores(),
  //       getFootballUpcomingScheduleByCountry("spain"),
  //       getFootballExtendedScheduleByCountry("spain"),
  //       getFootballStandingsByCountry("spain"),
  //       getFootballScorersLeadersByCountry("spain"),
  //       getFootballInjuries(),
  //     ]);

  //     // 🎉 Transform API responses to match your constant data structure
  //     const transformedFixtures = transformApiToFixtures(
  //       liveScores,
  //       upcomingSchedules,
  //       extendedSchedules,
  //       standings,
  //       footballScorers,
  //       footballInjuries
  //     );

  //     // Set the transformed data to your store
  //     setFixtures(transformedFixtures);

  //     console.log("✅ Transformed fixtures:", transformedFixtures);
  //   } catch (err) {
  //     console.error("Error in getSportData:", err);
  //     setError("Failed to fetch sports data");
  //     Alert.alert("Error", "Failed to fetch sports data");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getSportData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Step 1: Get live scores first to know which countries have data
      const liveScores = await getFootballLiveScores();

      // Step 2: Extract unique countries from live scores
      const countries = [
        ...new Set(liveScores.map((league) => league.country)),
      ];

      console.log("📍 Countries with live data:", countries);

      // Step 3: Fetch data for all countries in parallel
      const [
        upcomingSchedulesData,
        extendedSchedulesData,
        standingsData,
        footballScorersData,
        footballInjuries,
      ] = await Promise.all([
        // Fetch upcoming schedules for all countries
        Promise.all(
          countries.map((country) =>
            getFootballUpcomingScheduleByCountry(country)
          )
        ),
        // Fetch extended schedules for all countries
        Promise.all(
          countries.map((country) =>
            getFootballExtendedScheduleByCountry(country)
          )
        ),
        // Fetch standings for all countries
        Promise.all(
          countries.map((country) => getFootballStandingsByCountry(country))
        ),
        // Fetch scorers for all countries
        Promise.all(
          countries.map((country) =>
            getFootballScorersLeadersByCountry(country)
          )
        ),
        // Injuries is global, so just fetch once
        getFootballInjuries(),
      ]);

      // Step 4: Flatten the arrays (since Promise.all returns array of arrays)
      const upcomingSchedules = upcomingSchedulesData.flat();
      const extendedSchedules = extendedSchedulesData.flat();
      const standings = standingsData.flat();
      const footballScorers = footballScorersData.flat();

      // 🎉 Transform API responses to match your constant data structure
      const transformedFixtures = transformApiToFixtures(
        liveScores,
        upcomingSchedules,
        extendedSchedules,
        standings,
        footballScorers,
        footballInjuries
      );

      // Set the transformed data to your store
      setFixtures(transformedFixtures);

      console.log("✅ Transformed fixtures:", transformedFixtures);
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
