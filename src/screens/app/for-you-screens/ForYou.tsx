import React, { useEffect, useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import {
  appScreenNames,
  bottomTabScreenNames,
} from "@src/navigation/navigation-names";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { Feather, Ionicons } from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { teamsData } from "@src/constants/user-selection-steps";
import { Image } from "expo-image";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";
import { FormHeader } from "@src/common";
import { NewsTab } from "@src/components/app/fixture-info";
import { overViewStateType } from "../football-screens";
import { footballFixtures } from "@src/constants/fixtures";
import { ScrollContainer } from "@src/screens/ScrollContainer";

export const ForYou = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FOR_YOU>) => {
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
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='For You'
        rightIcon={
          <View style={styles.rightIconContainer}>
            <TouchableOpacity>
              <Feather
                size={moderateScale(20)}
                color={colors.lightGrey}
                name='search'
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name='ellipsis-horizontal'
                color={colors.lightGrey}
                size={moderateScale(20)}
              />
            </TouchableOpacity>
          </View>
        }
        onPressActionBtn={() => navigation.goBack()}
      />
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.clubContainer}>
          {teamsData &&
            teamsData.map((item, index) => (
              <Animated.View
                key={index}
                entering={SlideInRight.delay(index * 150).duration(600)}>
                <TouchableOpacity
                  style={styles.clubImgContainer}
                  onPress={() =>
                    navigation.navigate(bottomTabScreenNames.FOR_YOU_STACK, {
                      screen: appScreenNames.FOR_YOU_NEWS,
                    })
                  }>
                  <Image
                    source={item?.image}
                    contentFit='fill'
                    style={styles.clubImg}
                  />
                </TouchableOpacity>
              </Animated.View>
            ))}
        </ScrollView>
      </View>
      <View
        style={{
          paddingVertical: moderateScale(10),
          paddingHorizontal: moderateScale(5),
        }}>
        <FormHeader
          title='To Headlines'
          description='All the days biggest talking points'
          style={{
            paddingBottom: moderateScale(10),
          }}
        />
        <ScrollContainer>
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <NewsTab
              newsData={overViewData?.news}
              onPress={() =>
                navigation.navigate(bottomTabScreenNames.FOR_YOU_STACK, {
                  screen: appScreenNames.FOR_YOU_NEWS,
                })
              }
            />
          </Animated.View>
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  rightIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  clubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  clubImgContainer: {
    width: DVW(12),
    height: DVH(5.5),
    overflow: "hidden",
  },
  clubImg: {
    width: "100%",
    height: "100%",
  },
});
