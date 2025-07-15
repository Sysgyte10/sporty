import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { CustomText } from "@src/components/shared";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { oddsDataType } from "@src/types/types";
import { colors } from "@src/resources/color/color";

interface IOddsCardProps {
  style?: StyleProp<ViewStyle>;
  oddsItem: oddsDataType;
}

export const OddsCard: React.FC<IOddsCardProps> = ({ style, oddsItem }) => {
  return (
    <View style={[styles.card, style]}>
      <CustomText type='semi-bold' size={12} white>
        {oddsItem?.clubName}
      </CustomText>
      <View style={styles.oddsContainer}>
        <CustomText type='regular' size={10} lightGrey>
          {oddsItem?.odd}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: DVW(0.2),
    borderBottomColor: colors.lightGrey,
  },
  oddsContainer: {
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(50),
    borderWidth: DVW(0.2),
    borderColor: colors.lightGrey,
  },
});
