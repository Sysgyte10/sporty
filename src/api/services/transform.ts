// // API Response Transformer
// // Transforms API responses to match your constant fixture data structure

// import { fixtureDataType } from "@src/types/types";
// import {
//   footballLeague,
//   fixtureLeague,
//   extendedLeague,
//   standingLeague,
//   scorerLeague,
//   injuryLeague,
// } from "../types/types";

// interface TransformOptions {
//   defaultIcon?: any;
//   defaultImages?: {
//     news?: any;
//     highlights?: any;
//     clubs?: any;
//   };
// }

// /**
//  * Main transformer function
//  * Combines all API responses and transforms them to your fixture structure
//  */
// export const transformApiToFixtures = (
//   liveScores: footballLeague[],
//   upcomingSchedules: fixtureLeague[],
//   extendedSchedules: extendedLeague[],
//   standings: standingLeague[],
//   footballScorers: scorerLeague[],
//   footballInjuries: injuryLeague[],
//   options: TransformOptions = {}
// ): fixtureDataType[] => {
//   const {
//     defaultIcon = require("@src/assets/png/fixture.png"),
//     defaultImages = {
//       news: require("@src/assets/png/news1.png"),
//       highlights: require("@src/assets/png/highlight1.png"),
//       clubs: require("@src/assets/png/fixture.png"),
//     },
//   } = options;

//   // Combine all fixtures (prioritize live scores, then upcoming)
//   const allFixtures = [...liveScores, ...upcomingSchedules];

//   return allFixtures.map((league, index) => {
//     const leagueId = league.id || String(index + 1);

//     // Find matching extended schedule
//     const extendedData = extendedSchedules?.find((ext) => ext.id === leagueId);

//     // Find matching standings
//     const standingsData = standings?.find((stand) => stand.id === leagueId);

//     // Find matching scorers
//     const scorersData = footballScorers?.find(
//       (scorer) => scorer.id === leagueId
//     );

//     return {
//       id: parseInt(leagueId) || index + 1,
//       fixtureName: league.name,
//       country: league.country,
//       icon: defaultIcon,

//       // Generate odds from top teams in standings
//       odds: generateOddsFromStandings(standingsData),

//       // Generate news (placeholder - integrate with actual news API)
//       news: generateNewsPlaceholder(defaultImages.news),

//       // Generate match highlights (placeholder - integrate with actual API)
//       matchHighLights: generateHighlightsPlaceholder(defaultImages.highlights),

//       // Transform matches
//       matches: transformMatches(
//         league.match,
//         extendedData,
//         scorersData,
//         footballInjuries,
//         defaultImages.clubs
//       ),
//     };
//   });
// };

// /**
//  * Transform matches with all available data
//  */
// const transformMatches = (
//   matches: any,
//   extendedData: extendedLeague | undefined,
//   scorersData: scorerLeague | undefined,
//   injuriesData: injuryLeague[],
//   defaultClubImage: any
// ) => {
//   const matchArray = Array.isArray(matches)
//     ? matches
//     : matches
//     ? [matches]
//     : [];

//   return matchArray.map((match, idx) => {
//     // Find extended match data
//     const extendedMatch = findExtendedMatch(match.id, extendedData);

//     // Find injury data for this match
//     const injuryMatch = findInjuryData(match.id, injuriesData);

//     return {
//       id: idx + 1,
//       date: formatDate(match.date),

//       // Get top scorers for this match's teams
//       topScorers: getTopScorersForMatch(
//         match.home?.id,
//         match.away?.id,
//         scorersData,
//         defaultClubImage
//       ),

//       // Transform club data
//       club: [
//         {
//           name: match.home?.name || "Home Team",
//           image: defaultClubImage,
//           score: match.home?.score || match.home?.goals || "?",
//         },
//         {
//           name: match.away?.name || "Away Team",
//           image: defaultClubImage,
//           score: match.away?.score || match.away?.goals || "?",
//         },
//       ],
//     };
//   });
// };

// /**
//  * Generate odds from standings (top 4 teams)
//  */
// const generateOddsFromStandings = (
//   standingsData: standingLeague | undefined
// ) => {
//   if (!standingsData?.team) {
//     return generateDefaultOdds();
//   }

//   const topTeams = standingsData.team.slice(0, 4);

//   return topTeams.map((team: any, idx: number) => ({
//     clubName: team.name,
//     odd: 2.0 + idx * 0.5, // Generate realistic odds based on position
//   }));
// };

// /**
//  * Get top scorers for specific teams in a match
//  */
// const getTopScorersForMatch = (
//   homeTeamId: string,
//   awayTeamId: string,
//   scorersData: scorerLeague | undefined,
//   defaultImage: any
// ) => {
//   if (!scorersData?.player) {
//     return generateDefaultTopScorers(defaultImage);
//   }

//   // Filter scorers from both teams
//   const matchScorers = scorersData.player.filter(
//     (player: any) =>
//       player.team_id === homeTeamId || player.team_id === awayTeamId
//   );

//   // If we have scorers, use them, otherwise use top scorers from league
//   const scorersToUse =
//     matchScorers.length > 0 ? matchScorers : scorersData.player.slice(0, 10);

//   return scorersToUse.slice(0, 56).map((player: any, idx: number) => ({
//     id: idx + 1,
//     footballerName: player.name,
//     clubName: player.team,
//     clubImg: defaultImage,
//     goals: parseInt(player.goals) || 0,
//   }));
// };

// /**
//  * Find extended match data by ID
//  */
// const findExtendedMatch = (
//   matchId: string,
//   extendedData: extendedLeague | undefined
// ) => {
//   if (!extendedData?.week) return null;

//   for (const week of extendedData.week) {
//     if (!week.match) continue;
//     const matchArray = Array.isArray(week.match) ? week.match : [week.match];
//     const found = matchArray.find((m: any) => m.id === matchId);
//     if (found) return found;
//   }

//   return null;
// };

// /**
//  * Find injury data for a match
//  */
// const findInjuryData = (matchId: string, injuriesData: injuryLeague[]) => {
//   if (!injuriesData) return null;

//   for (const league of injuriesData) {
//     if (!league.match) continue;
//     const matchArray = Array.isArray(league.match)
//       ? league.match
//       : [league.match];
//     const found = matchArray.find((m: any) => m.id === matchId);
//     if (found) return found;
//   }

//   return null;
// };

// /**
//  * Format date string
//  */
// const formatDate = (dateStr: string) => {
//   if (!dateStr) return "TBD";

//   // API returns format like "18.12.2025"
//   const parts = dateStr.split(".");
//   if (parts.length !== 3) return dateStr;

//   const [day, month, year] = parts;
//   const date = new Date(`${year}-${month}-${day}`);

//   if (isNaN(date.getTime())) return dateStr;

//   return date.toLocaleDateString("en-US", {
//     day: "numeric",
//     month: "long",
//   });
// };

// /**
//  * Generate default odds (fallback)
//  */
// const generateDefaultOdds = () => {
//   return [
//     { clubName: "PSG", odd: 2.5 },
//     { clubName: "Real Madrid", odd: 3.0 },
//     { clubName: "Manchester City", odd: 3.25 },
//     { clubName: "Bayern Munchen", odd: 4.0 },
//   ];
// };

// /**
//  * Generate default top scorers (fallback)
//  */
// const generateDefaultTopScorers = (defaultImage: any) => {
//   return Array.from({ length: 56 }, (_, i) => ({
//     id: i + 1,
//     footballerName: "Jamail Musiala",
//     clubName: "Bayern Munich",
//     clubImg: defaultImage,
//     goals: 3,
//   }));
// };

// /**
//  * Generate news placeholder
//  */
// const generateNewsPlaceholder = (defaultImage: any) => {
//   const newsImages = [
//     require("@src/assets/png/news1.png"),
//     require("@src/assets/png/news2.png"),
//     require("@src/assets/png/news4.png"),
//   ];

//   return Array.from({ length: 6 }, (_, i) => ({
//     id: i + 1,
//     details:
//       "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
//     club: "Bayern Munich",
//     time: "4 hrs ago",
//     image: newsImages[i % newsImages.length],
//   }));
// };

// /**
//  * Generate highlights placeholder
//  */
// const generateHighlightsPlaceholder = (defaultImage: any) => {
//   const highlightImages = [
//     require("@src/assets/png/highlight1.png"),
//     require("@src/assets/png/highlight2.png"),
//   ];

//   const highlightVideos = [
//     "https://www.youtube.com/watch?v=ON18ItHo5YE",
//     "https://www.youtube.com/watch?v=g8metHHWcx0",
//     "https://www.youtube.com/watch?v=WRse9_XQuDc",
//     "https://www.youtube.com/watch?v=OihgT6fRLrE",
//     "https://www.youtube.com/watch?v=ns4kM_xqACU",
//     "https://www.youtube.com/watch?v=elnrftCjt9M",
//     "https://www.youtube.com/watch?v=ouH3ApIMHb0",
//   ];

//   return Array.from({ length: 3 }, (_, i) => ({
//     id: i + 1,
//     feature:
//       i === 0
//         ? "Chelsea vs Crystal Palace"
//         : i === 1
//         ? "Man Utd vs Chelsea"
//         : "Chelsea vs Man Utd",
//     detail: "FIFA Club World Cup 2025",
//     image: highlightImages[i % highlightImages.length],
//     highLights: highlightVideos,
//   }));
// };

// API Response Transformer
// Transforms API responses to match your constant fixture data structure

import { fixtureDataType } from "@src/types/types";
import {
  footballLeague,
  fixtureLeague,
  extendedLeague,
  standingLeague,
  scorerLeague,
  injuryLeague,
} from "../types/types";

interface TransformOptions {
  defaultIcon?: any;
  defaultImages?: {
    news?: any;
    highlights?: any;
    clubs?: any;
  };
}

/**
 * Main transformer function
 * Combines all API responses and transforms them to your fixture structure
 */
export const transformApiToFixtures = (
  liveScores: footballLeague[],
  upcomingSchedules: fixtureLeague[],
  extendedSchedules: extendedLeague[],
  standings: standingLeague[],
  footballScorers: scorerLeague[],
  footballInjuries: injuryLeague[],
  options: TransformOptions = {}
): fixtureDataType[] => {
  const {
    defaultIcon = require("@src/assets/png/fixture.png"),
    defaultImages = {
      news: require("@src/assets/png/news1.png"),
      highlights: require("@src/assets/png/highlight1.png"),
      clubs: require("@src/assets/png/fixture.png"),
    },
  } = options;

  // Combine all fixtures (prioritize live scores, then upcoming)
  const allFixtures = [...liveScores, ...upcomingSchedules];

  return allFixtures.map((league, index) => {
    const leagueId = league.id || String(index + 1);

    // Find matching extended schedule
    const extendedData = extendedSchedules?.find((ext) => ext.id === leagueId);

    // Find matching standings
    const standingsData = standings?.find((stand) => stand.id === leagueId);

    // Find matching scorers
    const scorersData = footballScorers?.find(
      (scorer) => scorer.id === leagueId
    );

    return {
      id: parseInt(leagueId) || index + 1,
      fixtureName: league.name,
      country: league.country,
      icon: defaultIcon,

      // Generate odds from top teams in standings
      odds: generateOddsFromStandings(standingsData),

      // Generate news (placeholder - integrate with actual news API)
      news: generateNewsPlaceholder(defaultImages.news),

      // Generate match highlights (placeholder - integrate with actual API)
      matchHighLights: generateHighlightsPlaceholder(defaultImages.highlights),

      // Transform matches
      matches: transformMatches(
        league.match,
        extendedData,
        scorersData,
        footballInjuries,
        defaultImages.clubs
      ),
    };
  });
};

/**
 * Transform matches with all available data
 */
const transformMatches = (
  matches: any,
  extendedData: extendedLeague | undefined,
  scorersData: scorerLeague | undefined,
  injuriesData: injuryLeague[],
  defaultClubImage: any
) => {
  const matchArray = Array.isArray(matches)
    ? matches
    : matches
    ? [matches]
    : [];

  return matchArray.map((match, idx) => {
    // Find extended match data
    const extendedMatch = findExtendedMatch(match.id, extendedData);

    // Find injury data for this match
    const injuryMatch = findInjuryData(match.id, injuriesData);

    return {
      id: idx + 1,
      date: formatDate(match.date),

      // Get top scorers for this match's teams
      topScorers: getTopScorersForMatch(
        match.home?.id,
        match.away?.id,
        scorersData,
        defaultClubImage
      ),

      // Transform club data
      club: [
        {
          name: match.home?.name || "Home Team",
          image: defaultClubImage,
          score: match.home?.score || match.home?.goals || "?",
        },
        {
          name: match.away?.name || "Away Team",
          image: defaultClubImage,
          score: match.away?.score || match.away?.goals || "?",
        },
      ],
    };
  });
};

/**
 * Generate odds from standings (top 4 teams)
 */
const generateOddsFromStandings = (
  standingsData: standingLeague | undefined
) => {
  if (!standingsData?.team) {
    return generateDefaultOdds();
  }

  const topTeams = standingsData.team.slice(0, 4);

  return topTeams.map((team: any, idx: number) => ({
    clubName: team.name,
    odd: 2.0 + idx * 0.5, // Generate realistic odds based on position
  }));
};

/**
 * Get top scorers for specific teams in a match
 */
const getTopScorersForMatch = (
  homeTeamId: string,
  awayTeamId: string,
  scorersData: scorerLeague | undefined,
  defaultImage: any
) => {
  if (!scorersData?.player) {
    return generateDefaultTopScorers(defaultImage);
  }

  // Filter scorers from both teams
  const matchScorers = scorersData.player.filter(
    (player: any) =>
      player.team_id === homeTeamId || player.team_id === awayTeamId
  );

  // If we have scorers, use them, otherwise use top scorers from league
  const scorersToUse =
    matchScorers.length > 0 ? matchScorers : scorersData.player.slice(0, 10);

  return scorersToUse.slice(0, 56).map((player: any, idx: number) => ({
    id: idx + 1,
    footballerName: player.name,
    clubName: player.team,
    clubImg: defaultImage,
    goals: parseInt(player.goals) || 0,
  }));
};

/**
 * Find extended match data by ID
 */
const findExtendedMatch = (
  matchId: string,
  extendedData: extendedLeague | undefined
) => {
  if (!extendedData?.week) return null;

  for (const week of extendedData.week) {
    if (!week.match) continue;
    const matchArray = Array.isArray(week.match) ? week.match : [week.match];
    const found = matchArray.find((m: any) => m.id === matchId);
    if (found) return found;
  }

  return null;
};

/**
 * Find injury data for a match
 */
const findInjuryData = (matchId: string, injuriesData: injuryLeague[]) => {
  if (!injuriesData) return null;

  for (const league of injuriesData) {
    if (!league.match) continue;
    const matchArray = Array.isArray(league.match)
      ? league.match
      : [league.match];
    const found = matchArray.find((m: any) => m.id === matchId);
    if (found) return found;
  }

  return null;
};

/**
 * Format date string
 */
const formatDate = (dateStr: string) => {
  if (!dateStr) return "TBD";

  // API returns format like "18.12.2025"
  const parts = dateStr.split(".");
  if (parts.length !== 3) return dateStr;

  const [day, month, year] = parts;
  const date = new Date(`${year}-${month}-${day}`);

  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
};

/**
 * Generate default odds (fallback)
 */
const generateDefaultOdds = () => {
  return [
    { clubName: "PSG", odd: 2.5 },
    { clubName: "Real Madrid", odd: 3.0 },
    { clubName: "Manchester City", odd: 3.25 },
    { clubName: "Bayern Munchen", odd: 4.0 },
  ];
};

/**
 * Generate default top scorers (fallback)
 */
const generateDefaultTopScorers = (defaultImage: any) => {
  return Array.from({ length: 56 }, (_, i) => ({
    id: i + 1,
    footballerName: "Jamail Musiala",
    clubName: "Bayern Munich",
    clubImg: defaultImage,
    goals: 3,
  }));
};

/**
 * Generate news placeholder
 */
const generateNewsPlaceholder = (defaultImage: any) => {
  const newsImages = [
    require("@src/assets/png/news1.png"),
    require("@src/assets/png/news2.png"),
    require("@src/assets/png/news4.png"),
  ];

  return Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    details:
      "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
    club: "Bayern Munich",
    time: "4 hrs ago",
    image: newsImages[i % newsImages.length],
  }));
};

/**
 * Generate highlights placeholder
 */
const generateHighlightsPlaceholder = (defaultImage: any) => {
  const highlightImages = [
    require("@src/assets/png/highlight1.png"),
    require("@src/assets/png/highlight2.png"),
  ];

  const highlightVideos = [
    "https://www.youtube.com/watch?v=ON18ItHo5YE",
    "https://www.youtube.com/watch?v=g8metHHWcx0",
    "https://www.youtube.com/watch?v=WRse9_XQuDc",
    "https://www.youtube.com/watch?v=OihgT6fRLrE",
    "https://www.youtube.com/watch?v=ns4kM_xqACU",
    "https://www.youtube.com/watch?v=elnrftCjt9M",
    "https://www.youtube.com/watch?v=ouH3ApIMHb0",
  ];

  return Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    feature:
      i === 0
        ? "Chelsea vs Crystal Palace"
        : i === 1
        ? "Man Utd vs Chelsea"
        : "Chelsea vs Man Utd",
    detail: "FIFA Club World Cup 2025",
    image: highlightImages[i % highlightImages.length],
    highLights: highlightVideos,
  }));
};
