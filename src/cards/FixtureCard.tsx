import { fixtureDataType } from "@src/types/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { MatchCard } from "./MatchCard";

interface IFixtureCardProps {
  data: fixtureDataType;
  onPress: (fixtureId: string | number | any) => void;
  showDate?: boolean;
}

export const FixtureCard: React.FC<IFixtureCardProps> = ({
  data,
  onPress,
  showDate,
}) => {
  return (
    <View style={styles.fixtureCard}>
      <View style={styles.titleActionBtnContainer}>
        <View style={styles.fixtureImgTitleContainer}>
          <View style={styles.imgContainer}>
            <Image source={data?.icon} style={styles.img} contentFit='cover' />
          </View>

          <View style={styles.fixtureNameNCountryContainer}>
            <CustomText type='semi-bold' size={16} white>
              {data?.fixtureName}
            </CustomText>
            <CustomText type='regular' size={13} style={{ color: "#9C9C9C" }}>
              {data?.country}
            </CustomText>
          </View>
        </View>
        <TouchableOpacity onPress={() => onPress(data?.id)}>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={moderateScale(40)}
            color={colors.lightGrey}
          />
        </TouchableOpacity>
      </View>
      {data?.matches &&
        data?.matches
          .slice(0, 2)
          .map((matchItem, index) => (
            <MatchCard matchItem={matchItem} key={index} showDate={showDate} />
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fixtureCard: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: "#242222",
    borderColor: "#2F2F2F",
    borderWidth: DVW(0.3),
    marginBottom: moderateScale(10),
  },
  imgContainer: {
    width: DVW(12),
    height: DVH(6),
    borderRadius: moderateScale(100),
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fixtureNameNCountryContainer: {
    gap: moderateScale(10),
  },
  titleActionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fixtureImgTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
});
