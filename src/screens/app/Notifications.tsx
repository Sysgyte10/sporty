import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, View } from "react-native";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { FormHeader } from "@src/common";
import { ScrollContainer } from "../ScrollContainer";
import { notifications } from "@src/constants/notifications";
import { CustomText } from "@src/components/shared";
import SwitchToggle from "react-native-switch-toggle";
import Animated, { FadeIn } from "react-native-reanimated";

export const Notifications = ({
  navigation,
}: RootStackScreenProps<appScreenNames.NOTIFICATIONS>) => {
  const [switchesOn, setSwitchesOn] = useState<string[]>([]);
  return (
    <AppWrapper style={styles.appWrapper} safeArea>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <ScrollContainer style={styles.subScreen}>
        <FormHeader
          title='Notifications'
          description='This is disabled at the moment'
        />
        <View
          style={{
            paddingVertical: moderateScale(10),
          }}>
          {notifications &&
            notifications.map((item, index) => (
              <View key={index}>
                {item?.heading && (
                  <CustomText
                    type='medium'
                    size={16}
                    lightGrey
                    style={{
                      paddingTop: moderateScale(7),
                    }}>
                    {item?.heading}
                  </CustomText>
                )}
                {item.list.map((listItem, index) => {
                  const isSwitchOn =
                    switchesOn &&
                    switchesOn.some(
                      (i) => i.toLowerCase() === listItem.title.toLowerCase()
                    );
                  return (
                    <Animated.View
                      key={index}
                      style={styles.listContainer}
                      entering={FadeIn.delay(index * 200).duration(600)}>
                      <View style={styles.infoContainer}>
                        <CustomText type='medium' size={14} white>
                          {listItem?.title}
                        </CustomText>
                        <CustomText type='regular' size={12} lightGrey>
                          {listItem?.desc}
                        </CustomText>
                      </View>
                      <SwitchToggle
                        switchOn={isSwitchOn}
                        onPress={() => {
                          if (isSwitchOn) {
                            const filteredSwitch = switchesOn.filter(
                              (i) =>
                                i.toLowerCase() !== listItem.title.toLowerCase()
                            );
                            setSwitchesOn(filteredSwitch);
                          } else {
                            const updatedToggledIdx = [
                              ...switchesOn,
                              listItem.title.toLowerCase(),
                            ];
                            setSwitchesOn(updatedToggledIdx);
                          }
                        }}
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
                          marginTop: !listItem?.desc
                            ? moderateScale(-25)
                            : moderateScale(0),
                        }}
                        circleStyle={{
                          width: 20,
                          height: 22,
                          borderRadius: 11,
                        }}
                      />
                    </Animated.View>
                  );
                })}
              </View>
            ))}
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
  appWrapper: {
    paddingVertical: moderateScale(0),
    backgroundColor: colors.black,
  },
  subScreen: {
    paddingHorizontal: moderateScale(5),
    paddingTop: moderateScale(1),
  },
  listContainer: {
    paddingVertical: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    gap: moderateScale(6),
  },
});
