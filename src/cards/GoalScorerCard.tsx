import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { topScorersDataType } from "@src/types/types";
import React from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";

interface IGoalScorerCardProps {
  topScorerItem: topScorersDataType;
  showGD?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const GoalScorerCard: React.FC<IGoalScorerCardProps> = ({
  topScorerItem,
  showGD,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.clubImgContainer}>
        <Image
          source={topScorerItem?.clubImg}
          contentFit='cover'
          style={styles.clubImg}
        />
      </View>
      <View style={styles.infoContainer}>
        <CustomText type='semi-bold' size={12} white>
          {topScorerItem?.clubName}
        </CustomText>
        <CustomText type='medium' size={16} white>
          1
        </CustomText>
        {showGD && (
          <CustomText type='medium' size={16} white>
            0
          </CustomText>
        )}
        <CustomText type='medium' size={16} white>
          {topScorerItem?.goals}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    // borderRadius: moderateScale(10),
    // marginTop: moderateScale(10),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clubImgContainer: {
    width: DVW(7),
    height: Platform.OS === "ios" ? DVH(3) : DVH(3.5),
    borderRadius: moderateScale(100),
    overflow: "hidden",
  },
  clubImg: {
    width: "100%",
    height: "100%",
  },
  imgInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "88%",
  },
});
