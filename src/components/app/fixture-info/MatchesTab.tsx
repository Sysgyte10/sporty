import { MatchCard } from "@src/cards";
import { SectionHeader } from "@src/common";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { matchesDataType } from "@src/types/types";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IMatchesTabProps {
  matches: matchesDataType[];
}

export const MatchesTab: React.FC<IMatchesTabProps> = ({ matches }) => {
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
        data={matches}
        contentContainerStyle={{
          paddingVertical: moderateScale(10),
          gap: moderateScale(10),
          marginTop:
            Platform.OS === "ios" ? moderateScale(-20) : moderateScale(-30),
        }}
        ListFooterComponent={
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        }
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    width: "100%",
  },
});
