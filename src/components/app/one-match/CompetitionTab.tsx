import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ButtonList } from "@src/common";
import Animated, { FadeIn } from "react-native-reanimated";
import { footballFixtures } from "@src/constants/fixtures";
import { TeamStatsTab } from "../fixture-info";
import { useOneMatchDataStore } from "@src/api/store/app";
import { getMatchStatus, truncateText } from "@src/helper/utils";
import { topScorersDataType } from "@src/types/types";

export const CompetitionTab: React.FC<{}> = () => {
  const [selectedSport, setSelectedSport] = useState<string>("All");
  const { competitionData, oneMatchData } = useOneMatchDataStore();
  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View>
        <CustomText
          type='semi-bold'
          size={12}
          lightGrey
          style={{
            paddingVertical: moderateScale(10),
            textAlign: "center",
          }}>
          20.06.2025 02:00
        </CustomText>

        <View style={styles.scoreContainer}>
          <View style={styles.clubImgContainer}>
            <Image
              source={{ uri: oneMatchData?.[0]?.teams?.home?.logo }}
              contentFit='fill'
              style={styles.clubImg}
            />
          </View>
          <CustomText type='bold' size={20} white>
            {oneMatchData?.[0]?.goals?.home ?? ""} -
            {oneMatchData?.[0]?.goals?.away ?? "-"}
          </CustomText>
          <View style={styles.clubImgContainer}>
            <Image
              source={{ uri: oneMatchData?.[0]?.teams?.away?.logo }}
              contentFit='fill'
              style={styles.clubImg}
            />
          </View>
        </View>
        <View
          style={[
            styles.scoreContainer,
            {
              paddingTop: moderateScale(25),
              paddingHorizontal: moderateScale(15),
            },
          ]}>
          <CustomText type='semi-bold' size={10} lightGrey>
            {truncateText(
              `${oneMatchData?.[0]?.teams?.home?.name ?? "Team One"}`,
              15,
            )}
          </CustomText>
          <CustomText type='semi-bold' size={10} white>
            {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            {truncateText(
              `${oneMatchData?.[0]?.teams?.away?.name ?? "Team Two"}`,
              15,
            )}
          </CustomText>
        </View>
      </View>
      <View style={styles.btnListContainer}>
        <ButtonList
          data={["All", "Form"]}
          onButtonPress={(text) => setSelectedSport(text)}
          selectedBtn={selectedSport}
        />
      </View>
      <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <TeamStatsTab
          goalScorerData={competitionData}
          showFilter={false}
          listFooterHeight={0.1}
          leftTitle='Club Names'
          middleText='Goals'
        />
      </Animated.View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
  clubImgContainer: {
    overflow: "hidden",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: "#242222",
  },
  clubImg: {
    width: DVW(10),
    height: Platform.OS === "ios" ? DVH(4) : DVH(5),
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(-20),
    paddingHorizontal: moderateScale(10),
  },
  btnListContainer: {
    paddingVertical: moderateScale(15),
    borderBottomColor: "#5c5757",
  },
});
