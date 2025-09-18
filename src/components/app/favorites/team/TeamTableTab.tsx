import { ButtonList } from "@src/common";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TableTab } from "../../fixture-info";
import { overViewStateType } from "@src/screens/app/football-screens";
import { footballFixtures } from "@src/constants/fixtures";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import { DVH } from "@src/resources/responsiveness";

export const TeamTableTab: React.FC<{}> = () => {
  const [selectedSport, setSelectedSport] = useState<string>("All");
  const id = 1;
  const [overViewData, setOverViewData] = useState<overViewStateType>({
    filteredMatches: [],
    filteredTopScorer: [],
    matchHightLights: [],
    news: [],
    odds: [],
  });

  const getOverViewData = () => {
    const filteredData = footballFixtures.find((f) => f.id === id);
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
      <View
        style={{
          paddingVertical: DVH(1),
        }}>
        <ButtonList
          data={["All", "Home", "Away", "Form"]}
          onButtonPress={(text) => setSelectedSport(text)}
          selectedBtn={selectedSport}
        />
      </View>
      <ScrollContainer>
        <TableTab goalScorerData={overViewData?.filteredTopScorer} />
        <View
          style={{
            paddingVertical: DVH(10),
          }}
        />
      </ScrollContainer>
    </View>
  );
};
