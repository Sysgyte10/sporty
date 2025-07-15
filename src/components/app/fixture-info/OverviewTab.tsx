import {
  GoalScorerCard,
  MatchCard,
  MatchHighLightCard,
  NewsCard,
  TopScorerCard,
} from "@src/cards";
import { SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { moderateScale, DVW, DVH } from "@src/resources/responsiveness";
import {
  matchesDataType,
  matchHightLightDataType,
  newsDataTypes,
  topScorersDataType,
} from "@src/types/types";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";

interface IOverViewTabProps {
  matches: matchesDataType[];
  topScorerData: topScorersDataType[];
  goalScorerData: topScorersDataType[];
  matchHighLightData: matchHightLightDataType[];
  newsData: newsDataTypes[];
}

export const OverviewTab: React.FC<IOverViewTabProps> = ({
  matches,
  topScorerData,
  matchHighLightData,
  newsData,
  goalScorerData,
}) => {
  console.log(matches);
  return (
    <View>
      <SectionHeader
        leftText='MATCHES'
        actionText='See All'
        containerStyle={{
          marginBottom:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
        }}
      />
      <FlatList
        data={matches && matches.slice(0, 2)}
        contentContainerStyle={{
          paddingVertical: moderateScale(10),
          gap: moderateScale(10),
          marginTop:
            Platform.OS === "ios" ? moderateScale(-20) : moderateScale(-30),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
              key={index}>
              <MatchCard
                showDate
                matchItem={item}
                onLikeItem={() => {}}
                containerStyle={[
                  styles.card,
                  {
                    marginTop: index === 0 ? moderateScale(30) : undefined,
                  },
                ]}
              />
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
      <SectionHeader
        leftText='MATCH HIGHLIGHTS'
        actionText=' '
        containerStyle={styles.textBtnContainer}
      />
      <FlatList
        data={matchHighLightData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={SlideInRight.delay(index * 200).duration(800)}
            key={index}
            style={{
              width: DVW(60),
              height: DVH(15),
              marginRight: moderateScale(10),
            }}>
            <MatchHighLightCard highLightItem={item} />
          </Animated.View>
        )}
      />
      <SectionHeader
        leftText='TOP SCORERS'
        actionText='See All'
        containerStyle={{
          marginBottom:
            Platform.OS === "ios" ? moderateScale(-15) : moderateScale(-20),
        }}
      />
      <FlatList
        data={topScorerData}
        contentContainerStyle={{
          paddingVertical: moderateScale(10),
          gap: moderateScale(10),
          marginTop:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
              key={index}>
              <TopScorerCard
                topScorerItem={item}
                numbering={index + 1}
                style={{
                  marginTop: index === 0 ? moderateScale(15) : undefined,
                }}
              />
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
      <SectionHeader
        leftText='NEWS'
        actionText='See All'
        containerStyle={{
          marginTop:
            Platform.OS === "ios" ? moderateScale(-20) : moderateScale(-10),
          marginBottom:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-15),
        }}
      />
      <FlatList
        data={newsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: moderateScale(10),
        }}
        ListFooterComponent={<View style={{ paddingVertical: DVH(15) }} />}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={SlideInRight.delay(index * 200).duration(800)}
            key={index}
            style={{
              width: DVW(75),
              height: Platform.OS === "ios" ? DVH(35) : DVH(37),
              marginRight: moderateScale(10),
            }}>
            <NewsCard newsItem={item} />
          </Animated.View>
        )}
      />
      <SectionHeader
        leftText='GOALS SCORED'
        actionText='See All'
        containerStyle={{
          marginBottom:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
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
            <CustomText type='medium' size={14} white>
              Per game
            </CustomText>
            <CustomText type='medium' size={14} white>
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
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    width: "100%",
    paddingVertical: moderateScale(5),
  },
  textBtnContainer: {
    marginTop: Platform.OS === "ios" ? moderateScale(-30) : moderateScale(-10),
    marginBottom:
      Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-15),
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
