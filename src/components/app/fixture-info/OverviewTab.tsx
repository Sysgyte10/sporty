import { MatchCard, MatchHighLightCard } from "@src/cards";
import { CustomText } from "@src/components/shared";
import { matchHighLightData } from "@src/constants/football";
import { moderateScale, DVW, DVH } from "@src/resources/responsiveness";
import { matchesDataType } from "@src/types/types";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";

interface IOverViewTabProps {
  matches: matchesDataType[];
}

export const OverviewTab: React.FC<IOverViewTabProps> = ({ matches }) => {
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
        ListFooterComponent={<View style={{ paddingVertical: DVH(10) }} />}
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    width: "100%",
  },
});
