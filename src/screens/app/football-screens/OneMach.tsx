import { CustomText } from "@src/components/shared";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ButtonLineList } from "@src/common";
import { MatchTab } from "@src/components/app/one-match";
import Animated, { FadeIn } from "react-native-reanimated";

export const OneMach = ({
  navigation,
}: RootStackScreenProps<appScreenNames.ONE_MATCH>) => {
  const [selectedLineList, setSelectedLineList] = useState<string>("Match");
  return (
    <AppWrapper safeArea style={styles.appWrapper}>
      <View
        style={{
          paddingRight: moderateScale(15),
          borderBottomWidth: DVW(0.3),
          borderBottomColor: colors.lightGrey,
        }}>
        <AppNavigationHeader
          title='Back'
          heartIcon
          notificationIcon
          onPressActionBtn={() => navigation.goBack()}
        />
      </View>
      <View>
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
          <CustomText type='semi-bold' size={10} lightGrey>
            TOTHEHAM
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            FINISHED
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            CHELSEA
          </CustomText>
        </View>
        <View
          style={{
            marginVertical: moderateScale(3),
          }}>
          <ButtonLineList
            data={["Match", "Competition", "Team", "Players"]}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>
      </View>
      {selectedLineList === "Match" && (
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <MatchTab />
        </Animated.View>
      )}
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    paddingHorizontal: moderateScale(0),
    paddingVertical: moderateScale(0),
    backgroundColor: colors.black,
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
});
