import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { FootBallHeader } from "@src/components/app/football";
import { ColorValue, StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomButton, CustomText } from "@src/components/shared";
import { ScrollContainer } from "../ScrollContainer";
import { ModalMessageProvider } from "@src/helper/ui-utils";
import { fontFamily } from "@src/resources/fonts/font-family";

const dailyComboCoupon = [
  {
    title: "Moreirense-Alverca",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
  {
    title: "Brage-Tondela",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
  {
    title: "Antwerp-OH Leuven",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
  {
    title: "Moreirense-Alverca",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
  {
    title: "Brage-Tondela",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
  {
    title: "Antwerp-OH Leuven",
    subTitle: "Match Prediction",
    tips: "hidden content",
    status: "Pending",
    otherStatus: "Result Pending",
  },
];

const anotherMembershipColors: {
  gradientColor: [ColorValue, ColorValue][];
} = {
  gradientColor: [
    ["#8B4513", "#0a0a0afd"], // brown
    ["#DC143C", "#0a0a0afd"], // crimson
    ["#d3d3d3", "#0a0a0afd"], // light grey
  ],
};

export const DailySingleMatches = ({
  navigation,
}: AuthScreenProps<authScreenNames.DAILY_SINGLE_MATCHES>) => {
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <FootBallHeader
        title='RealSc⚽rZ'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
      />
      <View
        style={{
          height: "98%",
          marginTop: moderateScale(10),
        }}>
        <CustomText type='semi-bold' size={16} white>
          Daily Single Matches
        </CustomText>
        <View
          style={[
            styles.ctaSection,
            {
              backgroundColor: "#000000",
              borderRadius: moderateScale(10),
              marginTop: moderateScale(5),
              height: "85%",
              overflow: "hidden",
            },
          ]}>
          <ScrollContainer>
            {dailyComboCoupon &&
              dailyComboCoupon.map((item, index) => {
                return (
                  <View key={index} style={styles.card}>
                    <View style={styles.mainContainer}>
                      <View
                        style={[
                          styles.rightTitleContainer,
                          {
                            width: "70%",
                          },
                        ]}>
                        <CustomText type='regular' size={12} white>
                          {item?.title}
                        </CustomText>
                        <CustomText type='regular' size={9} lightGrey>
                          {item?.subTitle}
                        </CustomText>
                        <View style={styles.tipsContainer}>
                          <CustomText style={styles.tips} size={10} white>
                            Tips
                          </CustomText>
                          <CustomText size={10} white>
                            Hidden Content
                          </CustomText>
                        </View>
                        <View
                          style={[
                            styles.tipsContainer,
                            {
                              paddingVertical: moderateScale(10),
                            },
                          ]}>
                          <CustomText size={10} lightGrey>
                            Status:
                          </CustomText>
                          <CustomText size={10} white>
                            Results Pending
                          </CustomText>
                        </View>
                      </View>
                      <View style={[styles.rightTitleContainer, {}]}>
                        <CustomText
                          type='light'
                          size={10}
                          white
                          style={{
                            textAlign: "center",
                          }}>
                          {item.status}
                        </CustomText>
                        <CustomText
                          size={10}
                          lightGrey
                          style={{
                            textAlign: "center",
                          }}>
                          10-08-25
                        </CustomText>
                        <CustomButton
                          title={"View Tips"}
                          textType='regular'
                          textWhite
                          onPress={() => {
                            ModalMessageProvider.showModalMsg({
                              title: "Predictions Not Opened",
                              description:
                                "In order to view match predictions, you must first upgrade your membership to “Yearly membership”.",
                              msgType: "SUCCESS",
                              animationType: "fade",
                              containerStyle: styles.msgContainerStyle,
                              btnStyle: styles.msgBtnStyle,
                              btnText: "Upgrade Membership",
                              btnTextStyle: styles.msgBtnTextStyle,
                              hideMsgIcon: true,
                              descriptionStyle: styles.msgDesStyle,
                              titleStyle: styles.msgTitleStyle,
                              onClick: () =>
                                navigation.navigate(
                                  authScreenNames.ANOTHER_MEMBERSHIP
                                ),
                              showCloseBtn: true,
                              shouldAllowCloseMsgOnCloseBtn: true,
                            });
                          }}
                          buttonType='Solid'
                          btnStyle={{
                            alignItems: "center",
                            paddingVertical: moderateScale(6),
                            borderRadius: moderateScale(50),
                            width: "60%",
                            alignSelf: "center",
                          }}
                          purple
                          textSize={9}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            <View
              style={{
                paddingVertical: DVH(5),
              }}
            />
          </ScrollContainer>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: moderateScale(5),
              position: "absolute",
              bottom: 0,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "#000000",
            }}>
            <View>
              <CustomText type='light' size={10} lightGrey>
                Coupon Date:
              </CustomText>
              <CustomText type='regular' size={10} white>
                10-08-2025
              </CustomText>
            </View>
            <CustomButton
              title={"View Coupon"}
              textType='regular'
              textWhite
              onPress={() => {
                navigation.navigate(authScreenNames.UPGRADE_MEMBERSHIP);
              }}
              buttonType='Solid'
              btnStyle={{
                alignItems: "center",
                paddingVertical: moderateScale(6),
                borderRadius: moderateScale(50),
                width: "22%",
              }}
              purple
              textSize={9}
            />
          </View>
        </View>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(5),
  },
  ctaSection: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "64%",
    paddingVertical: moderateScale(10),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: moderateScale(7),
  },
  rightContainer: {
    width: "34%",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    gap: moderateScale(5),
  },
  card: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(7),
    backgroundColor: "#242222",
  },
  rightTitleContainer: {
    gap: moderateScale(5),
  },
  tips: {
    backgroundColor: "#000000",
    borderRadius: moderateScale(50),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },
  tipsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  msgContainerStyle: {
    backgroundColor: "#242222",
    borderRadius: moderateScale(20),
    width: "92%",
  },
  msgBtnStyle: {
    backgroundColor: colors.purple,
    width: "45%",
    paddingVertical: moderateScale(6),
  },
  msgBtnTextStyle: {
    fontSize: moderateScale(9),
  },
  msgDesStyle: {
    color: colors.lightGrey,
    fontSize: moderateScale(10),
    textAlign: "left",
  },
  msgTitleStyle: {
    color: colors.white,
    fontFamily: fontFamily.semi_bold,
    textAlign: "left",
    fontSize: moderateScale(14),
  },
});
