import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { CustomText } from "@src/components/shared";

interface IAppHeaderProps {
  backArrow?: boolean;
  onGoBack?: () => void;
  title?: string;
}

export const AppHeader: React.FC<IAppHeaderProps> = ({
  backArrow,
  onGoBack,
  title,
}) => {
  return (
    <View style={styles.container}>
      {backArrow ? (
        <TouchableOpacity onPress={onGoBack}>
          <MaterialIcons
            color={colors.white}
            size={moderateScale(20)}
            name='arrow-back-ios-new'
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {title ? (
        <CustomText type='medium' size={16} white>
          {title}
        </CustomText>
      ) : (
        <View />
      )}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
