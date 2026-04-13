import { liveFixtures, liveFixturesByDate } from "@src/api/types/types";
import { fixtureDataType, matchesDataType } from "@src/types/types";
import { format } from "date-fns";

export const transformFixturesToLeagues = (
  apiResponse: liveFixturesByDate[] | liveFixtures[],
): fixtureDataType[] => {
  const leagueMap = new Map<number, fixtureDataType>();

  apiResponse.forEach((item) => {
    const { fixture, league, teams, goals } = item;

    const formattedDate = format(new Date(fixture.date), "d MMM");

    const match: matchesDataType = {
      id: fixture.id,
      date: formattedDate,
      short: fixture.status?.short,
      topScorers: [],
      club: [
        {
          id: teams.home.id,
          name: teams.home.name,
          image: { uri: teams.home.logo },
          score: goals.home?.toString() ?? "-",
        },
        {
          id: teams.away.id,
          name: teams.away.name,
          image: { uri: teams.away.logo },
          score: goals.away?.toString() ?? "-",
        },
      ],
    };

    if (leagueMap.has(league.id)) {
      leagueMap.get(league.id)!.matches.push(match);
    } else {
      leagueMap.set(league.id, {
        leagueId: league?.id,
        id: fixture.id,
        fixtureName: league.name,
        country: league.country,
        icon: { uri: league.logo },
        odds: [],
        news: [],
        matchHighLights: [],
        matches: [match],
      });
    }
  });

  return Array.from(leagueMap.values());
};
