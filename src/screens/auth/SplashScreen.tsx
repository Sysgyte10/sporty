import React from "react";
import { AppWrapper } from "../AppWrapper";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { Platform, StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { ImageBackground } from "expo-image";
import { CustomButton } from "@src/components/shared";

export const SplashScreen = ({
  navigation,
}: AuthScreenProps<authScreenNames.SPLASHSCREEN>) => {
  return (
    <>
      <AppWrapper
        style={{
          paddingHorizontal: moderateScale(0),
          paddingVertical: moderateScale(0),
        }}>
        <ImageBackground
          source={require("@src/assets/png/home-screen.png")}
          contentFit='cover'
          style={{ flex: 1 }}>
          <View style={styles.bottomTextContainer}>
            <CustomButton
              title='Continue'
              buttonType='Solid'
              purple
              textWhite
              textType='semi-bold'
              textSize={16}
              onPress={() => navigation.navigate(authScreenNames.AGE_SELECTION)}
              btnStyle={styles.btn}
            />
          </View>
        </ImageBackground>
      </AppWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: moderateScale(12),
    width: "100%",
  },
  bottomTextContainer: {
    position: "absolute",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 0,
    paddingBottom:
      Platform.OS === "ios" ? moderateScale(40) : moderateScale(35),
  },
});
