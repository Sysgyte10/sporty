import { hockeyGamesById, hockeyLeagues } from "@src/api/types/types";
import { fixtureDataType } from "@src/types/types";
import { getHockeyGamesById } from "./hockey.service";

const formatMatchDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
};

const transformGameToMatch = (game: hockeyGamesById) => ({
  id: game.id,
  date: formatMatchDate(game.date),
  topScorers: [],
  club: [
    {
      name: game.teams.home.name,
      image: { uri: game.teams.home.logo },
      score: String(game.scores.home ?? 0),
    },
    {
      name: game.teams.away.name,
      image: { uri: game.teams.away.logo },
      score: String(game.scores.away ?? 0),
    },
  ],
});

export const transformLeaguesToFixtures = async (
  leagues: hockeyLeagues[],
): Promise<fixtureDataType[]> => {
  return await Promise.all(
    leagues.map(async (league) => {
      const games = await getHockeyGamesById(league.id);

      return {
        id: league.id,
        leagueId: league.id, // ✅ added
        fixtureName: league.name,
        country: league.country?.name ?? "Unknown",
        icon: { uri: league.logo },
        odds: [],
        news: [],
        matchHighLights: [],
        matches: games.map(transformGameToMatch),
      };
    }),
  );
};
