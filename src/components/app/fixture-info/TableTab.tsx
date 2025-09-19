import { GoalScorerCard } from "@src/cards";
import { SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import { topScorersDataType } from "@src/types/types";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface ITableTabProps {
  goalScorerData: topScorersDataType[];
}

export const TableTab: React.FC<ITableTabProps> = ({ goalScorerData }) => {
  return (
    <View>
      <View>
        <SectionHeader
          leftText='FIFA CLUB WORLd CUP. GROUP A'
          actionText=' '
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
              <CustomText
                type='medium'
                size={14}
                white
                style={{
                  textAlign: "left",
                  width: "40%",
                }}>
                Team
              </CustomText>
              <CustomText type='medium' size={14} white>
                P
              </CustomText>
              <CustomText type='medium' size={14} white>
                GD
              </CustomText>
              <CustomText type='medium' size={14} white>
                PTS
              </CustomText>
            </View>
          }
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              // <Animated.View
              //   entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
              //   key={index}>
              <View>
                <GoalScorerCard topScorerItem={item} showGD />
              </View>
              // </Animated.View>
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

      <View>
        <SectionHeader
          leftText='FIFA CLUB WORLd CUP. GROUP B'
          actionText=' '
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
              <CustomText
                type='medium'
                size={14}
                white
                style={{
                  textAlign: "left",
                  width: "40%",
                }}>
                Team
              </CustomText>
              <CustomText type='medium' size={14} white>
                P
              </CustomText>
              <CustomText type='medium' size={14} white>
                GD
              </CustomText>
              <CustomText type='medium' size={14} white>
                PTS
              </CustomText>
            </View>
          }
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
                key={index}>
                <GoalScorerCard topScorerItem={item} showGD />
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
