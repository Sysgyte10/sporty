import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { CustomButton, CustomText } from "@src/components/shared";
import { Platform, StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import Animated, { FadeIn } from "react-native-reanimated";
import { useAuthStore } from "@src/api/store/auth";

export const AgeSelection = ({
  navigation,
}: AuthScreenProps<authScreenNames.AGE_SELECTION>) => {
  const { setIsAuthenticated } = useAuthStore();
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <CustomText type='semi-bold' white size={22}>
        Sporty
      </CustomText>
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
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: moderateScale(15),
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
    // flexDirection: "row",
    bottom: 0,
    paddingBottom:
      Platform.OS === "ios" ? moderateScale(40) : moderateScale(35),
  },
});
