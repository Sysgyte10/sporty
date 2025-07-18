import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
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
    paddingBottom: moderateScale(5),
  },
});

interface AppNavigationHeaderProps {
  title?: string;
  onPressActionBtn?: () => void;
  notificationIcon?: boolean;
  onPressNotificationIcon?: () => void;
  heartIcon?: boolean;
  onPressHeartIcon?: () => void;
  middleText?: string | React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const AppNavigationHeader: React.FC<AppNavigationHeaderProps> = ({
  title,
  onPressActionBtn,
  notificationIcon,
  onPressNotificationIcon,
  heartIcon,
  onPressHeartIcon,
  middleText,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={appNavStyles.arrowBackBtn}
        onPress={onPressActionBtn}>
        <MaterialIcons
          name={"keyboard-arrow-left"}
          size={moderateScale(23)}
          color={colors.lightGrey}
        />
        <CustomText size={14} lightGrey type='medium'>
          {title ? title : "Back"}
        </CustomText>
      </TouchableOpacity>
      {middleText ? (
        <CustomText type='medium' size={15} white>
          {middleText}
        </CustomText>
      ) : (
        <View />
      )}
      {rightIcon ? (
        rightIcon
      ) : (
        <View style={appNavStyles.actionIconContainer}>
          {notificationIcon ? (
            <TouchableOpacity onPress={onPressNotificationIcon}>
              <Octicons
                name='bell'
                size={moderateScale(20)}
                color={colors.lightGrey}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {heartIcon ? (
            <TouchableOpacity onPress={onPressHeartIcon}>
              <AntDesign
                name='hearto'
                size={moderateScale(20)}
                color={colors.lightGrey}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      )}
    </View>
  );
};

const appNavStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowBackBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
    padding: moderateScale(3),
  },
  actionIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: moderateScale(20),
  },
});
