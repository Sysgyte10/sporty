import React, { useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../../ScrollContainer";
import { ButtonLineList, ButtonList, DateSwitch } from "@src/common";
import { sportyTypes } from "@src/constants/user-selection-steps";
import { FootBallHeader } from "@src/components/app/football";
import { footBallWatches } from "@src/constants/football";
import { Image } from "expo-image";
import { footballFixtures } from "@src/constants/fixtures";
import { FixtureCard } from "@src/cards";
import Animated, { ZoomIn } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export const Football = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    footBallWatches[0]
  );
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <StatusBar style='light' />
      <FootBallHeader
        title='ScoresWatch'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
        onPressMenuIcon={() => navigation.navigate(appScreenNames.MORE)}
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
        <View
          style={{
            marginTop: moderateScale(-30),
          }}>
          <ButtonLineList
            data={footBallWatches}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>
        <DateSwitch />
        <FlatList
          data={footballFixtures}
          contentContainerStyle={{
            gap: moderateScale(1),
          }}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={ZoomIn.delay(index * 200).duration(800)} // increase to 800ms or more
                key={index}>
                <FixtureCard
                  data={item}
                  onPress={(fixtureId) =>
                    navigation.navigate(appScreenNames.FIXTURE_INFO, {
                      fixtureId: fixtureId,
                    })
                  }
                />
              </Animated.View>
            );
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
  },
  btnListContainer: {
    paddingVertical: moderateScale(8),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
  },
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(5),
  },
  ctaImgContainer: {
    marginTop: moderateScale(10),
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
