import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { useCustomText } from "../hooks";

export type textType = "bold" | "semi-bold" | "light" | "medium" | "regular";

interface ICustomTextProps {
  children: React.ReactNode;
  size: number;
  type?: textType;
  purple?: boolean;
  black?: boolean;
  lightGrey?: boolean;
  darkGrey?: boolean;
  white?: boolean;
  danger?: boolean;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<ICustomTextProps> = ({
  children,
  size,
  type,
  purple,
  black,
  lightGrey,
  darkGrey,
  white,
  danger,
  style,
}) => {
  const { getFontFamily, getTextColor } = useCustomText();
  const fontFamily = getFontFamily(type ? type : "regular");
  const textColor = getTextColor(
    purple,
    black,
    lightGrey,
    darkGrey,
    white,
    danger
  );
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: moderateScale(size),
          color: textColor,
        },
        style,
      ]}>
      {children && children}
    </Text>
  );
};
