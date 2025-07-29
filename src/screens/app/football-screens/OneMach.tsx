import { CustomText } from "@src/components/shared";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ButtonLineList } from "@src/common";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { oneMatchInfo } from "@src/constants/onematch";
import Animated, { FadeIn } from "react-native-reanimated";
import { TeamStatsTab } from "@src/components/app/fixture-info";
import { footballFixtures } from "@src/constants/fixtures";
import SwitchToggle from "react-native-switch-toggle";

export const OneMach = ({
  navigation,
}: RootStackScreenProps<appScreenNames.ONE_MATCH>) => {
  const [selectedLineList, setSelectedLineList] = useState<string>("Match");
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
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
      <ScrollContainer style={styles.scrollContainer}>
        <CustomText
          type='semi-bold'
          size={14}
          lightGrey
          style={{
            paddingVertical: moderateScale(20),
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
          <CustomText type='bold' size={60} white>
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
              paddingVertical: moderateScale(10),
              paddingHorizontal: moderateScale(10),
            },
          ]}>
          <CustomText type='semi-bold' size={12} lightGrey>
            TOTHEHAM
          </CustomText>
          <CustomText type='semi-bold' size={12} lightGrey>
            FINISHED
          </CustomText>
          <CustomText type='semi-bold' size={12} lightGrey>
            CHELSEA
          </CustomText>
        </View>
        <View
          style={{
            marginVertical: moderateScale(10),
          }}>
          <ButtonLineList
            data={["Match", "Competition", "Team", "Players"]}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>

        <View style={styles.timeLineCard}>
          <CustomText type='semi-bold' size={16} lightGrey>
            Timeline
          </CustomText>
          <View style={styles.arrowContainer}>
            <MaterialCommunityIcons
              name='arrow-collapse'
              size={moderateScale(20)}
              color={colors.white}
            />
          </View>
        </View>
        <CustomText
          type='semi-bold'
          size={16}
          lightGrey
          style={{ textAlign: "center", paddingVertical: moderateScale(10) }}>
          FULL TIME {0 - 1}
        </CustomText>

        <View style={styles.scoreBoardCard}>
          <View>
            {oneMatchInfo &&
              oneMatchInfo.slice(0, 4).map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(12),
                  }}>
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.time}
                  </CustomText>
                  {item?.yellowCard ? (
                    <View
                      style={{
                        paddingVertical: DVH(1.5),
                        paddingHorizontal: DVW(2.5),
                        borderRadius: moderateScale(6),
                        backgroundColor: "#FFCD57",
                        marginBottom: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require("@src/assets/png/recycle.png")}
                      contentFit='contain'
                      style={{ width: DVW(6), height: DVH(3) }}
                    />
                  )}
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.firstName}
                  </CustomText>
                  <CustomText type='medium' size={14} lightGrey>
                    {item?.lastName}
                  </CustomText>
                </View>
              ))}
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            {oneMatchInfo &&
              oneMatchInfo.slice(0, 4).map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(12),
                  }}>
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.time}
                  </CustomText>
                  {item?.yellowCard ? (
                    <View
                      style={{
                        paddingVertical: DVH(1.5),
                        paddingHorizontal: DVW(2.5),
                        borderRadius: moderateScale(6),
                        backgroundColor: "#FFCD57",
                        marginBottom: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require("@src/assets/png/recycle.png")}
                      contentFit='contain'
                      style={{ width: DVW(6), height: DVH(3) }}
                    />
                  )}
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.firstName}
                  </CustomText>
                  <CustomText type='medium' size={14} lightGrey>
                    {item?.lastName}
                  </CustomText>
                </View>
              ))}
          </View>
          <View>
            {oneMatchInfo &&
              oneMatchInfo.slice(0, 1).map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(12),
                  }}>
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.time}
                  </CustomText>
                  {item?.yellowCard ? (
                    <View
                      style={{
                        paddingVertical: DVH(1.5),
                        paddingHorizontal: DVW(2.5),
                        borderRadius: moderateScale(6),
                        backgroundColor: "#FFCD57",
                        marginBottom: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require("@src/assets/png/recycle.png")}
                      contentFit='contain'
                      style={{ width: DVW(6), height: DVH(3) }}
                    />
                  )}
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.firstName}
                  </CustomText>
                  <CustomText type='medium' size={14} lightGrey>
                    {item?.lastName}
                  </CustomText>
                </View>
              ))}
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            {oneMatchInfo &&
              oneMatchInfo.slice(0, 2).map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(12),
                  }}>
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.time}
                  </CustomText>
                  {item?.yellowCard ? (
                    <View
                      style={{
                        paddingVertical: DVH(1.5),
                        paddingHorizontal: DVW(2.5),
                        borderRadius: moderateScale(6),
                        backgroundColor: "#FFCD57",
                        marginBottom: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require("@src/assets/png/recycle.png")}
                      contentFit='contain'
                      style={{ width: DVW(6), height: DVH(3) }}
                    />
                  )}
                  <CustomText type='bold' size={14} lightGrey>
                    {item?.firstName}
                  </CustomText>
                  <CustomText type='medium' size={14} lightGrey>
                    {item?.lastName}
                  </CustomText>
                </View>
              ))}
          </View>
        </View>
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <TeamStatsTab
            goalScorerData={footballFixtures[0]?.matches[0]?.topScorers}
            showFilter={false}
            listFooterHeight={0.1}
          />
        </Animated.View>
        <View
          style={[
            styles.scoreBoardCard,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}>
          <CustomText type='medium' size={16} lightGrey>
            Show Substitution
          </CustomText>
          <SwitchToggle
            switchOn={isSwitchOn}
            onPress={() => {
              setIsSwitchOn(!isSwitchOn);
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
            }}
            circleStyle={{
              width: 20,
              height: 22,
              borderRadius: 11,
            }}
          />
        </View>
      </ScrollContainer>
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
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
  clubImgContainer: {
    overflow: "hidden",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: "#242222",
  },
  clubImg: {
    width: DVW(15),
    height: Platform.OS === "ios" ? DVH(6.5) : DVH(7.5),
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeLineCard: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(100),
    backgroundColor: colors.black,
  },
  scoreBoardCard: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    gap: moderateScale(20),
  },
});
