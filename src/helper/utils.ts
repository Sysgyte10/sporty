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
