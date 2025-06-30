import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { textType } from "../text/CustomText";

export const useCustomText = () => {
  const getFontFamily = (type: textType) => {
    if (type === "bold") {
      return fontFamily.bold;
    } else if (type === "semi-bold") {
      return fontFamily.semi_bold;
    } else if (type === "light") {
      return fontFamily.light;
    } else if (type === "medium") {
      return fontFamily.medium;
    } else if (type === "regular") {
      return fontFamily.regular;
    }
  };

  const getTextColor = (
    purple?: boolean,
    black?: boolean,
    lightGrey?: boolean,
    darkGrey?: boolean,
    white?: boolean,
    danger?: boolean
  ) => {
    if (purple) {
      return colors?.purple;
    } else if (black) {
      return colors.black;
    } else if (lightGrey) {
      return colors.lightGrey;
    } else if (darkGrey) {
      return colors.darkGrey;
    } else if (white) {
      return colors.white;
    } else if (danger) {
      return colors.danger;
    }
  };

  return {
    getFontFamily,
    getTextColor,
  };
};
