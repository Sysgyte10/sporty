import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { Image } from "expo-image";
import { CustomButton, CustomText } from "@src/components/shared";
import { ScrollContainer } from "@src/screens/ScrollContainer";

export const ForYouNews = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FOR_YOU_NEWS>) => {
  return (
    <AppWrapper safeArea style={styles.container} bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <ScrollContainer>
        <View style={[styles.bgImgContainer]}>
          <Image
            source={require("@src/assets/png/highlight1.png")}
            contentFit='fill'
            style={styles.bgImg}
          />
          <View style={[styles.darkOverlay]} />
        </View>
        <View
          style={{
            paddingVertical: moderateScale(10),
            gap: moderateScale(10),
            paddingHorizontal: moderateScale(10),
          }}>
          <CustomText
            type='semi-bold'
            size={20}
            style={[
              {
                color: "#FFFFFFB3",
              },
            ]}>
            Micheal Olise in Club World Cup debut, Brazillian media remain
            sceptical
          </CustomText>
          <CustomText
            type='medium'
            size={13}
            style={[
              {
                color: "#FFFFFFB3",
                textAlign: "justify",
              },
            ]}>
            Newcastle have made bids totalling £125m for Brighton striker Joao
            Pedro, Burnley goalkeeper James Trafford and Nottingham Forest
            winger Anthony Elanga, according to The Telegraph. The report says
            all three players are interested in the moves and would love to play
            for Magpies manager Eddie Howe, with the players’ wage demands not
            an issue amid the club's return to the Champions League next season.
            But it is claimed there is a gap between the bids made and the
            current valuations of the players, although there is growing
            momentum behind Newcastle’s recruitment moves, and things could
            shift dramatically in the coming days.
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: moderateScale(10),
            paddingBottom: DVH(5),
            paddingTop: moderateScale(10),
          }}>
          <CustomButton
            title={"Read"}
            onPress={() => {}}
            purple
            textWhite
            textType='medium'
            buttonType='Outline'
            btnStyle={styles.bottomActionBtn}
          />
          <CustomButton
            title={"Share"}
            onPress={() => {}}
            purple
            textWhite
            textType='medium'
            buttonType='Outline'
            btnStyle={styles.bottomActionBtn}
          />
        </View>
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(0),
    paddingVertical: moderateScale(0),
  },
  imgContainer: {
    width: "100%",
  },
  rightIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  bgImgContainer: {
    width: "100%",
    height: DVH(30),
    overflow: "hidden",
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    position: "absolute",
    height: DVH(30),
    marginTop: moderateScale(10),
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.234)",
    borderRadius: moderateScale(0),
    alignSelf: "center",
  },
  bottomActionBtn: {
    paddingVertical: moderateScale(8),
    borderColor: colors.white,
    borderRadius: moderateScale(50),
    borderWidth: DVW(0.25),
    width: "45%",
  },
});
