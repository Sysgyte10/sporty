import { ButtonList } from "@src/common";
import { footballFixtures } from "@src/constants/fixtures";
import { overViewStateType } from "@src/screens/app/football-screens";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MatchesTab } from "../../fixture-info";
import { moderateScale } from "@src/resources/responsiveness";

export const TeamMatchesTab: React.FC<{}> = () => {
  const [selectedSport, setSelectedSport] = useState<string>("Results");
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
      <View>
        <ButtonList
          data={["Results"]}
          onButtonPress={(text) => setSelectedSport(text)}
          selectedBtn={selectedSport}
        />
      </View>
      <MatchesTab matches={overViewData?.filteredMatches} footerSpacing={10} />
    </View>
  );
};
