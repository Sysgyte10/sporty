import { footballMarketResponse } from "@src/api/types/app";
import { create } from "zustand";

interface IFootballMarketProps {
  footballMarket: footballMarketResponse[] | undefined;
  setFootBallMarket: (data: footballMarketResponse[] | undefined) => void;
}

export const useFootballMarketStore = create<IFootballMarketProps>((set) => ({
  footballMarket: [],
  setFootBallMarket: (footballMarket) =>
    set({ footballMarket: footballMarket }),
}));
