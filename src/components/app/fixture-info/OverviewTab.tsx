import { MatchCard, MatchHighLightCard, TopScorerCard } from "@src/cards";
import { CustomText } from "@src/components/shared";
import { matchHighLightData } from "@src/constants/football";
import { moderateScale, DVW, DVH } from "@src/resources/responsiveness";
import { matchesDataType, topScorersDataType } from "@src/types/types";
import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";

interface IOverViewTabProps {
  matches: matchesDataType[];
  topScorerData: topScorersDataType[];
}

export const OverviewTab: React.FC<IOverViewTabProps> = ({
  matches,
  topScorerData,
}) => {
  return (
    <View>
      <FlatList
        data={matches}
        contentContainerStyle={{
          paddingVertical: moderateScale(10),
          gap: moderateScale(2),
          marginTop:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
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
                containerStyle={styles.card}
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
      <CustomText
        type='medium'
        size={14}
        lightGrey
        style={{
          paddingVertical: moderateScale(10),
        }}>
        MATCH HIGHLIGHTS
      </CustomText>
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
      <View style={styles.textBtnContainer}>
        <CustomText type='medium' size={14} lightGrey>
          TOP SCORERS
        </CustomText>
        <TouchableOpacity>
          <CustomText type='medium' size={14} lightGrey>
            See All
          </CustomText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={topScorerData}
        contentContainerStyle={{
          paddingVertical: moderateScale(10),
          gap: moderateScale(2),
          marginTop:
            Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
              key={index}>
              <TopScorerCard topScorerItem={item} numbering={index + 1} />
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
  },
  textBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(15),
  },
});
