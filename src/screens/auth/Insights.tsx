import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppNavigationHeader } from "../AppHeader";
import { FootBallHeader } from "@src/components/app/football";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { FontAwesome6, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
export const Insights = ({
  navigation,
}: AuthScreenProps<authScreenNames.INSIGHTS>) => {
  const onNavigate = () => {
    navigation.navigate(authScreenNames.ANOTHER_MEMBERSHIP);
  };

  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <FootBallHeader
        title='Insights'
        headerStyle={styles.header}
        rightIcon={
          <Fontisto
            name='share'
            color={colors.white}
            size={moderateScale(20)}
          />
        }
      />
      <View
        style={{
          paddingHorizontal: moderateScale(5),
        }}>
        <View
          style={{
            marginBottom: moderateScale(10),
          }}>
          <CustomText
            type='semi-bold'
            size={12}
            lightGrey
            style={{
              paddingVertical: moderateScale(10),
              textAlign: "center",
            }}>
            20.06.2025 02:00
          </CustomText>

          <View style={styles.scoreContainer}>
            <View style={styles.clubImgContainer}>
              {/* ⚽ */}
              <Image
                source={require("@src/assets/png/totheham.png")}
                contentFit='fill'
                style={styles.clubImg}
              />
            </View>
            <CustomText type='bold' size={20} white>
              1 - 0
            </CustomText>
            <View style={styles.clubImgContainer}>
              <Image
                source={require("@src/assets/png/chelsea.png")}
                contentFit='fill'
                style={styles.clubImg}
              />
            </View>
          </View>

          <View
            style={[
              styles.scoreContainer,
              {
                paddingTop: moderateScale(25),
                paddingHorizontal: moderateScale(15),
              },
            ]}>
            <View
              style={{
                alignItems: "center",
              }}>
              <CustomText type='semi-bold' size={12} lightGrey>
                SEVILLA
              </CustomText>
              <CustomText type='semi-bold' size={10} lightGrey>
                Home
              </CustomText>
            </View>
            <View
              style={{
                alignItems: "center",
              }}>
              <CustomText type='semi-bold' size={12} lightGrey>
                GETAFE
              </CustomText>
              <CustomText type='semi-bold' size={10} lightGrey>
                Away
              </CustomText>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <CustomText type='semi-bold' size={12} white>
            Over 4.5 Corners
          </CustomText>
        </View>
        <View style={styles.card}>
          <CustomText type='semi-bold' size={12} white>
            Unlock for free
          </CustomText>
        </View>

        <View>
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: "#215700",
                paddingVertical: moderateScale(13),
              },
            ]}
            onPress={() => onNavigate()}>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome6
                  name='sack-dollar'
                  size={moderateScale(15)}
                  color={"#215700"}
                />
              </View>
              <View>
                <CustomText type='semi-bold' size={12} black>
                  Unlock all insights
                </CustomText>
                <CustomText type='regular' size={12} black>
                  Until Midnight - 1200 NGN
                </CustomText>
              </View>
            </View>
            <MaterialIcons
              name='keyboard-arrow-right'
              color={colors.black}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: "#DFC313",
                paddingVertical: moderateScale(13),
              },
            ]}
            onPress={() => onNavigate()}>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome6
                  name='crown'
                  size={moderateScale(15)}
                  color={"#DFC313"}
                />
              </View>
              <View>
                <CustomText type='semi-bold' size={12} black>
                  Activate VIP Membership
                </CustomText>
              </View>
            </View>
            <MaterialIcons
              name='keyboard-arrow-right'
              color={colors.black}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  clubImgContainer: {
    overflow: "hidden",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: "#242222",
  },
  clubImg: {
    width: DVW(10),
    height: Platform.OS === "ios" ? DVH(4) : DVH(5),
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(-20),
    paddingHorizontal: moderateScale(10),
  },
  card: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScale(10),
    borderWidth: DVW(0.2),
    borderColor: colors.lightGrey,
  },
  iconContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(100),
    backgroundColor: colors.black,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
