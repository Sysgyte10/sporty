import { liveFixturesByDate } from "@src/api/types/types";
import { fixtureDataType, matchesDataType } from "@src/types/types";
import { format } from "date-fns"; // adjust path // adjust path

export const transformFixturesToLeagues = (
  apiResponse: liveFixturesByDate[],
): fixtureDataType[] => {
  const leagueMap = new Map<number, fixtureDataType>();

  apiResponse.forEach((item) => {
    const { fixture, league, teams, goals } = item;

    const formattedDate = format(new Date(fixture.date), "d MMM");

    const match: matchesDataType = {
      id: fixture.id,
      date: formattedDate,
      topScorers: [],
      club: [
        {
          name: teams.home.name,
          image: { uri: teams.home.logo }, // ✅ valid ImageSourcePropType
          score: goals.home?.toString() ?? "-",
        },
        {
          name: teams.away.name,
          image: { uri: teams.away.logo }, // ✅ valid ImageSourcePropType
          score: goals.away?.toString() ?? "-",
        },
      ],
    };

    if (leagueMap.has(league.id)) {
      leagueMap.get(league.id)!.matches.push(match);
    } else {
      leagueMap.set(league.id, {
        id: fixture.id,
        fixtureName: league.name,
        country: league.country,
        icon: { uri: league.logo }, // ✅ valid ImageSourcePropType
        odds: [],
        news: [],
        matchHighLights: [],
        matches: [match],
      });
    }
  });

  return Array.from(leagueMap.values());
};
