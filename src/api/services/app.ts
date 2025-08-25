import { getNetworkStatus } from "@src/helper/utils";
import { endpoint } from "../endpoint/endpoint";
import { APIRequest } from "../request";

export const getFootballMarket = async () => {
  const { isNetworkConnectedAndReachable } = await getNetworkStatus();
  if (!isNetworkConnectedAndReachable) {
    throw new Error("No internet connection. Please try again later.");
  }
  try {
    const { data, status } = await APIRequest.GET(
      endpoint.APP.GET_FOOTBALL_MARKET,
      {},
      {}
    );
    return { data, status }; // Return response instead of throwing an error
  } catch (err: any) {
    console.log("GetFootball-Matches service error:", err);
    return { error: err.message || "An error occurred" }; // Return error as part of response
  }
};

export const getFootballFixtures = async () => {
  const { isNetworkConnectedAndReachable } = await getNetworkStatus();
  if (!isNetworkConnectedAndReachable) {
    throw new Error("No internet connection. Please try again later.");
  }
  try {
    const { data, status } = await APIRequest.GET(
      endpoint.APP.GET_FOOTBALL_FIXTURES,
      {},
      {}
    );
    return { data, status }; // Return response instead of throwing an error
  } catch (err: any) {
    console.log("GetFootball-Fixtures service error:", err);
    return { error: err.message || "An error occurred" }; // Return error as part of response
  }
};

export const getFootballMatches = async () => {
  const { isNetworkConnectedAndReachable } = await getNetworkStatus();
  if (!isNetworkConnectedAndReachable) {
    throw new Error("No internet connection. Please try again later.");
  }
  try {
    const { data, status } = await APIRequest.GET(
      endpoint.APP.GET_FOOTBALL_MATCHES,
      {},
      {}
    );
    return { data, status }; // Return response instead of throwing an error
  } catch (err: any) {
    console.log("GetFootball-Matches service error:", err);
    return { error: err.message || "An error occurred" }; // Return error as part of response
  }
};

export const getFootballLeagues = async () => {
  const { isNetworkConnectedAndReachable } = await getNetworkStatus();
  if (!isNetworkConnectedAndReachable) {
    throw new Error("No internet connection. Please try again later.");
  }
  try {
    const { data, status } = await APIRequest.GET(
      endpoint.APP.GET_FOOTBALL_LEAGUES,
      {},
      {}
    );
    return { data, status }; // Return response instead of throwing an error
  } catch (err: any) {
    console.log("GetFootball-Leagues service error:", err);
    return { error: err.message || "An error occurred" }; // Return error as part of response
  }
};
