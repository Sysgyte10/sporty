import { colors } from "@src/resources/color/color";
import { useState } from "react";
import { textType } from "../text/CustomText";
import { fontFamily } from "@src/resources/fonts/font-family";

interface ISelectedCountryProps {
  currency: string;
  flag: string;
}

export const useCustomInput = () => {
  const [selectedCountry, setSelectedCountry] = useState<ISelectedCountryProps>(
    {
      currency: "",
      flag: "",
    }
  );
  const getInputColor = (error: string) => {
    if (error) {
      return {
        borderColor: colors.danger,
        iconColor: colors?.danger,
      };
    } else {
      return {
        borderColor: "#d3cacaf5",
        iconColor: colors.lightGrey,
      };
    }
  };

  const getValueFontType = (valueFontType: textType) => {
    if (valueFontType === "bold") {
      return fontFamily.bold;
    } else if (valueFontType === "light") {
      return fontFamily.light;
    } else if (valueFontType === "medium") {
      return fontFamily.medium;
    } else if (valueFontType === "regular") {
      return fontFamily.regular;
    } else if (valueFontType === "semi-bold") {
      return fontFamily.semi_bold;
    }
  };

  return {
    getInputColor,
    selectedCountry,
    setSelectedCountry,
    getValueFontType,
  };
};
