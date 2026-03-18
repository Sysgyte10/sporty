import { moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TeamStatsTab } from "../fixture-info";
import { useOneMatchDataStore } from "@src/api/store/app";

interface IPlayersTabProps {
  leftTitle?: string;
  middleText?: string;
  rightText?: string;
}

export const PlayersTab: React.FC<IPlayersTabProps> = ({
  leftTitle,
  middleText,
  rightText,
}) => {
  const { playersData } = useOneMatchDataStore();
  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View />
      <TeamStatsTab
        goalScorerData={playersData}
        type='players'
        showFilter={true}
        listFooterHeight={0.1}
        leftTitle={leftTitle}
        middleText={middleText}
        rightText={rightText}
      />
      {/* <NewsTab newsData={footballFixtures[0]?.news} /> */}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
});
