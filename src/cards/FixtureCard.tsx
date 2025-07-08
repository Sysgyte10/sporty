import { fixtureDataType } from "@src/types/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";

interface IFixtureCardProps {
  data: fixtureDataType;
  onPress: () => void;
}

export const FixtureCard: React.FC<IFixtureCardProps> = ({ data, onPress }) => {
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
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={moderateScale(40)}
            color={colors.lightGrey}
          />
        </TouchableOpacity>
      </View>
      {data?.matches &&
        data?.matches.map((matchItem, index) => (
          <View key={index} style={styles.matchCard}>
            <View style={styles.subMatchCard}>
              <CustomText type='medium' size={16} lightGrey>
                FT
              </CustomText>
              <View
                style={{
                  marginLeft: moderateScale(-10),
                }}>
                {matchItem &&
                  matchItem?.club.map((club, index) => (
                    <View key={index} style={styles.clubContainer}>
                      <View style={styles.clubImgNameContainer}>
                        <View style={styles.clubImgContainer}>
                          <Image
                            source={club?.image}
                            contentFit='cover'
                            style={styles.clubImg}
                          />
                        </View>
                        <CustomText type='regular' size={12} lightGrey>
                          {club?.name}
                        </CustomText>
                      </View>
                      <CustomText type='regular' size={12} lightGrey>
                        {club?.score}
                      </CustomText>
                    </View>
                  ))}
              </View>
              <TouchableOpacity>
                <AntDesign
                  name='hearto'
                  color={colors.lightGrey}
                  size={moderateScale(25)}
                />
              </TouchableOpacity>
            </View>
          </View>
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
    marginBottom: moderateScale(20),
  },
  imgContainer: {
    width: DVW(15),
    height: DVH(7.5),
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
  matchCard: {
    backgroundColor: colors.black,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(20),
    overflow: "hidden",
  },
  subMatchCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clubContainer: {
    paddingVertical: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "85%",
    paddingHorizontal: moderateScale(10),
  },
  clubImgContainer: {
    width: DVW(4),
    height: DVH(2),
    borderRadius: moderateScale(100),
    overflow: "hidden",
  },
  clubImg: {
    width: "100%",
    height: "100%",
  },
  clubImgNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
});
