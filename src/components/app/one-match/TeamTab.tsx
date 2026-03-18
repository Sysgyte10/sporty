import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import { OddsTab } from "../fixture-info";
import { footballFixtures } from "@src/constants/fixtures";
import { useOneMatchDataStore } from "@src/api/store/app";
import { getMatchStatus, truncateText } from "@src/helper/utils";

export const TeamTab: React.FC<{}> = () => {
  const { oneMatchData } = useOneMatchDataStore();
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
          {oneMatchData?.[0]?.fixture?.date
            ? new Date(oneMatchData[0].fixture.date).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                },
              )
            : "Match Date"}
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
          <CustomText type='semi-bold' size={10} white>
            {truncateText(
              `${oneMatchData?.[0]?.teams?.home?.name ?? "Team One"}`,
              15,
            )}
          </CustomText>
          <CustomText type='semi-bold' size={10} white>
            {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
          </CustomText>
          <CustomText type='semi-bold' size={10} white>
            {truncateText(
              `${oneMatchData?.[0]?.teams?.away?.name ?? "Team One"}`,
              15,
            )}
          </CustomText>
        </View>
      </View>
      <OddsTab oddsData={footballFixtures[0]?.odds} />
      <View
        style={{
          paddingVertical: DVH(5),
        }}
      />
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
});
