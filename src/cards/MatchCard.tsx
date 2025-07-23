import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { matchesDataType } from "@src/types/types";

interface IMatchCardProps {
  showDate?: boolean;
  matchItem: matchesDataType;
  onLikeItem?: (itemId: string | number | any) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const MatchCard: React.FC<IMatchCardProps> = ({
  showDate,
  matchItem,
  onLikeItem,
  containerStyle,
}) => {
  return (
    <View style={[styles.matchCard, containerStyle]}>
      <View style={styles.subMatchCard}>
        <View style={styles.dateContainer}>
          {showDate && (
            <CustomText type='regular' size={12} lightGrey>
              {matchItem?.date}
            </CustomText>
          )}
          <CustomText type='medium' size={16} lightGrey>
            FT
          </CustomText>
        </View>
        <View
          style={{
            marginLeft: moderateScale(-10),
          }}>
          {matchItem &&
            matchItem?.club.map((club: any, index: number) => (
              <View
                key={index}
                style={[
                  styles.clubContainer,
                  {
                    width: showDate ? "80%" : "85%",
                  },
                ]}>
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
        <TouchableOpacity onPress={() => onLikeItem?.(matchItem?.id)}>
          <AntDesign
            name='hearto'
            color={colors.lightGrey}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchCard: {
    backgroundColor: colors.black,
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
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
  dateContainer: {
    flexDirection: "column",
    gap: moderateScale(10),
    alignItems: "center",
  },
});
