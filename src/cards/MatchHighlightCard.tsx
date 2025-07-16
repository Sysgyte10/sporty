import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import { matchHightLightDataType } from "@src/types/types";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IMatchHigLightCardProps {
  highLightItem: matchHightLightDataType;
}

export const MatchHighLightCard: React.FC<IMatchHigLightCardProps> = ({
  highLightItem,
}) => {
  return (
    <View style={styles.bgImgContainer}>
      <ImageBackground
        source={highLightItem?.image}
        contentFit='fill'
        style={styles.bgImg}>
        {/* Dark overlay to reduce brightness */}
        <View style={styles.darkOverlay} />
        <View style={styles.overLayContainer}>
          <CustomText
            type='semi-bold'
            size={10}
            style={{
              color: "#FFFFFFB3",
            }}>
            {highLightItem?.feature} {" | "} {highLightItem?.detail}
          </CustomText>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImgContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: moderateScale(15),
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject, // fills the entire image
    backgroundColor: "rgba(0, 0, 0, 0.234)", // adjust opacity as needed
    borderRadius: moderateScale(15), // same as container if needed
  },
  overLayContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(5),
  },
});
