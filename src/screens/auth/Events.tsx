import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { FootBallHeader } from "@src/components/app/football";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { DateSwitch } from "@src/common";
import { ScrollContainer } from "../ScrollContainer";
import { CustomText } from "@src/components/shared";
import { Image } from "expo-image";
import { useAuthStore } from "@src/api/store/auth";

export const Events = ({
  navigation,
}: AuthScreenProps<authScreenNames.EVENTS>) => {
  const { setIsAuthenticated } = useAuthStore();
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <FootBallHeader
        title='Events'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
        onPressMenuIcon={() => navigation.navigate("")}
        onPressSearchIcon={() => setIsAuthenticated(true)}
      />
      <ScrollContainer
        style={{ paddingHorizontal: moderateScale(2), gap: moderateScale(10) }}>
        <DateSwitch />
        <View style={styles.cardContainer}>
          <CustomText type='semi-bold' size={16} white>
            Exclusive for VVIP Members
          </CustomText>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => navigation.navigate(authScreenNames.ANOTHER_EVENTS)}>
            <Image
              source={require("@src/assets/png/exclusive-vvip.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <CustomText type='semi-bold' size={16} white>
            Daily Events
          </CustomText>
          <TouchableOpacity style={styles.imgContainer}>
            <Image
              source={require("@src/assets/png/daily-events.png")}
              contentFit='contain'
              style={styles.img}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              //   alignItems: "center",
              gap: moderateScale(10),
            }}>
            <View style={styles.card}>
              <Image
                source={require("@src/assets/png/football.png")}
                style={styles.cardImg}
                contentFit='cover'
              />
            </View>
            <View style={[styles.card]}>
              <Image
                source={require("@src/assets/png/tennis.png")}
                style={styles.cardImg}
                contentFit='cover'
              />
            </View>
            <View style={styles.card}>
              <Image
                source={require("@src/assets/png/basketball.png")}
                style={styles.cardImg}
                contentFit='cover'
              />
            </View>
            <View style={styles.card}>
              <Image
                source={require("@src/assets/png/american-football.png")}
                style={styles.cardImg}
                contentFit='fill'
              />
            </View>
            <View style={styles.card}>
              <Image
                source={require("@src/assets/png/cricket.png")}
                style={styles.cardImg}
                contentFit='cover'
              />
            </View>
            <View style={styles.card}>
              <Image
                source={require("@src/assets/png/volleyball.png")}
                style={styles.cardImg}
                contentFit='fill'
              />
            </View>
          </View>
        </View>
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(10),
  },
  cardContainer: {
    gap: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  imgContainer: {
    width: "100%",
    height: DVH(12),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    borderWidth: DVW(0.2),
    borderColor: colors.darkGrey,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  card: {
    width: "48%",
    height: DVH(10),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    borderWidth: DVW(0.2),
    borderColor: colors.darkGrey,
  },
  cardImg: {
    width: "100%",
    height: "100%",
  },
});
