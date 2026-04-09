import { useOneMatchDataStore } from "@src/api/store/app";
import { GoalScorerCard } from "@src/cards";
import { ButtonList, SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { teamStats } from "@src/constants/fixtures";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import {
  teamPlayersOrSquadDataType,
  topScorersDataType,
} from "@src/types/types";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";

interface ScorerProps {
  type: "scorers";
  goalScorerData: topScorersDataType[];
}

interface PlayerProps {
  type: "players";
  goalScorerData: teamPlayersOrSquadDataType[];
}

type ITeamStatsTabProps = (ScorerProps | PlayerProps) & {
  showFilter?: boolean;
  listFooterHeight?: number;
  leftTitle?: string;
  middleText?: string;
  rightText?: string;
  selectedBtn?: string;
  setSelectedBtn?: (text: string) => void;
  type?: "scorers" | "players";
};

export const TeamStatsTab: React.FC<ITeamStatsTabProps> = ({
  goalScorerData,
  showFilter = true,
  listFooterHeight,
  leftTitle,
  middleText,
  rightText,
  type,
}) => {
  const { setSelectedBtn, selectedBtn } = useOneMatchDataStore();
  return (
    <View>
      {showFilter && (
        <View style={styles.btnListContainer}>
          <ButtonList
            data={["Home", "Away"]}
            onButtonPress={(text) => setSelectedBtn?.(text as "Home" | "Away")}
            selectedBtn={selectedBtn}
          />
        </View>
      )}
      <View>
        <SectionHeader
          leftText={selectedBtn}
          actionText='  '
          containerStyle={{
            marginBottom:
              Platform.OS === "ios" ? moderateScale(-15) : moderateScale(-20),
          }}
        />
        <FlatList<teamPlayersOrSquadDataType | topScorersDataType>
          data={goalScorerData}
          ListFooterComponent={
            <View
              style={{
                paddingVertical: DVH(listFooterHeight || 25),
              }}
            />
          }
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            // gap: moderateScale(10),
            marginTop: 0,
            // Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
          }}
          ListHeaderComponent={
            <View style={styles.flatListHeaderStyle}>
              <CustomText
                type='bold'
                size={12}
                white
                style={{
                  textAlign: "left",
                  width: leftTitle ? "35%" : "42%",
                }}>
                {leftTitle || `Goal Scored`}
              </CustomText>
              <CustomText type='bold' size={12} white>
                {middleText || `Per game`}
              </CustomText>
              <CustomText type='bold' size={12} white>
                {rightText || `Total`}
              </CustomText>
            </View>
          }
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <GoalScorerCard
                  topScorerItem={item}
                  showGD
                  showRightTitleAndValue
                  type={type === "players" ? "players" : "scorers"}
                />
              </View>
            );
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnListContainer: {
    paddingTop: moderateScale(20),
  },
  flatListHeaderStyle: {
    backgroundColor: "#242222",
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(40),
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
  },
});
