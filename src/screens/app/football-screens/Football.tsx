import React, { useEffect, useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import {
  appScreenNames,
  bottomTabScreenNames,
} from "@src/navigation/navigation-names";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../../ScrollContainer";
import {
  ButtonLineList,
  ButtonList,
  DateSwitch,
  Loader,
  SearchFilterModal,
} from "@src/common";
import { sportyTypes } from "@src/constants/user-selection-steps";
import { FootBallHeader } from "@src/components/app/football";
import { footBallWatches } from "@src/constants/football";
import { StatusBar } from "expo-status-bar";
import {
  AmericanFootballSport,
  BasketballSport,
  Cricket,
  FootballSport,
  IceHockey,
  TennisSport,
} from "@src/components/app/football/sports";
import { useActiveBottomTabStore, useFixturesStore } from "store";
import { AdComponent, CustomText } from "@src/components/shared";
import { useAuthStore } from "@src/api/store/auth";
import { useFixtureSearch, useGoToPredictions } from "@src/hooks";
import { getLiveFixturesByDate } from "@src/api/services/football/football.service";
import { transformFixturesToLeagues } from "@src/api/services/football/football.transformer";
import { getToday } from "@src/helper/utils";

export const Football = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    footBallWatches[0],
  );
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const { setTabName } = useActiveBottomTabStore();
  const { setIsAuthenticated } = useAuthStore();
  const { setGoToPredictions } = useGoToPredictions();

  const [selectedDate, setSelectedData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { setFixtures, fixtures } = useFixturesStore();
  const { searchQuery, setSearchQuery, filteredFixtures, hasResults } =
    useFixtureSearch(fixtures ?? []);

  useEffect(() => {
    const initiateData = async () => {
      try {
        setLoading(true);
        const dateToUse = selectedDate || getToday();
        const data = await getLiveFixturesByDate(dateToUse);
        const transformed = transformFixturesToLeagues(data);
        setFixtures(transformed);
      } catch (err: any) {
        console.log("Error", err);
      } finally {
        setLoading(false);
      }
    };

    initiateData();
  }, [selectedDate]);

  return (
    <>
      <AppWrapper safeArea bgColor={colors.black}>
        <StatusBar style='light' />
        <TouchableOpacity
          onPress={() => {
            setIsAuthenticated(false);
            setGoToPredictions(true);
          }}
          style={{
            alignSelf: "flex-end",
          }}>
          <CustomText size={14} type='medium' purple>
            Go To Predictions
          </CustomText>
        </TouchableOpacity>
        <FootBallHeader
          title='RealSc⚽rZ'
          showSearchIcon
          showMenuIcon
          onPressSearchIcon={() => setIsSearchModalVisible(true)}
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
          <DateSwitch
            onDateChange={(dateVal) => {
              setSelectedData(dateVal);
            }}
          />
          <AdComponent
            imgSrc={require("@src/assets/jpg/ad1.jpg")}
            imageFit='contain'
            visible={true}
          />
          {loading ? (
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}>
              <Loader size='large' color={colors.purple} />
            </View>
          ) : (
            <>
              {selectedSport === "Football" && (
                <FootballSport
                  data={filteredFixtures}
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
                    navigation.navigate(
                      appScreenNames.BASKETBALL_FIXTURE_INFO,
                      {
                        fixtureId: fixtureId,
                        image: icon as ImageSourcePropType,
                        title: title as string,
                        desc: desc as string,
                      },
                    )
                  }
                  onPressMatchCard={() =>
                    navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                      screen: appScreenNames.ONE_MATCH,
                    })
                  }
                />
              )}

              {selectedSport === "Tennis" && (
                <TennisSport
                  onPress={(fixtureId, icon, title, desc) =>
                    navigation.navigate(appScreenNames.TENNIS_FIXTURE_INFO, {
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

              {selectedSport === "American Football" && (
                <AmericanFootballSport
                  onPress={(fixtureId, icon, title, desc) =>
                    navigation.navigate(
                      appScreenNames.AMERICAN_FOOTBALL_FIXTURE_INFO,
                      {
                        fixtureId: fixtureId,
                        image: icon as ImageSourcePropType,
                        title: title as string,
                        desc: desc as string,
                      },
                    )
                  }
                  onPressMatchCard={() =>
                    navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                      screen: appScreenNames.ONE_MATCH,
                    })
                  }
                />
              )}

              {selectedSport === "Cricket" && (
                <Cricket
                  onPress={(fixtureId, icon, title, desc) =>
                    navigation.navigate(appScreenNames.CRICKET_FIXTURE_INFO, {
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

              {selectedSport === "Ice Hockey" && (
                <IceHockey
                  onPress={(fixtureId, icon, title, desc) =>
                    navigation.navigate(
                      appScreenNames.ICE_HOCKEY_FIXTURE_INFO,
                      {
                        fixtureId: fixtureId,
                        image: icon as ImageSourcePropType,
                        title: title as string,
                        desc: desc as string,
                      },
                    )
                  }
                  onPressMatchCard={() =>
                    navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                      screen: appScreenNames.ONE_MATCH,
                    })
                  }
                />
              )}
            </>
          )}
          <View
            style={{
              paddingVertical: DVH(7),
            }}
          />
        </ScrollContainer>
      </AppWrapper>
      <View
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: moderateScale(1),
          width: "95%",
          alignSelf: "center",
        }}>
        <AdComponent
          imgSrc={require("@src/assets/jpg/ad2.jpg")}
          imageFit='cover'
          visible={true}
          containerStyle={{
            height: DVH(7),
          }}
        />
      </View>
      <SearchFilterModal
        visible={isSearchModalVisible}
        onClose={() => setIsSearchModalVisible(false)}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        placeholder='Search fixtures...'
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
    marginTop: moderateScale(22),
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
