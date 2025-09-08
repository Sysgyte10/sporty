import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface IAppWrapperProps {
  bgColor?: string;
  gradientColors?: string[];
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
}

export const AppWrapper: React.FC<IAppWrapperProps> = ({
  bgColor,
  gradientColors,
  children,
  style,
  safeArea,
}) => {
  // Decide which wrapper to use: SafeAreaView or View
  const Wrapper = safeArea ? SafeAreaView : View;

  return (
    <>
      {gradientColors ? (
        <LinearGradient
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          colors={gradientColors}
          style={[styles.container, style]}>
          {children}
        </LinearGradient>
      ) : (
        <Wrapper
          style={[styles.container, { backgroundColor: bgColor }, style]}>
          {children}
        </Wrapper>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(5.5),
  },
});
