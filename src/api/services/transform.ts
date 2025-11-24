// transformers.ts
import {
  getFootBallCountriesResp,
  getFootballLeaguesResp,
  getFootballLeagueTopScorerResp,
  getFootballLeagueStandingResp,
  getFootballLeagueLiveScoreResp,
  getFootballCompareHeadToHeadResp,
  getFootballOddsResp,
  getFootballLeagueOddsLiveResp,
  OddsItem,
} from "../types/types";
import { fixtureDataType } from "@src/types/types"; // Adjust import path

// Placeholder image for when API doesn't provide images
const PLACEHOLDER_IMAGE = require("@src/assets/png/fixture.png");

// transformers.ts
export const transformSportDataToFixtures = (
  countries: getFootBallCountriesResp[],
  leagues: getFootballLeaguesResp[],
  topScorers: getFootballLeagueTopScorerResp[],
  standings: getFootballLeagueStandingResp[],
  liveScores: getFootballLeagueLiveScoreResp[],
  headToHead: getFootballCompareHeadToHeadResp[],
  oddsByMatchId: getFootballOddsResp,
  oddsLive: getFootballLeagueOddsLiveResp[]
): fixtureDataType[] => {
  // Safety checks
  const safeCountries = Array.isArray(countries) ? countries : [];
  const safeLeagues = Array.isArray(leagues) ? leagues : [];
  const safeTopScorers = Array.isArray(topScorers) ? topScorers : [];
  const safeStandings = Array.isArray(standings) ? standings : [];
  const safeLiveScores = Array.isArray(liveScores) ? liveScores : [];
  const safeHeadToHead = Array.isArray(headToHead) ? headToHead : [];
  const safeOddsByMatchId = oddsByMatchId || {};
  const safeOddsLive = Array.isArray(oddsLive) ? oddsLive : [];

  // Group leagues by country
  const leaguesByCountry = safeLeagues.reduce((acc, league) => {
    const countryKey = league.country_key;
    if (!acc[countryKey]) {
      acc[countryKey] = [];
    }
    acc[countryKey].push(league);
    return acc;
  }, {} as Record<number, getFootballLeaguesResp[]>);

  // Group live scores by league
  const liveScoresByLeague = safeLiveScores.reduce((acc, score) => {
    const leagueKey = score.league_key;
    if (!acc[leagueKey]) {
      acc[leagueKey] = [];
    }
    acc[leagueKey].push(score);
    return acc;
  }, {} as Record<number, getFootballLeagueLiveScoreResp[]>);

  // 🔥 NEW: Distribute data across countries to avoid repetition
  const oddsPerCountry = distributeOdds(
    safeOddsByMatchId,
    safeOddsLive,
    safeCountries.length
  );
  const highlightsPerCountry = distributeHighlights(
    safeLiveScores,
    safeHeadToHead,
    safeCountries.length
  );

  // Transform each country into a fixture
  return safeCountries.map((country, countryIndex) => {
    const countryLeagues = leaguesByCountry[country.country_Key] || [];
    const firstLeague = countryLeagues[0];

    // Get live scores for this country's leagues only
    const leagueLiveScores = firstLeague
      ? liveScoresByLeague[firstLeague.league_key] || []
      : [];

    return {
      id: country.country_Key,
      fixtureName: firstLeague?.league_name || country.country_Name,
      country: country.country_Name,
      icon: country.country_Logo
        ? { uri: country.country_Logo }
        : PLACEHOLDER_IMAGE,

      // Use distributed odds for this country
      odds:
        oddsPerCountry[countryIndex] || generatePlaceholderOdds(countryLeagues),

      news: generatePlaceholderNews(),

      // Use distributed highlights for this country
      matchHighLights:
        highlightsPerCountry[countryIndex] || generatePlaceholderHighlights(),

      // Generate unique matches per country
      matches: transformMatches(
        leagueLiveScores,
        safeTopScorers,
        safeStandings,
        countryIndex
      ),
    };
  });
};

/**
 * Distribute odds across countries to avoid repetition
 */
const distributeOdds = (
  oddsByMatchId: getFootballOddsResp,
  oddsLive: getFootballLeagueOddsLiveResp[],
  countryCount: number
): any[][] => {
  const allOdds: any[] = [];

  // Collect all odds
  if (oddsByMatchId && typeof oddsByMatchId === "object") {
    Object.entries(oddsByMatchId).forEach(([matchId, bookmakers]) => {
      if (Array.isArray(bookmakers)) {
        bookmakers.forEach((bookmaker) => {
          if (bookmaker?.odd_1) {
            allOdds.push({
              clubName: `Match ${matchId} - Home`,
              odd: bookmaker.odd_1,
            });
          }
          if (bookmaker?.odd_2) {
            allOdds.push({
              clubName: `Match ${matchId} - Away`,
              odd: bookmaker.odd_2,
            });
          }
        });
      }
    });
  }

  if (Array.isArray(oddsLive)) {
    oddsLive.forEach((odd) => {
      if (odd && odd.odd_name && odd.odd_value) {
        allOdds.push({
          clubName: `${odd.odd_name} (${odd.odd_type || "N/A"})`,
          odd: parseFloat(odd.odd_value) || 0,
        });
      }
    });
  }

  // Distribute odds across countries (4 per country)
  const oddsPerCountry: any[][] = [];
  for (let i = 0; i < countryCount; i++) {
    const startIdx = (i * 4) % allOdds.length;
    oddsPerCountry.push(allOdds.slice(startIdx, startIdx + 4));
  }

  return oddsPerCountry;
};

/**
 * Distribute highlights across countries
 */
const distributeHighlights = (
  liveScores: getFootballLeagueLiveScoreResp[],
  headToHead: getFootballCompareHeadToHeadResp[],
  countryCount: number
): any[][] => {
  const allHighlights: any[] = [];

  // Collect highlights from live scores
  if (Array.isArray(liveScores)) {
    liveScores.forEach((score) => {
      if (score && score.event_home_team && score.event_away_team) {
        allHighlights.push({
          id: score.event_key,
          feature: `${score.event_home_team} vs ${score.event_away_team}`,
          detail: `${score.league_name || "League"} - ${
            score.league_round || "Round"
          }`,
          image: score.league_logo
            ? { uri: score.league_logo }
            : PLACEHOLDER_IMAGE,
          highLights: [],
        });
      }
    });
  }

  // Add head-to-head
  if (Array.isArray(headToHead)) {
    headToHead.forEach((h2h) => {
      if (h2h && h2h.event_home_team && h2h.event_away_team) {
        allHighlights.push({
          id: h2h.event_key,
          feature: `${h2h.event_home_team} vs ${h2h.event_away_team}`,
          detail: `${h2h.league_name || "League"} - ${
            h2h.event_date || "Date"
          }`,
          image: h2h.home_team_logo
            ? { uri: h2h.home_team_logo }
            : PLACEHOLDER_IMAGE,
          highLights: [],
        });
      }
    });
  }

  // Distribute highlights (3 per country)
  const highlightsPerCountry: any[][] = [];
  for (let i = 0; i < countryCount; i++) {
    const startIdx = (i * 3) % Math.max(allHighlights.length, 1);
    const highlights = allHighlights.slice(startIdx, startIdx + 3);

    // Ensure at least one highlight
    if (highlights.length === 0) {
      highlights.push({
        id: i + 1,
        feature: "Match Highlights",
        detail: "Recent Matches",
        image: PLACEHOLDER_IMAGE,
        highLights: [],
      });
    }

    highlightsPerCountry.push(highlights);
  }

  return highlightsPerCountry;
};

/**
 * Generate placeholder odds
 */
const generatePlaceholderOdds = (leagues: getFootballLeaguesResp[]): any[] => {
  if (Array.isArray(leagues) && leagues.length > 0) {
    return leagues.slice(0, 4).map((league, index) => ({
      clubName: league.league_name,
      odd: 2.5 + index * 0.5,
    }));
  }

  return [
    { clubName: "Team A", odd: 2.5 },
    { clubName: "Team B", odd: 3.0 },
    { clubName: "Team C", odd: 3.5 },
    { clubName: "Team D", odd: 4.0 },
  ];
};

/**
 * Generate placeholder highlights
 */
const generatePlaceholderHighlights = (): any[] => {
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

/**
 * Transform matches - now with countryIndex for variation
 */
const transformMatches = (
  liveScores: getFootballLeagueLiveScoreResp[],
  topScorers: getFootballLeagueTopScorerResp[],
  standings: getFootballLeagueStandingResp[],
  countryIndex: number
): any[] => {
  const matches: any[] = [];

  // Transform live scores into matches
  if (Array.isArray(liveScores) && liveScores.length > 0) {
    liveScores.forEach((score) => {
      if (!score || !score.event_home_team || !score.event_away_team) return;

      const matchScorers = Array.isArray(score.goalscorers)
        ? score.goalscorers
            .map((goal, index) => {
              const scorerName = goal.home_scorer || goal.away_scorer;
              const scorerId = goal.home_scorer_id || goal.away_scorer_id;
              const teamLogo = goal.home_scorer
                ? score.home_team_logo
                : score.away_team_logo;

              return {
                id: parseInt(scorerId) || index + 1,
                footballerName: scorerName,
                clubName: goal.home_scorer
                  ? score.event_home_team
                  : score.event_away_team,
                clubImg: teamLogo ? { uri: teamLogo } : PLACEHOLDER_IMAGE,
                goals: 1,
              };
            })
            .filter((scorer) => scorer.footballerName)
        : [];

      const allScorers = [
        ...matchScorers,
        ...transformTopScorers(topScorers).slice(0, 10),
      ];

      const finalResult = score.event_final_result || "0 - 0";
      const scores = finalResult.split(" - ");

      matches.push({
        id: score.event_key,
        date: score.event_date
          ? new Date(score.event_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            })
          : new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            }),
        topScorers: allScorers,
        club: [
          {
            name: score.event_home_team,
            image: score.home_team_logo
              ? { uri: score.home_team_logo }
              : PLACEHOLDER_IMAGE,
            score: scores[0]?.trim() || "0",
          },
          {
            name: score.event_away_team,
            image: score.away_team_logo
              ? { uri: score.away_team_logo }
              : PLACEHOLDER_IMAGE,
            score: scores[1]?.trim() || "0",
          },
        ],
      });
    });
  }

  // If no live scores, create varied matches from standings
  if (
    matches.length === 0 &&
    Array.isArray(standings) &&
    standings.length > 1
  ) {
    // Use countryIndex to create variation
    const offset = countryIndex * 2;
    const matchCount = Math.min(10, standings.length - 1);

    for (let i = 0; i < matchCount; i++) {
      const idx = (offset + i) % (standings.length - 1);
      const standing = standings[idx];
      const opponent = standings[idx + 1] || standings[0];

      if (!standing || !standing.standing_Team) continue;

      matches.push({
        id: countryIndex * 100 + i + 1,
        date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        }),
        topScorers: transformTopScorers(topScorers),
        club: [
          {
            name: standing.standing_Team,
            image: standing.team_Logo
              ? { uri: standing.team_Logo }
              : PLACEHOLDER_IMAGE,
            score: standing.standing_F?.toString() || "0",
          },
          {
            name: opponent.standing_Team || "TBD",
            image: opponent.team_Logo
              ? { uri: opponent.team_Logo }
              : PLACEHOLDER_IMAGE,
            score: opponent.standing_F?.toString() || "0",
          },
        ],
      });
    }
  }

  return matches;
};

/**
 * Transform top scorers array
 */
const transformTopScorers = (
  topScorers: getFootballLeagueTopScorerResp[]
): any[] => {
  if (!Array.isArray(topScorers)) return [];

  return topScorers.map((scorer) => ({
    id: scorer.player_key,
    footballerName: scorer.player_name,
    clubName: scorer.team_name,
    clubImg: PLACEHOLDER_IMAGE,
    goals: scorer.goals || 0,
  }));
};

/**
 * Generate placeholder news
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

// /**
//  * Transform API responses into the footballFixtures format
//  */
// export const transformSportDataToFixtures = (
//   countries: getFootBallCountriesResp[],
//   leagues: getFootballLeaguesResp[],
//   topScorers: getFootballLeagueTopScorerResp[],
//   standings: getFootballLeagueStandingResp[],
//   liveScores: getFootballLeagueLiveScoreResp[],
//   headToHead: getFootballCompareHeadToHeadResp[],
//   oddsByMatchId: getFootballOddsResp,
//   oddsLive: getFootballLeagueOddsLiveResp[]
// ): fixtureDataType[] => {
//   // Group leagues by country
//   const leaguesByCountry = leagues.reduce((acc, league) => {
//     const countryKey = league.country_key;
//     if (!acc[countryKey]) {
//       acc[countryKey] = [];
//     }
//     acc[countryKey].push(league);
//     return acc;
//   }, {} as Record<number, getFootballLeaguesResp[]>);

//   // Group live scores by league
//   const liveScoresByLeague = liveScores.reduce((acc, score) => {
//     const leagueKey = score.league_key;
//     if (!acc[leagueKey]) {
//       acc[leagueKey] = [];
//     }
//     acc[leagueKey].push(score);
//     return acc;
//   }, {} as Record<number, getFootballLeagueLiveScoreResp[]>);

//   // Transform each country into a fixture
//   return countries.map((country) => {
//     const countryLeagues = leaguesByCountry[country.country_Key] || [];
//     const firstLeague = countryLeagues[0];
//     const leagueLiveScores = firstLeague
//       ? liveScoresByLeague[firstLeague.league_key] || []
//       : [];

//     return {
//       id: country.country_Key,
//       fixtureName: firstLeague?.league_name || country.country_Name,
//       country: country.country_Name,
//       icon: country.country_Logo
//         ? { uri: country.country_Logo }
//         : PLACEHOLDER_IMAGE,

//       // Transform odds from API
//       odds: transformOdds(oddsByMatchId, oddsLive, countryLeagues),

//       // Transform news (placeholder - implement when news API is available)
//       news: generatePlaceholderNews(),

//       // Transform match highlights from live scores
//       matchHighLights: transformMatchHighlights(leagueLiveScores, headToHead),

//       // Transform matches from live scores and top scorers
//       matches: transformMatches(leagueLiveScores, topScorers, standings),
//     };
//   });
// };

// /**
//  * Transform odds from both APIs into the odds format
//  */
// const transformOdds = (
//   oddsByMatchId: getFootballOddsResp,
//   oddsLive: getFootballLeagueOddsLiveResp[],
//   leagues: getFootballLeaguesResp[]
// ): any[] => {
//   const oddsArray: any[] = [];

//   // Transform odds from match ID API
//   Object.entries(oddsByMatchId).forEach(([matchId, bookmakers]) => {
//     bookmakers.forEach((bookmaker) => {
//       if (bookmaker.odd_1) {
//         oddsArray.push({
//           clubName: `Match ${matchId} - Home`,
//           odd: bookmaker.odd_1,
//         });
//       }
//       if (bookmaker.odd_2) {
//         oddsArray.push({
//           clubName: `Match ${matchId} - Away`,
//           odd: bookmaker.odd_2,
//         });
//       }
//     });
//   });

//   // Transform live odds
//   oddsLive.forEach((odd, index) => {
//     oddsArray.push({
//       clubName: `${odd.odd_name} (${odd.odd_type})`,
//       odd: parseFloat(odd.odd_value) || 0,
//     });
//   });

//   // If no odds available, use leagues as fallback
//   if (oddsArray.length === 0) {
//     return leagues.slice(0, 4).map((league, index) => ({
//       clubName: league.league_name,
//       odd: 2.5 + index * 0.5,
//     }));
//   }

//   return oddsArray.slice(0, 4); // Limit to 4 odds to match original structure
// };

// /**
//  * Transform live scores into match highlights format
//  */
// const transformMatchHighlights = (
//   liveScores: getFootballLeagueLiveScoreResp[],
//   headToHead: getFootballCompareHeadToHeadResp[]
// ): any[] => {
//   const highlights: any[] = [];

//   // Transform live scores into highlights
//   liveScores.slice(0, 3).forEach((score, index) => {
//     highlights.push({
//       id: score.event_key,
//       feature: `${score.event_home_team} vs ${score.event_away_team}`,
//       detail: `${score.league_name} - ${score.league_round}`,
//       image: score.league_logo ? { uri: score.league_logo } : PLACEHOLDER_IMAGE,
//       highLights: [], // YouTube links would need to come from another API
//     });
//   });

//   // Add head-to-head matches as highlights if available
//   headToHead.slice(0, 2).forEach((h2h) => {
//     if (highlights.length < 3) {
//       highlights.push({
//         id: h2h.event_key,
//         feature: `${h2h.event_home_team} vs ${h2h.event_away_team}`,
//         detail: `${h2h.league_name} - ${h2h.event_date}`,
//         image: h2h.home_team_logo
//           ? { uri: h2h.home_team_logo }
//           : PLACEHOLDER_IMAGE,
//         highLights: [],
//       });
//     }
//   });

//   // Ensure at least one highlight
//   if (highlights.length === 0) {
//     highlights.push({
//       id: 1,
//       feature: "Match Highlights",
//       detail: "Recent Matches",
//       image: PLACEHOLDER_IMAGE,
//       highLights: [],
//     });
//   }

//   return highlights;
// };

// /**
//  * Transform live scores and standings into matches format
//  */
// const transformMatches = (
//   liveScores: getFootballLeagueLiveScoreResp[],
//   topScorers: getFootballLeagueTopScorerResp[],
//   standings: getFootballLeagueStandingResp[]
// ): any[] => {
//   const matches: any[] = [];

//   // Transform live scores into matches
//   liveScores.forEach((score) => {
//     // Get goal scorers for this match
//     const matchScorers = score.goalscorers
//       .map((goal, index) => {
//         const scorerName = goal.home_scorer || goal.away_scorer;
//         const scorerId = goal.home_scorer_id || goal.away_scorer_id;
//         const teamLogo = goal.home_scorer
//           ? score.home_team_logo
//           : score.away_team_logo;

//         return {
//           id: parseInt(scorerId) || index + 1,
//           footballerName: scorerName,
//           clubName: goal.home_scorer
//             ? score.event_home_team
//             : score.event_away_team,
//           clubImg: teamLogo ? { uri: teamLogo } : PLACEHOLDER_IMAGE,
//           goals: 1, // Each entry is one goal
//         };
//       })
//       .filter((scorer) => scorer.footballerName); // Remove empty scorers

//     // Merge with top scorers for comprehensive list
//     const allScorers = [
//       ...matchScorers,
//       ...transformTopScorers(topScorers).slice(0, 10),
//     ];

//     matches.push({
//       id: score.event_key,
//       date: new Date(score.event_date).toLocaleDateString("en-US", {
//         day: "numeric",
//         month: "long",
//       }),
//       topScorers: allScorers,
//       club: [
//         {
//           name: score.event_home_team,
//           image: score.home_team_logo
//             ? { uri: score.home_team_logo }
//             : PLACEHOLDER_IMAGE,
//           score: score.event_final_result.split(" - ")[0]?.trim() || "0",
//         },
//         {
//           name: score.event_away_team,
//           image: score.away_team_logo
//             ? { uri: score.away_team_logo }
//             : PLACEHOLDER_IMAGE,
//           score: score.event_final_result.split(" - ")[1]?.trim() || "0",
//         },
//       ],
//     });
//   });

//   // If no live scores, create matches from standings
//   if (matches.length === 0) {
//     standings.slice(0, 10).forEach((standing, index) => {
//       matches.push({
//         id: index + 1,
//         date: new Date().toLocaleDateString("en-US", {
//           day: "numeric",
//           month: "long",
//         }),
//         topScorers: transformTopScorers(topScorers),
//         club: [
//           {
//             name: standing.standing_Team,
//             image: standing.team_Logo
//               ? { uri: standing.team_Logo }
//               : PLACEHOLDER_IMAGE,
//             score: standing.standing_F?.toString() || "0",
//           },
//           {
//             name: standings[index + 1]?.standing_Team || "TBD",
//             image: standings[index + 1]?.team_Logo
//               ? { uri: standings[index + 1].team_Logo }
//               : PLACEHOLDER_IMAGE,
//             score: standings[index + 1]?.standing_F?.toString() || "0",
//           },
//         ],
//       });
//     });
//   }

//   return matches;
// };

// /**
//  * Transform top scorers array
//  */
// const transformTopScorers = (
//   topScorers: getFootballLeagueTopScorerResp[]
// ): any[] => {
//   return topScorers.map((scorer) => ({
//     id: scorer.player_key,
//     footballerName: scorer.player_name,
//     clubName: scorer.team_name,
//     clubImg: PLACEHOLDER_IMAGE, // Team logo not available in top scorers API
//     goals: scorer.goals || 0,
//   }));
// };

// /**
//  * Generate placeholder news (implement when news API is available)
//  */
// const generatePlaceholderNews = () => {
//   return [
//     {
//       id: 1,
//       details: "Latest football news and updates",
//       club: "Various Clubs",
//       time: "Recent",
//       image: PLACEHOLDER_IMAGE,
//     },
//   ];
// };
