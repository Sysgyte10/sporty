import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale, screenWidth } from "@src/resources/responsiveness";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface IButtonLineListProps {
  data: string[];
  onButtonPress: (item: string) => void;
  selectedBtn: string;
}

export const ButtonLineList: React.FC<IButtonLineListProps> = ({
  data,
  onButtonPress,
  selectedBtn,
}) => {
  const positionsRef = useRef<{ [key: string]: { x: number; width: number } }>(
    {}
  );
  const translateX = useSharedValue(0);
  const underlineWidth = useSharedValue(0);
  const scrollX = useSharedValue(0);

  const handleLayout = (item: string, e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    positionsRef.current[item] = { x, width };

    if (item === selectedBtn) {
      translateX.value = withTiming(x - scrollX.value, { duration: 200 });
      underlineWidth.value = withTiming(width, { duration: 200 });
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    scrollX.value = offsetX;

    // update underline position after scroll
    const selectedLayout = positionsRef.current[selectedBtn];
    if (selectedLayout) {
      translateX.value = withTiming(selectedLayout.x - offsetX, {
        duration: 100,
      });
    }
  };

  const animatedUnderlineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: underlineWidth.value,
  }));

  React.useEffect(() => {
    const selectedLayout = positionsRef.current[selectedBtn];
    if (selectedLayout) {
      translateX.value = withTiming(selectedLayout.x - scrollX.value, {
        duration: 200,
      });
      underlineWidth.value = withTiming(selectedLayout.width, {
        duration: 200,
      });
    }
  }, [selectedBtn]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => onButtonPress(item)}
            onLayout={(e) => handleLayout(item, e)}
            style={[
              styles.btn,
              {
                width: (screenWidth - 5) / data.length,
                alignItems: "center",
              },
            ]}>
            <CustomText
              type='medium'
              size={14}
              style={{
                color: selectedBtn === item ? colors.purple : colors.lightGrey,
              }}>
              {item}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* full straight grey baseline */}
      <View style={styles.baseLine} />

      {/* animated purple underline */}
      <Animated.View style={[styles.selectedLine, animatedUnderlineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: moderateScale(10),
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(5),
  },
  btn: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  baseLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: DVW(0.2),
    backgroundColor: colors.lightGrey,
  },
  selectedLine: {
    position: "absolute",
    bottom: 0,
    height: DVW(0.2),
    backgroundColor: colors.purple,
  },
});
