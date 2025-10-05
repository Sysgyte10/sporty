import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { Platform, StyleSheet, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AppNavigationHeader } from "../../AppHeader";
import { ScrollContainer } from "../../ScrollContainer";
import { ButtonLineList } from "@src/common";
import { basketballFixtures, fixturesOverview } from "@src/constants/fixtures";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  MatchesTab,
  NewsTab,
  OddsTab,
  OverviewTab,
  PlayerStatsTab,
  TableTab,
  TeamStatsTab,
} from "@src/components/app/fixture-info";
import { StatusBar } from "expo-status-bar";
import { overViewStateType } from "./FixtureInfo";

export const BasketballFixtureInfo = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.BASKETBALL_FIXTURE_INFO>) => {
  const { fixtureId: id, image, title, desc } = route?.params;
  const [overViewData, setOverViewData] = useState<overViewStateType>({
    filteredMatches: [],
    filteredTopScorer: [],
    matchHightLights: [],
    news: [],
    odds: [],
  });
  const [selectedLineList, setSelectedLineList] = useState<string>(
    fixturesOverview[0]
  );

  const getOverViewData = () => {
    const filteredData = basketballFixtures.find((f) => f.id === id);
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
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <StatusBar style='light' />
      <AppNavigationHeader
        title='Back'
        notificationIcon
        heartIcon
        onPressActionBtn={() => navigation.goBack()}
      />
      <View style={styles.ctaContainer}>
        <View style={styles.ctaImgContainer}>
          <Image source={image} style={styles.ctaImg} contentFit='fill' />
        </View>
        <View style={styles.ctaTitle}>
          <CustomText size={14} white type='semi-bold'>
            {title}
          </CustomText>
          <CustomText size={12} lightGrey type='medium'>
            {desc}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          marginTop: moderateScale(-7),
        }}>
        <ButtonLineList
          data={fixturesOverview}
          onButtonPress={(text) => setSelectedLineList(text)}
          selectedBtn={selectedLineList}
        />
      </View>
      {selectedLineList === fixturesOverview[0] && (
        <ScrollContainer>
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
              fixtureId={id}
              fixtureData={basketballFixtures}
            />
          </Animated.View>
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[1] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <MatchesTab matches={overViewData?.filteredMatches} />
        // </Animated.View>
      )}

      {selectedLineList === fixturesOverview[3] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <NewsTab newsData={overViewData?.news} />
          {/* </Animated.View> */}

          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[2] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <TableTab
            goalScorerData={overViewData?.filteredTopScorer}
            leftText='FIBA BASKETBALL WORLD CUP'
          />
          {/* </Animated.View> */}
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[4] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <OddsTab oddsData={overViewData?.odds} />
          {/* </Animated.View> */}

          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[5] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <PlayerStatsTab topScorerData={overViewData?.filteredTopScorer} />
        // </Animated.View>
      )}
      {selectedLineList === fixturesOverview[6] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <TeamStatsTab goalScorerData={overViewData?.filteredTopScorer} />
        // </Animated.View>
      )}
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
    width: DVW(12),
    height: Platform.OS === "ios" ? DVH(5) : DVH(6),
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
