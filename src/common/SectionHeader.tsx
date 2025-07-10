import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface ISectionHeaderProps {
  leftText?: string;
  actionText?: string;
  onPressAction?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({
  leftText,
  actionText,
  onPressAction,
  containerStyle,
}) => {
  return (
    <View style={[styles.textBtnContainer, containerStyle]}>
      <CustomText type='medium' size={14} lightGrey>
        {leftText ? leftText : "MATCHES"}
      </CustomText>
      <TouchableOpacity onPress={onPressAction}>
        <CustomText type='medium' size={14} lightGrey>
          {actionText ? actionText : "See All"}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(15),
  },
});
