import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { Platform, StyleSheet, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AppNavigationHeader } from "../AppHeader";
import { ScrollContainer } from "../ScrollContainer";
import { ButtonLineList } from "@src/common";
import { fixturesOverview, footballFixtures } from "@src/constants/fixtures";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import {
  matchesDataType,
  matchHightLightDataType,
  newsDataTypes,
  topScorersDataType,
} from "@src/types/types";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  MatchesTab,
  NewsTab,
  OverviewTab,
  TableTab,
} from "@src/components/app/fixture-info";

type overViewStateType = {
  filteredMatches: matchesDataType[];
  filteredTopScorer: topScorersDataType[];
  matchHightLights: matchHightLightDataType[];
  news: newsDataTypes[];
};

export const FixtureInfo = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.FIXTURE_INFO>) => {
  const id = route?.params?.fixtureId;
  const [overViewData, setOverViewData] = useState<overViewStateType>({
    filteredMatches: [],
    filteredTopScorer: [],
    matchHightLights: [],
    news: [],
  });
  const [selectedLineList, setSelectedLineList] = useState<string>(
    fixturesOverview[0]
  );

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
    });
  };

  useEffect(() => {
    getOverViewData();
  }, [id]);

  console.log("Fixture Id is", id);
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppNavigationHeader
        title='Back'
        notificationIcon
        heartIcon
        onPressActionBtn={() => navigation.goBack()}
      />
      <View style={styles.ctaContainer}>
        <View style={styles.ctaImgContainer}>
          <Image
            source={require("@src/assets/png/fifa.png")}
            style={styles.ctaImg}
            contentFit='fill'
          />
        </View>
        <View style={styles.ctaTitle}>
          <CustomText size={14} white type='semi-bold'>
            FIFA Club World Cup: Group B
          </CustomText>
          <CustomText size={12} lightGrey type='medium'>
            International
          </CustomText>
        </View>
      </View>
      <View>
        <ButtonLineList
          data={fixturesOverview}
          onButtonPress={(text) => setSelectedLineList(text)}
          selectedBtn={selectedLineList}
        />
      </View>
      <ScrollContainer>
        {selectedLineList === fixturesOverview[0] && (
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <OverviewTab
              matches={overViewData?.filteredMatches}
              topScorerData={
                overViewData?.filteredTopScorer &&
                overViewData?.filteredTopScorer.slice(0, 3)
              }
              matchHighLightData={overViewData?.matchHightLights}
              newsData={overViewData?.news && overViewData?.news?.slice(0, 3)}
              goalScorerData={
                overViewData?.filteredTopScorer &&
                overViewData?.filteredTopScorer
              }
            />
          </Animated.View>
        )}
        {selectedLineList === fixturesOverview[1] && (
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <MatchesTab matches={overViewData?.filteredMatches} />
          </Animated.View>
        )}

        {selectedLineList === fixturesOverview[3] && (
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <NewsTab newsData={overViewData?.news} />
          </Animated.View>
        )}
        {selectedLineList === fixturesOverview[2] && (
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <TableTab goalScorerData={overViewData?.filteredTopScorer} />
          </Animated.View>
        )}
        <View
          style={{
            paddingVertical: DVH(10),
          }}
        />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(0),
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    paddingVertical: moderateScale(5),
  },
  ctaImgContainer: {
    width: DVW(20),
    height: Platform.OS === "ios" ? DVH(9) : DVH(10),
    overflow: "hidden",
  },
  ctaImg: {
    width: "100%",
    height: "100%",
  },
  ctaTitle: {
    gap: moderateScale(10),
  },
  textBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(15),
  },
});
