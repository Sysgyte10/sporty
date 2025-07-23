import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { FormHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import SwitchToggle from "react-native-switch-toggle";
import { StatusBar } from "expo-status-bar";

export const Settings = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SETTINGS>) => {
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  const settings = [
    {
      title: "Language",
      desc: "English",
      toggle: false,
      screen: appScreenNames.LANGUAGE,
    },
    {
      title: "Default Sport",
      desc: "Football",
      toggle: false,
      screen: appScreenNames.DEFAULT_SPORT,
    },
    {
      title: "Show Favorites in Scores",
      desc: "",
      toggle: true,
      screen: "",
    },
  ];

  return (
    <AppWrapper style={styles.appWrapper} safeArea>
      <StatusBar style='light' />
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <View style={styles.subScreen}>
        <FormHeader
          title='Settings'
          description='Here you can set up all your activities'
        />
        <View
          style={{
            paddingVertical: moderateScale(10),
          }}>
          {settings &&
            settings.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemBtn}
                onPress={() =>
                  item?.screen ? navigation.navigate(item?.screen) : undefined
                }
                activeOpacity={item?.toggle ? 1 : undefined}>
                <CustomText type='medium' size={14} white>
                  {item?.title}
                </CustomText>
                {item?.toggle ? (
                  <SwitchToggle
                    switchOn={switchOn}
                    onPress={() => setSwitchOn(!switchOn)}
                    circleColorOff={colors.lightGrey}
                    circleColorOn={colors.purple}
                    backgroundColorOn={colors.lightGrey}
                    backgroundColorOff={colors.white}
                    containerStyle={{
                      width: 50,
                      height: 24,
                      borderRadius: 20,
                      overflow: "hidden",
                      paddingRight: moderateScale(50),
                    }}
                    circleStyle={{
                      width: 20,
                      height: 22,
                      borderRadius: 11,
                    }}
                  />
                ) : (
                  <CustomText type='regular' size={12} lightGrey>
                    {item?.desc}
                  </CustomText>
                )}
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingVertical: moderateScale(0),
    backgroundColor: colors.black,
  },
  subScreen: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(1),
  },
  itemBtn: {
    gap: moderateScale(6),
    paddingVertical: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
