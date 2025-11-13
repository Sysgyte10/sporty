// transformers.ts
import { fixtureDataType } from "@src/types/types";
import {
  getFootBallCountriesResp,
  getFootballLeaguesResp,
  getFootballLeagueTopScorerResp,
  getFootballLeagueStandingResp,
} from "../types/types";

// Placeholder image for when API doesn't provide images
const PLACEHOLDER_IMAGE = require("@src/assets/png/fixture.png");

/**
 * Transform API responses into the footballFixtures format
 */
export const transformSportDataToFixtures = (
  countries: getFootBallCountriesResp[],
  leagues: getFootballLeaguesResp[],
  topScorers: getFootballLeagueTopScorerResp[],
  standings: getFootballLeagueStandingResp[]
): fixtureDataType[] => {
  // Group leagues by country
  const leaguesByCountry = leagues.reduce((acc, league) => {
    const countryKey = league.country_key;
    if (!acc[countryKey]) {
      acc[countryKey] = [];
    }
    acc[countryKey].push(league);
    return acc;
  }, {} as Record<number, getFootballLeaguesResp[]>);

  // Transform each country into a fixture
  return countries.map((country, index) => {
    const countryLeagues = leaguesByCountry[country.country_Key] || [];

    return {
      id: country.country_Key,
      fixtureName: countryLeagues[0]?.league_name || country.country_Name,
      country: country.country_Name,
      icon: country.country_Logo || PLACEHOLDER_IMAGE,

      // Transform odds (you'll need to implement this based on your odds API)
      odds: generatePlaceholderOdds(countryLeagues),

      // Transform news (you'll need to implement this based on your news API)
      news: generatePlaceholderNews(),

      // Transform match highlights (you'll need to implement this based on your highlights API)
      matchHighLights: generatePlaceholderHighlights(),

      // Transform matches with top scorers
      matches: transformMatches(topScorers, standings, countryLeagues),
    };
  });
};

/**
 * Transform top scorers into match format with scorers
 */
const transformMatches = (
  topScorers: getFootballLeagueTopScorerResp[],
  standings: getFootballLeagueStandingResp[],
  leagues: getFootballLeaguesResp[]
): any[] => {
  // Group top scorers by team for easier access
  const scorersByTeam = topScorers.reduce((acc, scorer) => {
    if (!acc[scorer.team_key]) {
      acc[scorer.team_key] = [];
    }
    acc[scorer.team_key].push(scorer);
    return acc;
  }, {} as Record<number, getFootballLeagueTopScorerResp[]>);

  // Create matches from standings (each standing entry represents a team)
  const matches = standings.slice(0, 10).map((standing, index) => {
    const teamScorers = scorersByTeam[standing.team_Key] || [];

    return {
      id: index + 1,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
      }),

      topScorers: transformTopScorers(topScorers),

      club: [
        {
          name: standing.standing_Team,
          image: standing.team_Logo || PLACEHOLDER_IMAGE,
          score: standing.standing_F?.toString() || "0",
        },
        {
          name: standings[index + 1]?.standing_Team || "TBD",
          image: standings[index + 1]?.team_Logo || PLACEHOLDER_IMAGE,
          score: standings[index + 1]?.standing_F?.toString() || "0",
        },
      ],
    };
  });

  return matches;
};

/**
 * Transform top scorers array
 */
const transformTopScorers = (
  topScorers: getFootballLeagueTopScorerResp[]
): any[] => {
  return topScorers.map((scorer, index) => ({
    id: scorer.player_key || index + 1,
    footballerName: scorer.player_name,
    clubName: scorer.team_name,
    clubImg: PLACEHOLDER_IMAGE, // You might want to fetch team logo separately
    goals: scorer.goals || 0,
  }));
};

/**
 * Generate placeholder odds (implement when odds API is available)
 */
const generatePlaceholderOdds = (leagues: getFootballLeaguesResp[]) => {
  // Extract team names from leagues if available
  const teams = leagues.slice(0, 4);

  return teams.length > 0
    ? teams.map((league, index) => ({
        clubName: league.league_name,
        odd: 2.5 + index * 0.5,
      }))
    : [
        { clubName: "PSG", odd: 2.5 },
        { clubName: "Real Madrid", odd: 3.0 },
        { clubName: "Manchester City", odd: 3.25 },
        { clubName: "Bayern Munich", odd: 4.0 },
      ];
};

/**
 * Generate placeholder news (implement when news API is available)
 */
const generatePlaceholderNews = () => {
  return [
    {
      id: 1,
      details: "Latest football news and updates",
      club: "Various Clubs",
      time: "Recent",
      image: PLACEHOLDER_IMAGE,
    },
  ];
};

/**
 * Generate placeholder highlights (implement when highlights API is available)
 */
const generatePlaceholderHighlights = () => {
  return [
    {
      id: 1,
      feature: "Match Highlights",
      detail: "Recent Matches",
      image: PLACEHOLDER_IMAGE,
      highLights: [],
    },
  ];
};
