import { CustomButton, CustomText } from "@src/components/shared";
import { regularMembership } from "@src/constants/membership";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Regular = () => {
  return (
    <>
      {regularMembership &&
        regularMembership.map((item, index) => (
          <LinearGradient
            key={index}
            colors={[colors.purple, "#0a0a0afd"]}
            start={{ x: 3.1, y: 1 }}
            end={{ x: 0, y: 2 }}
            style={{
              width: "100%",
              paddingVertical: moderateScale(20),
              borderRadius: moderateScale(10),
              paddingHorizontal: moderateScale(25),
            }}>
            <View
              style={{
                gap: moderateScale(15),
              }}>
              <CustomText size={12} white type='regular'>
                {item?.title}
              </CustomText>
              <View style={styles.priceContainer}>
                <CustomText size={14} white type='semi-bold'>
                  N
                </CustomText>
                <CustomText
                  size={30}
                  white
                  type='medium'
                  style={{
                    marginBottom: moderateScale(-10),
                  }}>
                  0
                </CustomText>
              </View>
              <CustomText type='regular' size={12} lightGrey>
                Pricing clear benefits you will enjoy
              </CustomText>
              <CustomButton
                title='Get Started'
                buttonType='Outline'
                lightGrey
                textWhite
                textType='semi-bold'
                textSize={12}
                onPress={() => {}}
                btnStyle={styles.btn}
              />
              <CustomText
                type='regular'
                size={13}
                white
                style={{
                  marginBottom: moderateScale(7),
                }}>
                What's included:
              </CustomText>

              <View>
                {item?.whatsIncluded &&
                  item?.whatsIncluded.map((i, index) => (
                    <CustomText type='regular' size={11} lightGrey key={index}>
                      {i}
                    </CustomText>
                  ))}
              </View>
            </View>
          </LinearGradient>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: moderateScale(3),
  },
  btn: {
    paddingVertical: moderateScale(7),
    borderRadius: moderateScale(15),
  },
});
