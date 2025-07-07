import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../ScrollContainer";
import { ButtonLineList, ButtonList, DateSwitch } from "@src/common";
import { sportyTypes } from "@src/constants/user-selection-steps";
import { FootBallHeader } from "@src/components/app/football";
import { footBallWatches } from "@src/constants/football";
import { Image } from "expo-image";

export const Football = ({}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    footBallWatches[0]
  );
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <FootBallHeader
        title='ScoresWatch'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
      />
      <ScrollContainer style={styles.scrollContainer}>
        <View style={styles.btnListContainer}>
          <ButtonList
            data={sportyTypes}
            onButtonPress={(text) => setSelectedSport(text)}
            selectedBtn={selectedSport}
          />
        </View>
        <View style={styles.ctaImgContainer}>
          <Image
            source={require("@src/assets/png/home-cta.png")}
            contentFit='fill'
            style={styles.ctaImg}
          />
        </View>
        <View>
          <ButtonLineList
            data={footBallWatches}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>
        <DateSwitch />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
  },
  btnListContainer: {
    paddingVertical: moderateScale(20),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
  },
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(5),
  },
  ctaImgContainer: {
    width: "100%",
    height: DVH(12),
    overflow: "hidden",
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(30),
  },
  ctaImg: {
    width: "100%",
    height: "100%",
  },
  stepSwitchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
