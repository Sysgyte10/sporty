import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale, screenWidth } from "@src/resources/responsiveness";
import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  InteractionManager,
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
  const buttonRefs = useRef<{ [key: string]: TouchableOpacity }>({});
  const translateX = useSharedValue(0);
  const underlineWidth = useSharedValue(0);
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const handleLayout = (item: string, e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    if (width > 0 && x >= 0) {
      positionsRef.current[item] = { x, width };
    }

    // Update layout-ready state
    const hasAllLayouts = data.every((item) => positionsRef.current[item]);
    if (hasAllLayouts) {
      setIsLayoutReady(true);
      if (item === selectedBtn) {
        translateX.value = withTiming(x - scrollX.value, { duration: 200 });
        underlineWidth.value = withTiming(width, { duration: 200 });
      }
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    scrollX.value = offsetX;

    // Update underline position after scroll
    const selectedLayout = positionsRef.current[selectedBtn];
    if (selectedLayout && isLayoutReady) {
      translateX.value = withTiming(selectedLayout.x - offsetX, {
        duration: 100,
      });
    }
  };

  const animatedUnderlineStyle = useAnimatedStyle(() => {
    console.log("Underline for", selectedBtn, {
      translateX: translateX.value,
      width: underlineWidth.value,
    });
    return {
      transform: [{ translateX: translateX.value }],
      width: underlineWidth.value,
    };
  });

  // Force re-measurement of buttons if layouts are missing
  const measureLayouts = () => {
    let pendingMeasurements = data.length;
    data.forEach((item) => {
      const ref = buttonRefs.current[item];
      if (!positionsRef.current[item] && ref) {
        // Use measureInWindow for better accuracy on Android
        ref.measureInWindow((x: any, y: any, width: any, height: any) => {
          if (width > 0 && x >= 0) {
            positionsRef.current[item] = { x, width };
          }
          pendingMeasurements--;
          if (pendingMeasurements === 0) {
            const hasAllLayouts = data.every(
              (item) => positionsRef.current[item]
            );
            if (hasAllLayouts) {
              console.log("All layouts measured:", positionsRef.current);
              setIsLayoutReady(true);
            } else {
              console.log("Missing layouts:", positionsRef.current);
              // Retry after interactions
              InteractionManager.runAfterInteractions(() => {
                requestAnimationFrame(measureLayouts);
              });
            }
          }
        });
      } else {
        pendingMeasurements--;
        if (pendingMeasurements === 0) {
          const hasAllLayouts = data.every(
            (item) => positionsRef.current[item]
          );
          if (hasAllLayouts) {
            console.log("All layouts measured:", positionsRef.current);
            setIsLayoutReady(true);
          } else {
            console.log("Missing layouts:", positionsRef.current);
            InteractionManager.runAfterInteractions(() => {
              requestAnimationFrame(measureLayouts);
            });
          }
        }
      }
    });
  };

  // Initial measurement and force render of last item
  useEffect(() => {
    // Briefly scroll to end to force render of last item (Odds)
    scrollViewRef.current?.scrollToEnd({ animated: false });
    // Scroll back to start immediately
    scrollViewRef.current?.scrollTo({ x: 0, animated: false });

    // Measure after interactions for Android reliability
    InteractionManager.runAfterInteractions(() => {
      requestAnimationFrame(measureLayouts);
    });

    return () => {
      // Cleanup
      cancelAnimationFrame(requestAnimationFrame(measureLayouts));
    };
  }, [data]);

  // Update underline when selectedBtn or isLayoutReady changes
  useEffect(() => {
    if (!isLayoutReady) return;

    const selectedLayout = positionsRef.current[selectedBtn];
    if (selectedLayout) {
      translateX.value = withTiming(selectedLayout.x - scrollX.value, {
        duration: 200,
      });
      underlineWidth.value = withTiming(selectedLayout.width, {
        duration: 200,
      });

      // Auto-scroll to center the selected item
      scrollViewRef.current?.scrollTo({
        x: Math.max(
          0,
          selectedLayout.x - screenWidth / 2 + selectedLayout.width / 2
        ),
        animated: true,
      });
    } else {
      // Fallback for missing layout
      console.log(`Missing layout for ${selectedBtn}`, positionsRef.current);
      translateX.value = withTiming(0, { duration: 200 });
      underlineWidth.value = withTiming(moderateScale(80), { duration: 200 });
    }
  }, [selectedBtn, isLayoutReady]);

  // Fixed padding for consistency
  const itemPadding = moderateScale(15);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        onContentSizeChange={(width) => {
          console.log("Content width:", width);
          InteractionManager.runAfterInteractions(() => {
            requestAnimationFrame(measureLayouts);
          });
        }}
        contentContainerStyle={[
          styles.scrollContainer,
          { minWidth: screenWidth },
        ]}>
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            ref={(ref) => {
              if (ref) {
                buttonRefs.current[item] = ref;
              } else {
                delete buttonRefs.current[item]; // Clean up on unmount
              }
            }}
            onPress={() => {
              onButtonPress(item);
              // Force scroll to last item if it's the last one
              if (item === data[data.length - 1]) {
                const layout = positionsRef.current[item];
                if (layout) {
                  scrollViewRef.current?.scrollTo({
                    x: layout.x - screenWidth / 2 + layout.width / 2,
                    animated: true,
                  });
                } else {
                  // Fallback: Scroll to end for last item
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                  // Re-measure after scroll
                  InteractionManager.runAfterInteractions(() => {
                    requestAnimationFrame(measureLayouts);
                  });
                }
              }
            }}
            onLayout={(e) => handleLayout(item, e)}
            style={[styles.btn, { paddingHorizontal: itemPadding }]}>
            <CustomText
              type='medium'
              size={12}
              style={{
                color: selectedBtn === item ? colors.purple : colors.lightGrey,
              }}>
              {item}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Full straight grey baseline */}
      <View style={styles.baseLine} />

      {/* Animated purple underline */}
      {isLayoutReady && (
        <Animated.View style={[styles.selectedLine, animatedUnderlineStyle]} />
      )}
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
    paddingTop: moderateScale(5),
    alignItems: "center",
    minWidth: moderateScale(80), // Increased for stability with longer text
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
