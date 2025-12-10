import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ImageBackground, ImageContentFit } from "expo-image";
import React from "react";
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { CustomText } from "./text/CustomText";

interface IAdComponentProps {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  imgSrc: ImageSourcePropType;
  imageFit?: ImageContentFit;
  visible?: boolean;
}

export const AdComponent: React.FC<IAdComponentProps> = ({
  containerStyle,
  imageStyle,
  imgSrc,
  imageFit,
  visible,
}) => {
  return (
    <>
      {visible && (
        <View style={[styles.container, containerStyle]}>
          <ImageBackground
            source={imgSrc}
            style={[styles.image, imageStyle]}
            contentFit={imageFit || "cover"}>
            <TouchableOpacity style={styles.closeBtn}>
              <CustomText type='semi-bold' size={14} white>
                X
              </CustomText>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: DVH(25),
    overflow: "hidden",
    borderRadius: moderateScale(10),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    backgroundColor: colors.darkGrey,
    width: DVW(5),
    height: DVH(2.5),
    borderRadius: moderateScale(100),
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: moderateScale(5),
  },
});
