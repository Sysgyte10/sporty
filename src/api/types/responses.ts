import { footballCountries, liveFixtures, liveFixturesById } from "./types";

export type GetFootballCountryResponse = {
  get: "countries";
  parameters: unknown[];
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: footballCountries[];
};

export type GetFootballCountryByNameResponse = {
  get: "countries";
  parameters: {
    name: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: footballCountries[];
};

export type GetLiveFixturesResponse = {
  get: "fixtures";
  parameters: {
    live: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: 1;
    total: 1;
  };
  response: liveFixtures[];
};

export type GetLiveFixtureByIdResponse = {
  get: string;
  parameters: {
    ids: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: liveFixturesById[];
};
