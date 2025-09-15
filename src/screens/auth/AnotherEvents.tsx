import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FootBallHeader } from "@src/components/app/football";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { AppNavigationHeader } from "../AppHeader";
import { ScrollContainer } from "../ScrollContainer";
import { DateSwitch } from "@src/common";
import { CustomText } from "@src/components/shared";
import { Image } from "expo-image";

export const AnotherEvents = ({
  navigation,
}: AuthScreenProps<authScreenNames.ANOTHER_EVENTS>) => {
  const onNavigate = () => {
    navigation.navigate(authScreenNames.INSIGHTS);
  };

  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <FootBallHeader
        title='Events'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
        onPressMenuIcon={() => navigation.navigate("")}
      />
      <ScrollContainer
        style={{ paddingHorizontal: moderateScale(2), gap: moderateScale(10) }}>
        <DateSwitch />
        <View
          style={{
            gap: moderateScale(5),
          }}>
          <CustomText type='semi-bold' size={16} white>
            La Liga
          </CustomText>
          <CustomText type='medium' size={13} white>
            Spain
          </CustomText>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => onNavigate()}>
            <Image
              source={require("@src/assets/png/1.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => onNavigate()}>
            <Image
              source={require("@src/assets/png/2.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            gap: moderateScale(5),
          }}>
          <CustomText type='semi-bold' size={16} white>
            Serie A
          </CustomText>
          <CustomText type='medium' size={13} white>
            Italy
          </CustomText>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => onNavigate()}>
            <Image
              source={require("@src/assets/png/3.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            gap: moderateScale(5),
          }}>
          <CustomText type='semi-bold' size={16} white>
            Non-League Premier - Southern Central
          </CustomText>
          <CustomText type='medium' size={13} white>
            United Kingdom
          </CustomText>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => onNavigate()}>
            <Image
              source={require("@src/assets/png/3.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: DVH(5),
          }}
        />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  imgContainer: {
    width: "100%",
    height: DVH(12),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    borderWidth: DVW(0.2),
    borderColor: colors.darkGrey,
    marginBottom: moderateScale(5),
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
