import React from "react";
import { DVH, screenHeight, screenWidth } from "@src/resources/responsiveness";
import { Loader, CommonStatusBar } from "@src/common";
import { colors } from "@src/resources/color/color";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { AppWrapper } from "./AppWrapper";

export const AppLoader = () => {
  return (
    <>
      <CommonStatusBar style='light' bgColor={colors.purple} />
      <AppWrapper
        bgColor={"#0F0F0F"}
        style={{
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={loaderStyles.iconContainer}>
          <Image
            source={require("@src/assets/png/app-icon.png")}
            contentFit='cover'
            style={loaderStyles.icon}
          />
        </View>
        <View style={loaderStyles.container}>
          <Loader size='large' color={colors.purple} />
        </View>
      </AppWrapper>
    </>
  );
};

const loaderStyles = StyleSheet.create({
  container: {
    height: "10%",
  },
  iconContainer: {
    width: "70%",
    height: DVH(10),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
