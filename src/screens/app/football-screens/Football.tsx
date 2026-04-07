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
import {
  getLiveFixtures,
  getLiveFixturesByDate,
} from "@src/api/services/football/football.service";
import { transformFixturesToLeagues } from "@src/api/services/football/football.transformer";
import { getToday } from "@src/helper/utils";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";

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
  const today = new Date().toISOString().split("T")[0] as string;
  const [selectedDate, setSelectedData] = useState<string>(today);
  const [loading, setLoading] = useState<boolean>(false);
  const { setFixtures, fixtures } = useFixturesStore();
  const { searchQuery, setSearchQuery, filteredFixtures } = useFixtureSearch(
    fixtures ?? [],
  );

  const initiateDataForAllMatches = async () => {
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

  const initiateDataForLiveMatches = async () => {
    try {
      setLoading(true);
      const data = await getLiveFixtures("all");
      const transformed = transformFixturesToLeagues(data);
      setFixtures(transformed);
      console.log("Live Fixtures", transformed);
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  const initiateDataForFinishedMatches = async () => {
    try {
      setLoading(true);
      const finishedMatches = fixtures.map((fixture) => {
        const matchData = fixture.matches.filter(
          (match) => match.short === "FT",
        );
        return { ...fixture, matches: matchData };
      });
      setFixtures(finishedMatches);
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initiateDataForAllMatches();
  }, [selectedDate]);

  //get all live matches currently
  useEffect(() => {
    if (selectedLineList === "Live") {
      initiateDataForLiveMatches();
    } else if (selectedLineList === "All") {
      initiateDataForAllMatches();
    } else if (selectedLineList === "Finished") {
      initiateDataForFinishedMatches();
    }
  }, [selectedLineList]);

  return (
    <>
      <AppWrapper safeArea bgColor={colors.black}>
        <StatusBar style='light' />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View
            style={{
              width: moderateScale(350),
              height: moderateScale(70),
              overflow: "hidden",
              // backgroundColor: colors.purple,
              alignItems: "flex-end",
              marginLeft: moderateScale(-120),
            }}>
            <Image
              source={require("@src/assets/png/realscorz.png")}
              contentFit='cover'
              style={{
                width: "100%",
                height: "100%",
              }}
              // style={styles.headerImage}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setIsSearchModalVisible(true)}
              style={{
                alignSelf: "flex-end",
              }}>
              <Feather
                name='search'
                color={colors.white}
                size={moderateScale(20)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setIsAuthenticated(false);
                setGoToPredictions(true);
              }}>
              <CustomText size={14} type='medium' purple>
                Go To Predictions
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
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
              console.log("Selected Date", dateVal);
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
                  onPress={(fixtureId, leagueId) =>
                    navigation.navigate(appScreenNames.FIXTURE_INFO, {
                      fixtureId: fixtureId,
                      leagueId: leagueId,
                    })
                  }
                  onPressMatchCard={(firstClubId, secondClubId, leagueId) =>
                    navigation.navigate(bottomTabScreenNames.FOOTBALL_STACK, {
                      screen: appScreenNames.ONE_MATCH,
                      params: {
                        teamOneId: firstClubId,
                        teamTwoId: secondClubId,
                        dateVal: selectedDate,
                        leagueId: leagueId,
                      },
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
