import { StatisticsOfFeatures } from "@src/api/types/types";
import { KeyStat } from "@src/components/app/one-match";
import { QueryClient } from "@tanstack/react-query";
import * as Network from "expo-network";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const extractYouTubeVideoId = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

/**
 * logs the response from the API only in development mode
 * @param status
 * @param success
 * @param code
 * @param message
 */

export const APILogger = (
  status: number,
  success: boolean,
  code: string,
  message: string,
) => {
  if (__DEV__) {
    console.log("🚀 Response Log:");
    console.log("Status:", status);
    console.log("Success:", success);
    console.log("Code:", code);
    console.log("Message:", message);
  }
};

/**
 * @returns boolean status of the internetConnection
 */
export const getNetworkStatus = async () => {
  const status = await Network.getNetworkStateAsync();
  return {
    isNetworkConnectedAndReachable: status.isInternetReachable,
  };
};

/**
 * truncates text by default to length of 10 characters or by length of choice.
 * @param text
 * @param length
 * @returns
 */

export const truncateText = (text: string, length = 10): string => {
  if (!text) return "...";

  const limit = Math.max(0, length);
  return text.length > limit ? `${text.substring(0, limit).trim()}...` : text;
};

export const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

export const getMatchStatus = (status?: string): string => {
  const statusMap: Record<string, string> = {
    NS: "Not Started",
    FT: "Full Time",
    "1H": "First Half",
    "2H": "Second Half",
  };

  return statusMap[status ?? ""] || status || "";
};

export const mergeArrays = <T>(data: T[][]): T[] => {
  return data.flat();
};

const parseGrid = (grid: string) => {
  const [row, col] = grid.split(":").map(Number);
  return { row, col };
};

export const groupByRow = (players: any[] | null | undefined) => {
  if (!Array.isArray(players)) return {} as Record<number, any[]>;

  return players.reduce(
    (acc, item) => {
      const grid = item?.player?.grid;
      if (!grid) return acc;

      const { row } = parseGrid(grid);

      if (!acc[row]) acc[row] = [];
      acc[row].push(item.player);

      return acc;
    },
    {} as Record<number, any[]>,
  );
};

export const getPlayerStyle = (row: number, index: number, total: number) => {
  return {
    position: "absolute" as const,
    top: `${(row - 1) * 23}%`, // adjust spacing vertically
    left: `${((index + 1) / (total + 1)) * 100}%`,
    transform: [{ translateX: -25 }],
    alignItems: "center" as const,
  };
};

export const parseStatValue = (value: string | number | null): number => {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") return value;
  const parsed = parseFloat(value.replace("%", ""));
  return isNaN(parsed) ? 0 : parsed;
};

const STAT_TITLES = [
  "Shots on Goal",
  "Shots off Goal",
  "Total Shots",
  "Blocked Shots",
  "Shots insidebox",
  "Shots outsidebox",
  "Fouls",
  "Corner Kicks",
  "Offsides",
  "Ball Possession",
  "Yellow Cards",
  "Red Cards",
  "Goalkeeper Saves",
  "Total passes",
  "Passes accurate",
  "Passes %",
];

export const transformStatistics = (
  data: StatisticsOfFeatures[],
): KeyStat[] => {
  if (!data || data.length < 2) return [];

  const [teamOneData, teamTwoData] = data;

  return STAT_TITLES.map((title) => {
    const teamOneStat = teamOneData.statistics.find((s) => s.type === title);
    const teamTwoStat = teamTwoData.statistics.find((s) => s.type === title);

    const teamOneValue = teamOneStat?.value ?? 0;
    const teamTwoValue = teamTwoStat?.value ?? 0;

    return {
      title,
      clubName: teamOneData.team.name,
      stats: [parseStatValue(teamOneValue), parseStatValue(teamTwoValue)],
      displayStats: [teamOneValue ?? 0, teamTwoValue ?? 0],
    };
  });
};
