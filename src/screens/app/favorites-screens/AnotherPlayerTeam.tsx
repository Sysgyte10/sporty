import { ButtonLineList, SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform, FlatList } from "react-native";
import { Image } from "expo-image";
import {
  bio,
  fixturesOverview,
  footballFixtures,
  leagueStats,
} from "@src/constants/fixtures";
import { overViewStateType } from "../football-screens";
import {
  MatchesTab,
  NewsTab,
  OddsTab,
  OverviewTab,
  PlayerStatsTab,
  TableTab,
  TeamStatsTab,
} from "@src/components/app/fixture-info";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import Animated, { FadeIn } from "react-native-reanimated";
import { MatchCard, TeamCard } from "@src/cards";
import { playersData } from "@src/constants/user-selection-steps";
import { teamMates } from "@src/constants/football";

export const AnotherPlayerTeam = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.ANOTHER_PLAYER_TEAM>) => {
  const id = 1;
  const [addedTeams, addTeams] = useState<string[]>([]);
  const { screenTitle, screenDesc, image } = route?.params ?? {};
  const [selectedLineList, setSelectedLineList] = useState<string>(
    fixturesOverview[0]
  );
  const [overViewData, setOverViewData] = useState<overViewStateType>({
    filteredMatches: [],
    filteredTopScorer: [],
    matchHightLights: [],
    news: [],
    odds: [],
  });

  const getOverViewData = () => {
    const filteredData = footballFixtures.find((f) => f.id === id);
    const filteredTopScorers =
      filteredData && filteredData?.matches[0]?.topScorers;
    setOverViewData({
      ...overViewData,
      filteredMatches: filteredData?.matches ?? [],
      filteredTopScorer: filteredTopScorers ?? [],
      matchHightLights: filteredData?.matchHighLights ?? [],
      news: filteredData?.news ?? [],
      odds: filteredData?.odds ?? [],
    });
  };

  useEffect(() => {
    getOverViewData();
  }, [id]);

  const lastItemIndex = bio && bio.length - 1;

  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppNavigationHeader
        title={screenTitle}
        onPressActionBtn={() => navigation.goBack()}
        heartIcon
        searchIcon
      />

      <View style={styles.ctaContainer}>
        <View style={styles.ctaImgContainer}>
          <Image source={image} style={styles.ctaImg} contentFit='fill' />
        </View>
        <View style={styles.ctaTitle}>
          <CustomText size={14} white type='semi-bold'>
            {screenTitle}
          </CustomText>
          <CustomText size={12} lightGrey type='medium'>
            {screenDesc}
          </CustomText>
        </View>
      </View>

      <View
        style={{
          paddingVertical: moderateScale(10),
        }}>
        <ButtonLineList
          data={fixturesOverview}
          onButtonPress={(text) => setSelectedLineList(text)}
          selectedBtn={selectedLineList}
        />
      </View>

      {selectedLineList === fixturesOverview[0] && (
        <ScrollContainer>
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <View>
              <SectionHeader leftText='BIO' actionText=' ' />
              <View style={styles.card}>
                {bio &&
                  bio.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.cardContentContainer,
                        {
                          borderRightWidth:
                            index === lastItemIndex ? 0 : DVW(0.2),
                          borderRightColor: colors.lightGrey,
                        },
                      ]}>
                      <CustomText size={12} lightGrey type='semi-bold'>
                        {item.title}
                      </CustomText>
                      <CustomText size={12} lightGrey type='medium'>
                        {item.desc}
                      </CustomText>
                    </View>
                  ))}
              </View>
            </View>
            <View>
              <SectionHeader leftText='NEXT MATCH' actionText=' ' />
              <MatchCard
                showDate
                matchItem={{
                  id: 1,
                  date: "16 July",
                  topScorers: [
                    {
                      id: 1,
                      footballerName: "Jamail Musiala",
                      clubName: "Remo Stars",
                      clubImg: require("@src/assets/png/fixture.png"),
                      goals: 3,
                    },
                  ],
                  club: [
                    {
                      name: "New York City FC",
                      image: require("@src/assets/png/fixture.png"),
                      score: "4",
                    },
                    {
                      name: "Atlanta United",
                      image: require("@src/assets/png/fixture.png"),
                      score: "0",
                    },
                  ],
                }}
                onLikeItem={() => {}}
                containerStyle={[styles.matchCard]}
              />
            </View>
            <View>
              <SectionHeader leftText='LEAGUE STATS' actionText=' ' />
              <View style={styles.card}>
                {leagueStats &&
                  leagueStats.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.cardContentContainer,
                        {
                          borderRightWidth:
                            index === lastItemIndex ? 0 : DVW(0.2),
                          borderRightColor: colors.lightGrey,
                        },
                      ]}>
                      <CustomText size={12} lightGrey type='semi-bold'>
                        {item.title}
                      </CustomText>
                      <CustomText size={12} lightGrey type='medium'>
                        {item.desc}
                      </CustomText>
                    </View>
                  ))}
              </View>
            </View>
            <View>
              <SectionHeader leftText='CLUB HISTORY' actionText=' ' />
              <FlatList
                data={playersData}
                ListFooterComponent={
                  <View
                    style={{
                      paddingVertical: Platform.OS === "ios" ? DVH(0) : DVH(0),
                    }}
                  />
                }
                contentContainerStyle={{
                  gap: moderateScale(10),
                }}
                keyExtractor={(__, index) => index.toString()}
                renderItem={({ item, index }) => {
                  const selectedTeam = addedTeams.some(
                    (team) => team.toLowerCase() === item?.club?.toLowerCase()
                  );
                  return (
                    <Animated.View entering={FadeIn.delay(index * 200)}>
                      <TeamCard
                        selectionIcon='heart'
                        selected={selectedTeam}
                        key={index}
                        club={item?.club}
                        country={item?.country}
                        image={item?.image}
                        onSelectItem={(selectedTeam) => {
                          const isTeamExisting = addedTeams.some(
                            (team) =>
                              team.toLowerCase() === selectedTeam.toLowerCase()
                          );
                          if (!isTeamExisting) {
                            //update with new selected team if not existing
                            const updatedTeams = [...addedTeams, selectedTeam];
                            addTeams(updatedTeams);
                          } else {
                            //remove from selected team if existing
                            const removedTeam = addedTeams.filter(
                              (team) =>
                                team.toLowerCase() !==
                                selectedTeam.toLowerCase()
                            );
                            addTeams(removedTeam);
                          }
                        }}
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
            </View>
            <View>
              <SectionHeader leftText='TEAM MATES' actionText='' />
              <View
                style={{
                  height: DVH(13),
                }}>
                <ScrollContainer vertical>
                  {teamMates &&
                    teamMates.map((item, index) => (
                      <View key={index} style={styles.teamMatesCard}>
                        <View
                          style={{
                            alignItems: "center",
                          }}>
                          <CustomText type='semi-bold' size={12} lightGrey>
                            {item.fname}
                          </CustomText>
                          <CustomText type='medium' size={12} lightGrey>
                            {item.lname}
                          </CustomText>
                        </View>
                        <View style={styles.ctaImgContainer}>
                          <Image
                            source={image}
                            style={styles.ctaImg}
                            contentFit='fill'
                          />
                        </View>
                      </View>
                    ))}
                </ScrollContainer>
              </View>
            </View>
          </Animated.View>
          <View
            style={{
              paddingVertical: DVH(7),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[1] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <MatchesTab matches={overViewData?.filteredMatches} />
        // </Animated.View>
      )}

      {selectedLineList === fixturesOverview[3] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <NewsTab newsData={overViewData?.news} />
          {/* </Animated.View> */}

          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[2] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <TableTab goalScorerData={overViewData?.filteredTopScorer} />
          {/* </Animated.View> */}
          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[4] && (
        <ScrollContainer>
          {/* <Animated.View entering={FadeIn.delay(200).duration(600)}> */}
          <OddsTab oddsData={overViewData?.odds} />
          {/* </Animated.View> */}

          <View
            style={{
              paddingVertical: DVH(10),
            }}
          />
        </ScrollContainer>
      )}
      {selectedLineList === fixturesOverview[5] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <PlayerStatsTab topScorerData={overViewData?.filteredTopScorer} />
        // </Animated.View>
      )}
      {selectedLineList === fixturesOverview[6] && (
        // <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <TeamStatsTab goalScorerData={overViewData?.filteredTopScorer} />
        // </Animated.View>
      )}
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(10),
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    paddingVertical: moderateScale(5),
  },
  ctaImgContainer: {
    width: DVW(12),
    height: Platform.OS === "ios" ? DVH(5) : DVH(6),
    overflow: "hidden",
  },
  ctaImg: {
    width: "100%",
    height: "100%",
  },
  ctaTitle: {
    gap: moderateScale(10),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(30),
    backgroundColor: "#242222",
    borderRadius: moderateScale(10),
  },
  cardContentContainer: {
    alignItems: "center",
    gap: moderateScale(2),
    flex: 1,
  },
  matchCard: {
    backgroundColor: "#242222",
    width: "100%",
    paddingVertical: moderateScale(5),
  },
  teamMatesCard: {
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: "#242222",
    paddingHorizontal: moderateScale(20),
    marginRight: moderateScale(20),
    width: DVW(30),
    alignItems: "center",
    gap: moderateScale(5),
  },
});
