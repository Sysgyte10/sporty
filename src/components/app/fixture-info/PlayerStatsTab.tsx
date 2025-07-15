import { TopScorerCard } from "@src/cards";
import { ButtonList, SectionHeader } from "@src/common";
import { playerStats } from "@src/constants/fixtures";
import { colors } from "@src/resources/color/color";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { topScorersDataType } from "@src/types/types";
import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IPlayerStatsProps {
  topScorerData: topScorersDataType[];
}

export const PlayerStatsTab: React.FC<IPlayerStatsProps> = ({
  topScorerData,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(playerStats[0]);
  return (
    <View>
      <View style={styles.btnListContainer}>
        <ButtonList
          data={playerStats}
          onButtonPress={(text) => setSelectedItem(text)}
          selectedBtn={selectedItem}
        />
      </View>
      <View>
        <SectionHeader
          leftText={selectedItem}
          actionText='See All'
          containerStyle={{
            marginBottom:
              Platform.OS === "ios" ? moderateScale(-15) : moderateScale(-20),
          }}
          actionTextStyle={{
            color: colors.purple,
          }}
        />
        <FlatList
          data={topScorerData}
          ListFooterComponent={
            <View
              style={{
                paddingVertical: DVH(10),
              }}
            />
          }
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnListContainer: {
    paddingTop: moderateScale(20),
  },
});
