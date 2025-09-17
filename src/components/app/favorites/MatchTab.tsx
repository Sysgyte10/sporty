import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MatchesTab } from "../fixture-info";
import { overViewStateType } from "@src/screens/app/football-screens";
import { footballFixtures } from "@src/constants/fixtures";

export const MatchTab: React.FC<{}> = () => {
  const id: number = 1;
  const [overViewData, setOverViewData] = useState<overViewStateType>({
    filteredMatches: [],
    filteredTopScorer: [],
    matchHightLights: [],
    news: [],
    odds: [],
  });

  const getOverViewData = () => {
    const filteredData = footballFixtures.find((f) => f.id === 1);
    const filteredTopScorers =
      filteredData && filteredData?.matches[0]?.topScorers;
    setOverViewData({
      ...overViewData,
      filteredMatches: filteredData?.matches ?? [],
      filteredTopScorer: filteredTopScorers ?? [],
      matchHightLights: filteredData?.matchHighLights ?? [],
      news: filteredData?.news ?? [],
      odds: filteredData?.odds ?? [],
    });
  };

  useEffect(() => {
    getOverViewData();
  }, [id]);

  return (
    <View>
      <MatchesTab matches={overViewData?.filteredMatches} footerSpacing={20} />
    </View>
  );
};
