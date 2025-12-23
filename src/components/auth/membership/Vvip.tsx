import { CustomButton, CustomText } from "@src/components/shared";
import {
  monthlyMembership,
  weeklyMembership,
  yearlyMembership,
} from "@src/constants/membership";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IVVIPprops {
  selectedType: "Weekly" | "Monthly" | "Yearly";
  onActionPress: () => void;
}

export const VVIP: React.FC<IVVIPprops> = ({ selectedType, onActionPress }) => {
  return (
    <>
      {selectedType === "Weekly" &&
        weeklyMembership &&
        weeklyMembership.map((item, index) => (
          <LinearGradient
            key={index}
            colors={["#8B4513", "#0a0a0afd"]}
            start={{ x: 3.1, y: 1 }}
            end={{ x: 0, y: 2 }}
            style={{
              width: "100%",
              paddingVertical: moderateScale(20),
              borderRadius: moderateScale(10),
              paddingHorizontal: moderateScale(25),
              height: "60%",
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
                  {item?.price}
                </CustomText>
                <CustomText type='semi-bold' size={20} lightGrey>
                  /week
                </CustomText>
              </View>
              <CustomText type='regular' size={12} lightGrey>
                Pricing clear benefits you will enjoy
              </CustomText>
              <CustomButton
                title='Subscribe weekly'
                buttonType='Outline'
                lightGrey
                textWhite
                textType='semi-bold'
                textSize={12}
                onPress={() => onActionPress()}
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
                    <CustomText type='regular' size={16} lightGrey key={index}>
                      {i}
                    </CustomText>
                  ))}
              </View>
            </View>
          </LinearGradient>
        ))}

      {selectedType === "Monthly" &&
        monthlyMembership &&
        monthlyMembership.map((item, index) => (
          <LinearGradient
            key={index}
            colors={["#DC143C", "#0a0a0afd"]}
            start={{ x: 3.1, y: 1 }}
            end={{ x: 0, y: 2 }}
            style={{
              width: "100%",
              paddingVertical: moderateScale(20),
              borderRadius: moderateScale(10),
              paddingHorizontal: moderateScale(25),
              height: "60%",
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
                  {item?.price}
                </CustomText>
                <CustomText type='semi-bold' size={20} lightGrey>
                  /mon
                </CustomText>
              </View>
              <CustomText type='regular' size={12} lightGrey>
                Pricing clear benefits you will enjoy
              </CustomText>
              <CustomButton
                title='Subscribe monthly'
                buttonType='Outline'
                lightGrey
                textWhite
                textType='semi-bold'
                textSize={12}
                onPress={() => onActionPress()}
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
                    <CustomText type='regular' size={14} lightGrey key={index}>
                      {i}
                    </CustomText>
                  ))}
              </View>
            </View>
          </LinearGradient>
        ))}

      {selectedType === "Yearly" &&
        yearlyMembership &&
        yearlyMembership.map((item, index) => (
          <LinearGradient
            key={index}
            colors={[colors.lightGrey, "#0a0a0afd"]}
            start={{ x: 3.1, y: 1 }}
            end={{ x: 0, y: 2 }}
            style={{
              width: "100%",
              paddingVertical: moderateScale(20),
              borderRadius: moderateScale(10),
              paddingHorizontal: moderateScale(25),
              height: "60%",
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
                  {item?.price}
                </CustomText>
                <CustomText type='semi-bold' size={20} lightGrey>
                  /yr
                </CustomText>
              </View>
              <CustomText type='regular' size={12} lightGrey>
                Pricing clear benefits you will enjoy
              </CustomText>
              <CustomButton
                title='Subscribe yearly'
                buttonType='Outline'
                lightGrey
                textWhite
                textType='semi-bold'
                textSize={12}
                onPress={() => onActionPress()}
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
                    <CustomText type='regular' size={14} lightGrey key={index}>
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
