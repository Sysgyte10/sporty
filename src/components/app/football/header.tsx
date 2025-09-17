import { CustomText } from "@src/components/shared";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";

interface IFootBallHeaderProps {
  title?: string;
  showSearchIcon?: boolean;
  onPressSearchIcon?: () => void;
  showMenuIcon?: boolean;
  onPressMenuIcon?: () => void;
  headerStyle?: StyleProp<ViewStyle>;
  rightIcon?: React.ReactNode;
  onPressRightIcon?: () => void;
}

export const FootBallHeader: React.FC<IFootBallHeaderProps> = ({
  title,
  showSearchIcon,
  onPressSearchIcon,
  showMenuIcon,
  onPressMenuIcon,
  headerStyle,
  rightIcon,
  onPressRightIcon,
}) => {
  return (
    <View style={[styles.container, headerStyle]}>
      {title ? (
        <CustomText type='bold' size={18} white>
          {title}
        </CustomText>
      ) : (
        <View />
      )}
      <View style={styles.iconContainer}>
        {rightIcon ? (
          <>
            <TouchableOpacity onPress={onPressRightIcon}>
              {rightIcon}
            </TouchableOpacity>
            {showSearchIcon ? (
              <TouchableOpacity onPress={onPressSearchIcon}>
                <Feather
                  name='search'
                  color={colors.white}
                  size={moderateScale(20)}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {showMenuIcon ? (
              <TouchableOpacity onPress={onPressMenuIcon}>
                <Feather
                  name='menu'
                  color={colors.white}
                  size={moderateScale(20)}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </>
        ) : (
          <>
            {showSearchIcon ? (
              <TouchableOpacity onPress={onPressSearchIcon}>
                <Feather
                  name='search'
                  color={colors.white}
                  size={moderateScale(20)}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {showMenuIcon ? (
              <TouchableOpacity onPress={onPressMenuIcon}>
                <Feather
                  name='menu'
                  color={colors.white}
                  size={moderateScale(20)}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: moderateScale(10),
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
