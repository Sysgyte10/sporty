import { AppWrapper } from "../AppWrapper";
import { ColorValue, StyleSheet, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { FormHeader } from "@src/common";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomButton, CustomText } from "@src/components/shared";
import { ScrollContainer } from "../ScrollContainer";
import { LinearGradient } from "expo-linear-gradient";
import { anotherMemberShipData } from "@src/constants/membership";

const anotherMembership = [
  "Ads-Free Experience",
  "Special Notification",
  "Priority Customer Support",
  "Access to Complex Strategies",
  "Access to Advanced Sports Analysis",
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

export const AnotherMembership = ({
  navigation,
}: AuthScreenProps<authScreenNames.ANOTHER_MEMBERSHIP>) => {
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <ScrollContainer style={styles.container}>
        <FormHeader
          title='Membership'
          description='Please choose any membership of your choice'
        />

        <View>
          <CustomText type='medium' size={14} white>
            Enjoy exclusive benefits:
          </CustomText>
          <View style={styles.mainItemContainer}>
            {anotherMembership &&
              anotherMembership.map((_, index) => (
                <View key={index} style={styles.itemContainer}>
                  <View
                    style={{
                      width: DVW(1.5),
                      height: DVH(0.75),
                      borderRadius: moderateScale(100),
                      backgroundColor: colors.lightGrey,
                    }}
                  />
                  <CustomText type='regular' size={12} lightGrey>
                    {_}
                  </CustomText>
                </View>
              ))}
          </View>
        </View>
        {anotherMemberShipData &&
          anotherMemberShipData.map((item, index) => {
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
                style={{
                  width: "100%",
                  paddingVertical: moderateScale(20),
                  borderRadius: moderateScale(10),
                  paddingHorizontal: moderateScale(25),
                }}>
                <View style={{ gap: moderateScale(15) }}>
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
                      style={{ marginBottom: moderateScale(-10) }}>
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
                    onPress={() => {}}
                    btnStyle={styles.btn}
                  />

                  <CustomText
                    type='regular'
                    size={13}
                    white
                    style={{ marginBottom: moderateScale(7) }}>
                    What's included:
                  </CustomText>

                  <View>
                    {item?.whatsIncluded &&
                      item?.whatsIncluded.map((i, index) => (
                        <CustomText
                          type='regular'
                          size={11}
                          lightGrey
                          key={index}>
                          {i}
                        </CustomText>
                      ))}
                  </View>
                </View>
              </LinearGradient>
            );
          })}
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(5),
    gap: moderateScale(15),
  },
  mainItemContainer: {
    marginTop: moderateScale(10),
    gap: moderateScale(5),
  },
  itemContainer: {
    gap: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
  },
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
