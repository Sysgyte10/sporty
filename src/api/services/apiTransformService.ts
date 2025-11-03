// Types for API responses
interface ScoreBatMatch {
  title: string;
  competition: string;
  matchviewUrl: string;
  competitionUrl: string;
  thumbnail: string;
  date: string;
  videos: Array<{
    id: string;
    title: string;
    embed: string;
  }>;
}

interface SportMonkFixture {
  id: number;
  sport_Id: number;
  league_Id: number;
  season_Id: number;
  stage_Id: number;
  group_Id: number;
  aggregate_Id: number;
  round_Id: number;
  state_Id: number;
  venue_Id: number;
  name: string;
  starting_At: string;
  result_Info: string;
  leg: string;
  details: string;
  length: number;
  placeholder: boolean;
  has_Odds: boolean;
  has_Premium_Odds: boolean;
  starting_At_Timestamp: number;
}

interface SportMonkLeague {
  id: number;
  sport_id: number;
  country_id: number;
  name: string;
  active: boolean;
  short_code: string;
  image_path: string;
  type: string;
  sub_type: string;
  last_played_at: string;
  category: number;
  has_jerseys: boolean;
}

interface Market {
  id: number;
  legacy_id: number | null;
  name: string;
  developer_name: string;
  has_winning_calculations: boolean;
}

// Your existing type structure
interface fixtureDataType {
  id: number;
  fixtureName: string;
  country: string;
  icon: any;
  odds: Array<{
    clubName: string;
    odd: number;
  }>;
  news: Array<{
    id: number;
    details: string;
    club: string;
    time: string;
    image: any;
  }>;
  matchHighLights: Array<{
    id: number;
    feature: string;
    detail: string;
    image: any;
    highLights: string[];
  }>;
  matches: Array<{
    id: number;
    date: string;
    topScorers: Array<{
      id: number;
      footballerName: string;
      clubName: string;
      clubImg: any;
      goals: number;
    }>;
    club: Array<{
      name: string;
      image: any;
      score: string;
    }>;
  }>;
}

// Base URL
const BASE_URL = "https://zairapay.com/sysgytesport";

// Default placeholder image
const DEFAULT_IMAGE = require("@src/assets/png/fixture.png");

/**
 * Fetch and transform ScoreBat matches
 */
export async function fetchScoreBatMatches(): Promise<ScoreBatMatch[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/Scorebat/matches`);
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error("Error fetching ScoreBat matches:", error);
    return [];
  }
}

/**
 * Fetch SportMonk fixtures
 */
export async function fetchSportMonkFixtures(): Promise<SportMonkFixture[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Sportmonkfixture/footbal/fixtures`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching SportMonk fixtures:", error);
    return [];
  }
}

/**
 * Fetch fixtures by date
 */
export async function fetchFixturesByDate(
  date: string
): Promise<SportMonkFixture[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Sportmonkfixture/fixtures/date/${date}`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching fixtures by date:", error);
    return [];
  }
}

/**
 * Fetch fixtures between dates
 */
export async function fetchFixturesBetweenDates(
  startDate: string,
  endDate: string
): Promise<SportMonkFixture[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Sportmonkfixture/fixtures/between/${startDate}/${endDate}`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching fixtures between dates:", error);
    return [];
  }
}

/**
 * Fetch leagues
 */
export async function fetchLeagues(): Promise<SportMonkLeague[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/Sportmonkleague/leagues`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return [];
  }
}

/**
 * Fetch league by ID
 */
export async function fetchLeagueById(
  id: number
): Promise<SportMonkLeague | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/Sportmonkleague/${id}`);
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching league by ID:", error);
    return null;
  }
}

/**
 * Fetch markets
 */
export async function fetchMarkets(): Promise<Market[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/Sportmonkmarket/football/markets`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching markets:", error);
    return [];
  }
}

/**
 * Transform ScoreBat matches to match highlights format
 */
function transformScoreBatToHighlights(matches: ScoreBatMatch[]) {
  return matches.map((match, index) => ({
    id: index + 1,
    feature: match.title,
    detail: match.competition,
    image: match.thumbnail || DEFAULT_IMAGE,
    highLights: match.videos.map(
      (video) => video.embed || `https://www.youtube.com/watch?v=${video.id}`
    ),
  }));
}

/**
 * Transform ScoreBat matches to news format
 */
function transformScoreBatToNews(matches: ScoreBatMatch[]) {
  return matches.slice(0, 6).map((match, index) => ({
    id: index + 1,
    details: match.title,
    club: match.competition,
    time:
      new Date(match.date).toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      }) + " ago",
    image: match.thumbnail || DEFAULT_IMAGE,
  }));
}

/**
 * Transform SportMonk fixtures to matches format
 */
function transformFixturesToMatches(fixtures: SportMonkFixture[]) {
  return fixtures.map((fixture, index) => ({
    id: index + 1,
    date: new Date(fixture.starting_At).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    }),
    topScorers: [], // You'll need additional API for top scorers
    club: [
      {
        name: fixture.name.split(" vs ")[0] || "Team 1",
        image: DEFAULT_IMAGE,
        score: fixture.result_Info?.split("-")[0]?.trim() || "0",
      },
      {
        name: fixture.name.split(" vs ")[1] || "Team 2",
        image: DEFAULT_IMAGE,
        score: fixture.result_Info?.split("-")[1]?.trim() || "0",
      },
    ],
  }));
}

/**
 * Generate random odds for clubs (placeholder until you have real odds API)
 */
function generateOdds(leagues: SportMonkLeague[]) {
  const topClubs = [
    "PSG",
    "Real Madrid",
    "Manchester City",
    "Bayern Munich",
    "Liverpool",
    "Barcelona",
  ];
  return topClubs.map((club) => ({
    clubName: club,
    odd: parseFloat((Math.random() * 3 + 1.5).toFixed(2)),
  }));
}

/**
 * Main transformation function - combines all API data into your fixture format
 */
export async function fetchAndTransformFootballData(): Promise<
  fixtureDataType[]
> {
  try {
    // Fetch all data in parallel
    const [scoreBatMatches, sportMonkFixtures, leagues] = await Promise.all([
      fetchScoreBatMatches(),
      fetchSportMonkFixtures(),
      fetchLeagues(),
    ]);

    // Transform data for each league
    const transformedData: fixtureDataType[] = leagues
      .slice(0, 5)
      .map((league, index) => ({
        id: league.id,
        fixtureName: league.name,
        country: league.short_code || "International",
        icon: league.image_path || DEFAULT_IMAGE,
        odds: generateOdds(leagues),
        news: transformScoreBatToNews(scoreBatMatches),
        matchHighLights: transformScoreBatToHighlights(
          scoreBatMatches.slice(0, 3)
        ),
        matches: transformFixturesToMatches(
          sportMonkFixtures.slice(index * 3, (index + 1) * 3)
        ),
      }));

    return transformedData;
  } catch (error) {
    console.error("Error fetching and transforming football data:", error);
    return [];
  }
}

/**
 * Fetch data for a specific league
 */
export async function fetchLeagueData(
  leagueId: number
): Promise<fixtureDataType | null> {
  try {
    const [league, scoreBatMatches, sportMonkFixtures] = await Promise.all([
      fetchLeagueById(leagueId),
      fetchScoreBatMatches(),
      fetchSportMonkFixtures(),
    ]);

    if (!league) return null;

    return {
      id: league.id,
      fixtureName: league.name,
      country: league.short_code || "International",
      icon: league.image_path || DEFAULT_IMAGE,
      odds: generateOdds([league]),
      news: transformScoreBatToNews(scoreBatMatches),
      matchHighLights: transformScoreBatToHighlights(
        scoreBatMatches.slice(0, 3)
      ),
      matches: transformFixturesToMatches(sportMonkFixtures.slice(0, 9)),
    };
  } catch (error) {
    console.error("Error fetching league data:", error);
    return null;
  }
}

/**
 * Usage example:
 *
 * // In your component:
 * import { fetchAndTransformFootballData } from './apiTransformService';
 *
 * const [fixtures, setFixtures] = useState<fixtureDataType[]>([]);
 *
 * useEffect(() => {
 *   fetchAndTransformFootballData().then(data => {
 *     setFixtures(data);
 *   });
 * }, []);
 */
