import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { newsDataTypes } from "@src/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface INewsCardProps {
  newsItem: newsDataTypes;
}

export const NewsCard: React.FC<INewsCardProps> = ({ newsItem }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
      <View style={styles.bgImgContainer}>
        <Image
          source={newsItem?.image}
          contentFit='fill'
          style={styles.bgImg}
        />
      </View>
      {/* Dark overlay to reduce brightness */}
      <View style={styles.darkOverlay} />
      <View style={styles.overLayContainer}>
        <CustomText
          type='semi-bold'
          size={14}
          style={{
            color: "#FFFFFFB3",
          }}>
          {newsItem?.details}
        </CustomText>
        <CustomText type='semi-bold' size={10} lightGrey>
          {newsItem?.club} {" | "} {newsItem?.time}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: moderateScale(20),
    alignItems: "center",
    paddingTop: moderateScale(7),
    paddingHorizontal: moderateScale(7),
    backgroundColor: "#242222",
  },
  bgImgContainer: {
    width: "100%",
    height: DVH(20),
    overflow: "hidden",
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    position: "absolute",
    height: DVH(20),
    marginTop: moderateScale(10),
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.234)",
    borderRadius: moderateScale(15),
  },
  overLayContainer: {
    width: "100%",
    paddingHorizontal: moderateScale(3),
    gap: moderateScale(10),
    paddingTop: moderateScale(10),
  },
});
