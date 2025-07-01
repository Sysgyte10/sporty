import React from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { Loader } from "@src/common";
import { CustomText, textType } from "../text/CustomText";
import { useCustomButton, useCustomText } from "../hooks";

export type buttonType = "Outline" | "Solid";

interface ICustomButtonProps {
  title: string;
  onPress: () => void;
  textType: textType;
  buttonType: buttonType;
  textSize?: number;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
  loaderColor?: string;
  purple?: boolean;
  black?: boolean;
  lightGrey?: boolean;
  darkGrey?: boolean;
  white?: boolean;
  danger?: boolean;
  textPurple?: boolean;
  textBlack?: boolean;
  textLightGrey?: boolean;
  textDarkGrey?: boolean;
  textWhite?: boolean;
  textDanger?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textColorValue?: ColorValue;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  onPress,
  textType,
  buttonType,
  textSize,
  rightIcon,
  leftIcon,
  isLoading,
  loaderColor,
  purple,
  black,
  lightGrey,
  darkGrey,
  white,
  danger,
  textPurple,
  textBlack,
  textLightGrey,
  textDarkGrey,
  textWhite,
  textDanger,
  btnStyle,
  textStyle,
  textColorValue,
}) => {
  const { getTextColor } = useCustomText();
  const { getButtonColor } = useCustomButton();
  const textColor = getTextColor(
    textPurple,
    textBlack,
    textLightGrey,
    textDarkGrey,
    textWhite,
    textDanger
  );
  const btnBgColor = getButtonColor(
    purple,
    black,
    lightGrey,
    darkGrey,
    white,
    danger
  );
  return (
    <>
      {buttonType === "Solid" ? (
        <TouchableOpacity
          onPress={onPress}
          style={[
            buttonStyles.container,
            {
              backgroundColor: btnBgColor,
              borderRadius: moderateScale(7),
            },
            btnStyle,
          ]}
          disabled={isLoading}>
          {isLoading ? (
            <Loader size='small' color={String(loaderColor)} />
          ) : (
            <>
              {leftIcon && leftIcon}
              <CustomText
                size={textSize ? textSize : moderateScale(14)}
                type={textType}
                style={[{ color: textColor || textColorValue }, textStyle]}>
                {title}
              </CustomText>
              {rightIcon && rightIcon}
            </>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={[
            buttonStyles.container,
            {
              borderRadius: moderateScale(7),
              borderColor: btnBgColor,
              borderWidth: moderateScale(1.5),
            },
            btnStyle,
          ]}
          disabled={isLoading}>
          {isLoading ? (
            <Loader size='small' color={String(loaderColor)} />
          ) : (
            <>
              {leftIcon && leftIcon}
              <CustomText
                size={textSize ? textSize : moderateScale(14)}
                type={textType}
                style={[
                  {
                    color: textColor || textColorValue,
                  },
                  textStyle,
                ]}>
                {title}
              </CustomText>
              {rightIcon && rightIcon}
            </>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(5),
  },
});
