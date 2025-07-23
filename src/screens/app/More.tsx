import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { AppNavigationHeader } from "../AppHeader";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { CustomButton, CustomText } from "@src/components/shared";
import Animated, { FadeIn } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export const More = ({
  navigation,
}: RootStackScreenProps<appScreenNames.MORE>) => {
  const moreListItem = [
    {
      title: "Notification",
      icon: (
        <Ionicons
          name='notifications-outline'
          size={moderateScale(20)}
          color={colors.white}
        />
      ),
      screen: appScreenNames.NOTIFICATIONS,
    },
    {
      title: "Settings",
      icon: (
        <SimpleLineIcons
          name='settings'
          size={moderateScale(20)}
          color={colors.white}
        />
      ),
      screen: appScreenNames.SETTINGS,
    },
    {
      title: "Help & Info",
      icon: (
        <MaterialCommunityIcons
          name='help-circle-outline'
          size={moderateScale(20)}
          color={colors.white}
        />
      ),
      screen: "HelpInfo",
    },
  ];
  return (
    <AppWrapper style={styles.appWrapper} safeArea>
      <StatusBar style='light' />
      <AppNavigationHeader
        title='Back'
        rightIcon={
          <TouchableOpacity>
            <Ionicons
              name='mail-outline'
              size={moderateScale(20)}
              color={colors.white}
            />
          </TouchableOpacity>
        }
        onPressActionBtn={() => navigation.goBack()}
        middleText={
          <View
            style={{
              gap: moderateScale(3),
              paddingRight: moderateScale(20),
            }}>
            <CustomText
              type='medium'
              size={16}
              white
              style={{
                textAlign: "center",
              }}>
              Hello!
            </CustomText>
            <CustomText type='regular' size={12} lightGrey>
              Welcome to Sporty
            </CustomText>
          </View>
        }
      />
      <View>
        {moreListItem &&
          moreListItem.map((item, index) => (
            <Animated.View
              entering={FadeIn.delay(index * 200).duration(800)}
              key={index}>
              <CustomButton
                title={item?.title}
                leftIcon={item?.icon}
                buttonType='Outline'
                textWhite
                black
                onPress={() => navigation.navigate(item?.screen)}
                textType='medium'
                textSize={15}
                btnStyle={styles.itemBtn}
              />
            </Animated.View>
          ))}
        <CustomButton
          title={"Share to Friends"}
          leftIcon={
            <Ionicons
              name='paper-plane-outline'
              size={moderateScale(20)}
              color={colors.white}
            />
          }
          buttonType='Outline'
          textWhite
          black
          onPress={() => {}}
          textType='medium'
          textSize={15}
          btnStyle={styles.shareBtn}
        />
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    // paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(0),
    backgroundColor: colors.black,
  },
  itemBtn: {
    justifyContent: "flex-start",
    gap: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  shareBtn: {
    borderWidth: DVW(0.3),
    borderColor: colors.white,
    marginVertical: moderateScale(15),
    width: "53%",
    alignSelf: "center",
    paddingVertical: moderateScale(10),
  },
});
