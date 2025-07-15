import { GoalScorerCard } from "@src/cards";
import { ButtonList, SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { teamStats } from "@src/constants/fixtures";
import { moderateScale } from "@src/resources/responsiveness";
import { topScorersDataType } from "@src/types/types";
import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface ITeamStatsTabProps {
  goalScorerData: topScorersDataType[];
}

export const TeamStatsTab: React.FC<ITeamStatsTabProps> = ({
  goalScorerData,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(teamStats[0]);
  return (
    <View>
      <View style={styles.btnListContainer}>
        <ButtonList
          data={teamStats}
          onButtonPress={(text) => setSelectedItem(text)}
          selectedBtn={selectedItem}
        />
      </View>
      <View>
        <SectionHeader
          leftText={selectedItem}
          actionText='  '
          containerStyle={{
            marginBottom:
              Platform.OS === "ios" ? moderateScale(-15) : moderateScale(-20),
          }}
        />
        <FlatList
          data={goalScorerData}
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            // gap: moderateScale(10),
            marginTop: 0,
            // Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
          }}
          ListHeaderComponent={
            <View style={styles.flatListHeaderStyle}>
              <CustomText
                type='medium'
                size={12}
                white
                style={{
                  textAlign: "left",
                  width: "42%",
                }}>
                Goal Scored
              </CustomText>
              <CustomText type='medium' size={12} white>
                Per game
              </CustomText>
              <CustomText type='medium' size={12} white>
                Total
              </CustomText>
            </View>
          }
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
                key={index}>
                <GoalScorerCard topScorerItem={item} />
              </Animated.View>
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
    justifyContent: "flex-end",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
  },
});
