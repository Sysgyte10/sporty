import { fixtureDataType } from "@src/types/types";
import { useState, useMemo } from "react";

export const useFixtureSearch = (fixtures: fixtureDataType[]) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFixtures = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return fixtures;

    return fixtures
      .map((fixture) => {
        // Check if fixtureName matches
        const fixtureNameMatches = fixture.fixtureName
          .toLowerCase()
          .includes(query);

        // Filter matches where any club name matches
        const filteredMatches = fixture.matches.filter((match) =>
          match.club.some((club) => club.name.toLowerCase().includes(query)),
        );

        // Include this league entry if fixtureName matches (return all its matches)
        // OR if any club within its matches matches (return only matching matches)
        if (fixtureNameMatches) return fixture;
        if (filteredMatches.length > 0) {
          return { ...fixture, matches: filteredMatches };
        }

        return null;
      })
      .filter(Boolean) as fixtureDataType[];
  }, [searchQuery, fixtures]);

  return {
    searchQuery,
    setSearchQuery,
    filteredFixtures,
    isSearching: searchQuery.trim().length > 0,
    hasResults: filteredFixtures.length > 0,
  };
};
