import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import {
  teamPlayersOrSquadDataType,
  topScorersDataType,
} from "@src/types/types";
import React from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";

interface IGoalScorerCardProps {
  topScorerItem: topScorersDataType | teamPlayersOrSquadDataType;
  type: "scorers" | "players";
  showGD?: boolean;
  style?: StyleProp<ViewStyle>;
  showRightTitleAndValue?: boolean;
}

export const GoalScorerCard: React.FC<IGoalScorerCardProps> = ({
  topScorerItem,
  showGD,
  style,
  type,
  showRightTitleAndValue,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(10),
        }}>
        <View style={[styles.clubImgContainer]}>
          <Image
            source={{
              uri:
                type === "players"
                  ? topScorerItem?.photo
                  : topScorerItem?.clubImg,
            }}
            contentFit='cover'
            style={styles.clubImg}
          />
        </View>
        <CustomText
          type='semi-bold'
          size={12}
          white
          style={{
            width: showGD && showRightTitleAndValue ? DVW(30) : DVW(35),
          }}>
          {type === "players"
            ? topScorerItem?.name
            : topScorerItem?.footballerName}
        </CustomText>
      </View>
      <View
        style={[
          styles.infoContainer,
          {
            width: showGD && showRightTitleAndValue ? DVW(42) : DVW(35),
          },
        ]}>
        <CustomText
          type='medium'
          size={12}
          white
          style={{
            width: showGD && showRightTitleAndValue ? DVW(35) : DVW(35),
          }}>
          {type === "players"
            ? topScorerItem?.position
            : topScorerItem?.clubName}
        </CustomText>
        {showGD && (
          <CustomText type='medium' size={16} white>
            0
          </CustomText>
        )}
        {showRightTitleAndValue && (
          <CustomText type='medium' size={16} white>
            {type === "players" ? topScorerItem?.age : "0"}
          </CustomText>
        )}
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
