import React, { useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import {
  appScreenNames,
  bottomTabScreenNames,
} from "@src/navigation/navigation-names";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../../ScrollContainer";
import { ButtonLineList, ButtonList, DateSwitch } from "@src/common";
import { sportyTypes } from "@src/constants/user-selection-steps";
import { FootBallHeader } from "@src/components/app/football";
import { footBallWatches } from "@src/constants/football";
import { StatusBar } from "expo-status-bar";
import {
  BasketballSport,
  FootballSport,
} from "@src/components/app/football/sports";
import { useActiveBottomTabStore } from "store";

export const Football = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    footBallWatches[0]
  );
  const { setTabName } = useActiveBottomTabStore();
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <StatusBar style='light' />
      <FootBallHeader
        title='RealSc⚽rZ'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
        onPressMenuIcon={() => navigation.navigate(appScreenNames.MORE)}
      />
      <View style={styles.btnListContainer}>
        <ButtonList
          data={sportyTypes}
          onButtonPress={(text) => {
            setSelectedSport(text);
            setTabName(text);
          }}
          selectedBtn={selectedSport}
        />
      </View>

      <ScrollContainer style={styles.scrollContainer}>
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
        {selectedSport === "Football" && (
          <FootballSport
            onPress={(fixtureId) =>
              navigation.navigate(appScreenNames.FIXTURE_INFO, {
                fixtureId: fixtureId,
              })
            }
            onPressMatchCard={() =>
              navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                screen: appScreenNames.ONE_MATCH,
              })
            }
          />
        )}

        {selectedSport === "Basketball" && (
          <BasketballSport
            onPress={(fixtureId, icon, title, desc) =>
              navigation.navigate(appScreenNames.BASKETBALL_FIXTURE_INFO, {
                fixtureId: fixtureId,
                image: icon as ImageSourcePropType,
                title: title as string,
                desc: desc as string,
              })
            }
            onPressMatchCard={() =>
              navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                screen: appScreenNames.ONE_MATCH,
              })
            }
          />
        )}
        <View
          style={{
            paddingVertical: DVH(7),
          }}
        />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
    marginTop: moderateScale(20),
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
