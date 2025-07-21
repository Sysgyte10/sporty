import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { FormHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { StatusBar } from "expo-status-bar";
import { language } from "@src/constants/language";
import { ScrollContainer } from "../ScrollContainer";
import { Fontisto } from "@expo/vector-icons";

export const Language = ({
  navigation,
}: RootStackScreenProps<appScreenNames.LANGUAGE>) => {
  const [selectedLang, setSelectedLang] = useState<string>(language[0]);
  return (
    <AppWrapper style={styles.appWrapper} safeArea>
      <StatusBar style='light' />
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <View style={styles.subScreen}>
        <FormHeader
          title='Language'
          description='Here you can set up your preferred language'
        />
        <ScrollContainer
          style={{
            paddingVertical: moderateScale(10),
          }}>
          <CustomText size={11} lightGrey type='regular'>
            SELECT LANGUAGE
          </CustomText>
          <View>
            {language &&
              language.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.itemBtn}
                  onPress={() => setSelectedLang(item)}>
                  <Fontisto
                    name={
                      item === selectedLang
                        ? "radio-btn-active"
                        : "radio-btn-passive"
                    }
                    size={moderateScale(20)}
                    color={
                      item === selectedLang ? colors.purple : colors.lightGrey
                    }
                  />
                  <CustomText type='medium' size={14} white>
                    {item}
                  </CustomText>
                </TouchableOpacity>
              ))}
          </View>
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
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
    paddingTop: moderateScale(15),
  },
  itemBtn: {
    paddingVertical: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
