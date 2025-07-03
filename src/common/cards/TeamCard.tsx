import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";

interface ITeamCardProps {
  image: ImageSourcePropType;
  club: string;
  country: string;
  selected: boolean;
  onSelectItem: (value: string) => void;
}

export const TeamCard: React.FC<ITeamCardProps> = ({
  image,
  club,
  country,
  selected = true,
  onSelectItem,
}) => {
  return (
    <TouchableOpacity style={styles.cardBtn} onPress={() => onSelectItem(club)}>
      <View style={styles.imgNTeamInfoContainer}>
        <View style={styles.imgContainer}>
          <Image source={image} contentFit='cover' style={styles.img} />
        </View>
        <View style={styles.teamInfoContainer}>
          <CustomText type='semi-bold' size={14} white>
            {club}
          </CustomText>
          <CustomText type='medium' size={11} lightGrey>
            {country}
          </CustomText>
        </View>
      </View>
      {selected ? (
        <FontAwesome6
          name='dot-circle'
          size={moderateScale(20)}
          color={colors.purple}
        />
      ) : (
        <Entypo
          name='circle'
          size={moderateScale(20)}
          color={colors.lightGrey}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBtn: {
    backgroundColor: "#24222273",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(15),
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
  imgNTeamInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
  teamInfoContainer: {
    gap: moderateScale(10),
  },
});
