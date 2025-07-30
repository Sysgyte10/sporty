import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { TableTab, TeamStatsTab } from "../fixture-info";
import { footballFixtures } from "@src/constants/fixtures";
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { oneMatchInfo } from "@src/constants/onematch";

export const MatchTab: React.FC<{}> = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View style={styles.timeLineCard}>
        <CustomText type='semi-bold' size={12} lightGrey>
          Timeline
        </CustomText>
        <View style={styles.arrowContainer}>
          <MaterialCommunityIcons
            name='arrow-collapse'
            size={moderateScale(10)}
            color={colors.white}
          />
        </View>
      </View>
      <CustomText
        type='semi-bold'
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}>
        HALF TIME {`{0 - 1}`}
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
                <CustomText type='bold' size={10} lightGrey>
                  {item?.time}
                </CustomText>
                {item?.yellowCard ? (
                  <View style={styles.yellowCard} />
                ) : (
                  <Image
                    source={require("@src/assets/png/recycle.png")}
                    contentFit='contain'
                    style={styles.recycleIcon}
                  />
                )}
                <CustomText type='bold' size={10} lightGrey>
                  {item?.firstName}
                </CustomText>
                <CustomText type='medium' size={10} lightGrey>
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
                <CustomText type='bold' size={10} lightGrey>
                  {item?.time}
                </CustomText>
                {item?.yellowCard ? (
                  <View style={styles.yellowCard} />
                ) : (
                  <Image
                    source={require("@src/assets/png/recycle.png")}
                    contentFit='contain'
                    style={styles.recycleIcon}
                  />
                )}
                <CustomText type='bold' size={10} lightGrey>
                  {item?.firstName}
                </CustomText>
                <CustomText type='medium' size={10} lightGrey>
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
                <CustomText type='bold' size={10} lightGrey>
                  {item?.time}
                </CustomText>
                {item?.yellowCard ? (
                  <View style={styles.yellowCard} />
                ) : (
                  <Image
                    source={require("@src/assets/png/recycle.png")}
                    contentFit='contain'
                    style={styles.recycleIcon}
                  />
                )}
                <CustomText type='bold' size={10} lightGrey>
                  {item?.firstName}
                </CustomText>
                <CustomText type='medium' size={10} lightGrey>
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
                <CustomText type='bold' size={10} lightGrey>
                  {item?.time}
                </CustomText>
                {item?.yellowCard ? (
                  <View style={styles.yellowCard} />
                ) : (
                  <Image
                    source={require("@src/assets/png/recycle.png")}
                    contentFit='contain'
                    style={styles.recycleIcon}
                  />
                )}
                <CustomText type='bold' size={10} lightGrey>
                  {item?.firstName}
                </CustomText>
                <CustomText type='medium' size={10} lightGrey>
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
        <CustomText type='medium' size={12} lightGrey>
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
      <CustomText
        type='semi-bold'
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}>
        HALF TIME {`{0 - 1}`}
      </CustomText>
      <View
        style={[
          styles.timeLineCard,
          {
            justifyContent: "flex-end",
            gap: moderateScale(10),
          },
        ]}>
        <FontAwesome
          name='soccer-ball-o'
          size={moderateScale(17)}
          color={colors.white}
          style={{
            marginRight: moderateScale(10),
          }}
        />
        <CustomText type='semi-bold' size={12} lightGrey>
          {oneMatchInfo[0]?.firstName}
        </CustomText>
        <CustomText type='medium' size={12} lightGrey>
          {oneMatchInfo[0]?.lastName}
        </CustomText>
      </View>
      <TableTab goalScorerData={footballFixtures[0]?.matches[0]?.topScorers} />

      <View
        style={{
          paddingVertical: DVH(20),
        }}
      />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
  timeLineCard: {
    backgroundColor: "#242222",
    paddingVertical: moderateScale(10),
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
  yellowCard: {
    paddingVertical: DVH(1.2),
    paddingHorizontal: DVW(2),
    borderRadius: moderateScale(6),
    backgroundColor: "#FFCD57",
    marginBottom: moderateScale(5),
  },
  recycleIcon: {
    width: DVW(4),
    height: DVH(2),
  },
});
