import { CustomText } from "@src/components/shared";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
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
  showBackBtn?: boolean;
  onPressBackBtn?: () => void;
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
  showBackBtn,
  onPressBackBtn,
}) => {
  return (
    <View style={[styles.container, headerStyle]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(5),
          marginLeft: moderateScale(-10),
        }}>
        {showBackBtn ? (
          <TouchableOpacity onPress={onPressBackBtn}>
            <MaterialIcons
              name='keyboard-arrow-left'
              size={moderateScale(30)}
              color={colors.white}
            />
          </TouchableOpacity>
        ) : null}
        {title ? (
          <CustomText type='bold' size={18} white>
            {title}
          </CustomText>
        ) : (
          <View />
        )}
      </View>
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
