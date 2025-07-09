import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { topScorersDataType } from "@src/types/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

interface ITopScorerCardProps {
  topScorerItem: topScorersDataType;
  numbering: number;
}

export const TopScorerCard: React.FC<ITopScorerCardProps> = ({
  topScorerItem,
  numbering,
}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(20),
        }}>
        <CustomText type='medium' size={16} lightGrey>
          {numbering}
        </CustomText>
        <View style={styles.imgInfoContainer}>
          <View style={styles.clubImgContainer}>
            <Image
              source={topScorerItem?.clubImg}
              contentFit='cover'
              style={styles.clubImg}
            />
          </View>
          <View style={styles.infoContainer}>
            <CustomText type='semi-bold' size={12} white>
              {topScorerItem?.footballerName}
            </CustomText>
            <CustomText type='regular' size={11} style={{ color: "#9C9C9C" }}>
              {topScorerItem?.clubName}
            </CustomText>
          </View>
        </View>
      </View>
      <CustomText type='medium' size={16} lightGrey>
        {topScorerItem?.goals}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(6),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clubImgContainer: {
    width: DVW(10),
    height: DVH(5),
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
    gap: moderateScale(6),
  },
});
