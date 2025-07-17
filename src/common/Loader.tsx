import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Animated,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ILoaderProps {
  color: string;
  size: "small" | "large";
}

export const Loader: React.FC<ILoaderProps> = ({ color, size }) => {
  return (
    <View style={style.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ISkeletonLoaderProps {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

export const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({
  style,
  width = 45,
  height = 10,
}) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  // Example: safely access style if needed, or remove this line if not used
  // const flattenedStyle = style ? StyleSheet.flatten(style) : {};
  // const width = flattenedStyle?.width;
  // const height = flattenedStyle?.height

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true, // Use native driver for transform animations
      })
    ).start();

    // Cleanup animation on unmount
    return () => shimmerAnim.stopAnimation();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-DVW(Number(width)), DVW(Number(width))], // Adjust based on component width
  });

  const translateY = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-DVH(Number(height)), DVH(Number(height))], // Adjust based on component height
  });

  return (
    <View
      style={[
        skeletonStyles.container,
        {
          width: DVW(Number(width)), //45
          height: DVH(Number(height)),
        },
        style,
      ]}>
      <LinearGradient
        colors={["#2a2a2a", "#404040", "#2a2a2a"]}
        style={skeletonStyles.background}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}>
        <Animated.View
          style={[
            skeletonStyles.shimmer,
            {
              transform: [{ translateX }],
              width: DVW(Number(width)), // Match container width
              height: DVH(Number(height)),
            },
          ]}
        />
      </LinearGradient>
    </View>
  );
};

const skeletonStyles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(10),
    overflow: "hidden", // Ensure shimmer stays within bounds
  },
  background: {
    flex: 1,
  },
  shimmer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Subtle overlay for shimmer
  },
});
