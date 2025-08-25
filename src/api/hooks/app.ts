import { useEffect, useCallback } from "react";
import {
  getFootballFixtures,
  getFootballLeagues,
  getFootballMarket,
  getFootballMatches,
} from "../services/app";
import {
  useFootballFixturesStore,
  useFootballLeaguesStore,
  useFootballMarketStore,
  useFootballMatchesStore,
} from "../store/app";
import { useApiStatus } from "@src/hooks";

export const useGetFootballMarkets = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useApiStatus();

  const { footballMarket, setFootBallMarket } = useFootballMarketStore();

  const initiateGetFootballMarkets = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data, status } = await getFootballMarket();

      if (status === 200) {
        setFootBallMarket(data?.data);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setIsSuccess, setFootBallMarket]);

  useEffect(() => {
    if (!footballMarket || footballMarket.length === 0) {
      initiateGetFootballMarkets();
    }
  }, [footballMarket, initiateGetFootballMarkets]);

  return {
    footballMarket,
    isLoading,
    isError,
    isSuccess,
    refetch: initiateGetFootballMarkets,
  };
};

export const useGetFootballFixtures = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useApiStatus();

  const { footballFixtures, setFootBallFixtures } = useFootballFixturesStore();

  const initiateGetFootballFixtures = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data, status } = await getFootballFixtures();

      if (status === 200) {
        setFootBallFixtures(data?.data);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
      console.log("data", err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setIsSuccess, setFootBallFixtures]);

  useEffect(() => {
    if (!footballFixtures || footballFixtures.length === 0) {
      initiateGetFootballFixtures();
    }
  }, [footballFixtures, initiateGetFootballFixtures]);

  return {
    footballFixtures,
    isLoading,
    isError,
    isSuccess,
    refetch: initiateGetFootballFixtures,
  };
};

export const useGetFootballMatches = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useApiStatus();

  const { footballMatches, setFootBallMatches } = useFootballMatchesStore();

  const initiateGetFootballMatches = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data, status } = await getFootballMatches();

      if (status === 200) {
        setFootBallMatches(data?.response);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
      console.log("data", err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setIsSuccess, setFootBallMatches]);

  useEffect(() => {
    if (!footballMatches || footballMatches.length === 0) {
      initiateGetFootballMatches();
    }
  }, [footballMatches, initiateGetFootballMatches]);

  return {
    footballMatches,
    isLoading,
    isError,
    isSuccess,
    refetch: initiateGetFootballMatches,
  };
};

export const useGetFootballLeagues = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useApiStatus();

  const { footballLeagues, setFootBallLeagues } = useFootballLeaguesStore();

  const initiateGetFootballLeagues = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data, status } = await getFootballLeagues();

      if (status === 200) {
        setFootBallLeagues(data?.data);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setIsSuccess, setFootBallLeagues]);

  useEffect(() => {
    if (!footballLeagues || footballLeagues.length === 0) {
      initiateGetFootballLeagues();
    }
  }, [footballLeagues, initiateGetFootballLeagues]);

  return {
    footballLeagues,
    isLoading,
    isError,
    isSuccess,
    refetch: initiateGetFootballLeagues,
  };
};
