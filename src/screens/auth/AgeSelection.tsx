import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { CustomButton, CustomText } from "@src/components/shared";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useAuthStore } from "@src/api/store/auth";

export const AgeSelection = ({
  navigation,
}: AuthScreenProps<authScreenNames.AGE_SELECTION>) => {
  const { setIsAuthenticated } = useAuthStore();

  // const opacity = useSharedValue(0);
  // const translateY = useSharedValue(20);
  // const scale = useSharedValue(0.95);

  // const animatedStyle = useAnimatedStyle(() => ({
  //   opacity: opacity.value,
  //   transform: [{ translateY: translateY.value }, { scale: scale.value }],
  // }));

  // useEffect(() => {
  //   opacity.value = withTiming(1, {
  //     duration: 800,
  //     easing: Easing.out(Easing.cubic),
  //   });
  //   translateY.value = withTiming(0, {
  //     duration: 800,
  //     easing: Easing.out(Easing.cubic),
  //   });
  //   scale.value = withTiming(1, {
  //     duration: 800,
  //     easing: Easing.out(Easing.exp),
  //   });
  // }, []);

  return (
    <>
      <AppWrapper bgColor={colors.black} safeArea>
        <TouchableOpacity
          onPress={() => setIsAuthenticated(true)}
          style={styles.skipBtn}>
          <CustomText size={16} type='medium' purple>
            Skip
          </CustomText>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: moderateScale(15),
          }}>
          {/* <Animated.View style={animatedStyle}>
            <CustomText type='semi-bold' white size={25}>
              RealSco⚽rZ
            </CustomText>
          </Animated.View> */}
          <Animated.View entering={FadeInDown.delay(200).duration(1000)}>
            <CustomText type='semi-bold' white size={25}>
              RealSco⚽rX
            </CustomText>
          </Animated.View>
          <CustomText type='medium' size={13} style={styles.descText}>
            {`Please help us on our mission as a responsible`}
          </CustomText>
          <CustomText type='medium' size={13} style={styles.descText}>
            {`sports publisher by selecting the correct age`}
          </CustomText>
          <CustomText type='medium' size={13} style={styles.descText}>
            {`category below`}
          </CustomText>
          <View style={styles.actionButton}>
            <Animated.View entering={FadeIn.delay(300)}>
              <CustomButton
                title='Under 18'
                buttonType='Solid'
                purple
                textWhite
                textType='semi-bold'
                textSize={16}
                onPress={() => setIsAuthenticated(true)}
                btnStyle={styles.btn}
              />
            </Animated.View>

            <Animated.View entering={FadeIn.delay(350)}>
              <CustomButton
                title='18 & Over'
                buttonType='Outline'
                purple
                textPurple
                textType='semi-bold'
                textSize={16}
                onPress={() => setIsAuthenticated(true)}
                btnStyle={styles.btn}
              />
            </Animated.View>
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <CustomText
            type='medium'
            size={13}
            style={{
              color: "#9C9C9C",
            }}>
            Your data is protected as outlined in our{" "}
          </CustomText>
          <CustomText type='medium' size={13} purple>
            Privacy Policy
          </CustomText>
        </View>
      </AppWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  skipBtn: {
    alignSelf: "flex-end",
    paddingHorizontal: moderateScale(10),
  },
  descText: {
    textAlign: "center",
    color: "#9C9C9C",
  },
  actionButton: {
    width: "100%",
    gap: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  btn: {
    paddingVertical: moderateScale(12),
  },
  bottomTextContainer: {
    position: "absolute",
    maxWidth: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 0,
    paddingBottom:
      Platform.OS === "ios" ? moderateScale(40) : moderateScale(35),
  },
});
