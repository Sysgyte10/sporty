import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { FootBallHeader } from "@src/components/app/football";
import { ColorValue, StyleSheet, View } from "react-native";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomButton, CustomText } from "@src/components/shared";
import { LinearGradient } from "expo-linear-gradient";

const predictions = [
  "Daily Combo Coupon",
  "Daily Single Match",
  "Resulted Coupons",
  "Resulted Matches",
];

const dailyComboCoupon = [
  {
    title: "Moreirense-Alverca",
    tips: "hidden content",
    status: "Pending",
  },
  {
    title: "Brage-Tondela",
    tips: "hidden content",
    status: "Pending",
  },
  {
    title: "Antwerp-OH Leuven",
    tips: "hidden content",
    status: "Pending",
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

export const PredictionServices = ({
  navigation,
}: AuthScreenProps<authScreenNames.PREDICTION_SERVICES>) => {
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
      <View style={styles.ctaSection}>
        <CustomText type='semi-bold' size={16} white>
          Prediction Services
        </CustomText>

        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {predictions &&
              predictions.slice(0, 2).map((item, idx) => (
                <CustomButton
                  key={idx}
                  title={item}
                  textType='light'
                  textWhite
                  onPress={() => {}}
                  buttonType='Solid'
                  btnStyle={{
                    backgroundColor: "#242222",
                    width: "48%",
                    alignItems: "center",
                    paddingVertical: moderateScale(18),
                  }}
                  textSize={10}
                  textStyle={{
                    maxWidth: "80%",
                    textAlign: "center",
                  }}
                />
              ))}
            <CustomButton
              title={"Football live Score"}
              textType='medium'
              textWhite
              onPress={() => {}}
              buttonType='Solid'
              purple
              btnStyle={{
                alignItems: "center",
              }}
              textSize={12}
            />
          </View>
          <View style={styles.rightContainer}>
            {predictions &&
              predictions.slice(2, 4).map((item, idx) => (
                <CustomButton
                  key={idx}
                  title={item}
                  textType='light'
                  textWhite
                  onPress={() => {}}
                  buttonType='Solid'
                  btnStyle={{
                    backgroundColor: "#242222",
                    alignItems: "center",
                    paddingVertical: moderateScale(15),
                  }}
                  textSize={10}
                  textStyle={{
                    maxWidth: "80%",
                    textAlign: "center",
                  }}
                />
              ))}
          </View>
        </View>
      </View>

      <CustomText type='semi-bold' size={16} white>
        Daily Combo Coupon
      </CustomText>
      <View
        style={[
          styles.ctaSection,
          {
            backgroundColor: "#000000",
            borderRadius: moderateScale(10),
            marginTop: moderateScale(5),
          },
        ]}>
        {dailyComboCoupon &&
          dailyComboCoupon.map((item, index) => {
            const gradient =
              anotherMembershipColors.gradientColor[
                index % anotherMembershipColors.gradientColor.length
              ]; // cycle safely if more items than colors

            return (
              <LinearGradient
                key={index}
                colors={gradient} // ✅ already typed as [ColorValue, ColorValue]
                start={{ x: 3.1, y: 1 }}
                end={{ x: 0, y: 2 }}
                style={styles.card}>
                <View style={styles.mainContainer}>
                  <View style={styles.rightTitleContainer}>
                    <CustomText type='regular' size={12} white>
                      {item?.title}
                    </CustomText>
                    <View style={styles.tipsContainer}>
                      <CustomText style={styles.tips} size={10} white>
                        Tips
                      </CustomText>
                      <CustomText size={10} white>
                        Hidden Content
                      </CustomText>
                    </View>
                  </View>
                  <CustomText type='light' size={10} white>
                    {item.status}
                  </CustomText>
                </View>
              </LinearGradient>
            );
          })}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: moderateScale(5),
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
            onPress={() => navigation.navigate(authScreenNames.DAILY_COUPON)}
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
  },
  rightTitleContainer: {
    gap: moderateScale(10),
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
});
