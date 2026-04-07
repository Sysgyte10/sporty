import { fixtureDataType } from "@src/types/types";
import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { MatchCard } from "./MatchCard";

interface IFixtureCardProps {
  data: fixtureDataType;
  onPress: (
    fixtureId: string | number | any,
    leagueId: string | number | any,
    icon?: ImageSourcePropType,
    title?: string,
    desc?: string,
  ) => void;
  showDate?: boolean;
  onPressMatchCard?: (
    firstClubId: string,
    secondClubId: string,
    leagueId: any,
  ) => void;
}

export const FixtureCard: React.FC<IFixtureCardProps> = ({
  data,
  onPress,
  showDate,
  onPressMatchCard,
}) => {
  return (
    <View style={styles.fixtureCard}>
      <View style={styles.titleActionBtnContainer}>
        <View style={styles.fixtureImgTitleContainer}>
          <View style={styles.imgContainer}>
            <Image source={data?.icon} style={styles.img} contentFit='cover' />
          </View>

          <View style={styles.fixtureNameNCountryContainer}>
            <CustomText type='semi-bold' size={12} white>
              {data?.fixtureName}
            </CustomText>
            <CustomText type='regular' size={12} style={{ color: "#9C9C9C" }}>
              {data?.country}
            </CustomText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            onPress(
              data?.id,
              data?.leagueId,
              data?.icon,
              data?.fixtureName,
              data?.country,
            )
          }>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={moderateScale(25)}
            color={colors.lightGrey}
          />
        </TouchableOpacity>
      </View>
      {data?.matches &&
        data?.matches.map((matchItem, index) => (
          <MatchCard
            matchItem={matchItem}
            key={index}
            showDate={true}
            onPressMatchCard={() => {
              const clubIds = matchItem.club.map((club) => club.id);
              onPressMatchCard?.(
                clubIds[0] as string,
                clubIds[1] as string,
                data?.leagueId,
              );
            }}
            truncateScoreText
            truncLength={10}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fixtureCard: {
    paddingHorizontal: moderateScale(6),
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(4),
    borderRadius: moderateScale(10),
    // backgroundColor: "#242222",
    // borderColor: "#2F2F2F",
    // borderWidth: DVW(0.3),
    marginBottom: moderateScale(0),
  },
  imgContainer: {
    width: DVW(5),
    height: DVH(2.5),
    borderRadius: moderateScale(100),
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fixtureNameNCountryContainer: {
    gap: moderateScale(0.5),
  },
  titleActionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  fixtureImgTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
