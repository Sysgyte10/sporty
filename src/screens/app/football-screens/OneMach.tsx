import { CustomText } from "@src/components/shared";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ButtonLineList } from "@src/common";
import {
  CompetitionTab,
  MatchTab,
  PlayersTab,
  TeamTab,
} from "@src/components/app/one-match";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  getFixturesHead2Head,
  getTeamPlayersOrSquads,
  getTeamsByLeagueAndSeason,
} from "@src/api/services/football/football.service";
import { getMatchStatus, truncateText } from "@src/helper/utils";
import { useOneMatchDataStore } from "@src/api/store/app";
import { topScorersDataType } from "@src/types/types";

export const OneMach = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.ONE_MATCH>) => {
  const { teamOneId, teamTwoId, dateVal } = route?.params || {};
  const [selectedLineList, setSelectedLineList] = useState<string>("Match");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    setOneMatchData,
    oneMatchData,
    setPlayersData,
    selectedBtn,
    setLeagueTeams,
  } = useOneMatchDataStore();
  const currYear = new Date().getFullYear() - 1;

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        switch (selectedLineList) {
          case "Match":
            const data1 = await getFixturesHead2Head(
              `${teamOneId}-${teamTwoId}`,
              dateVal as string,
              dateVal as string,
            );

            setOneMatchData(data1 || []);
            break;

          case "Competition":
            const data2 = await getFixturesHead2Head(
              `${teamOneId}-${teamTwoId}`,
              dateVal as string,
              dateVal as string,
            );
            break;

          case "Team":
            const data3 = await getFixturesHead2Head(
              `${teamOneId}-${teamTwoId}`,
              dateVal as string,
              dateVal as string,
            );
            break;

          case "Players":
            const data4 = await getTeamPlayersOrSquads(
              selectedBtn === "Home"
                ? Number(teamOneId)
                : selectedBtn === "Away"
                  ? Number(teamTwoId)
                  : 0,
            );
            const players = data4.map((infos) => infos.players);
            const transformedPlayers = players[0]?.map((playerArray) => {
              return {
                id: playerArray?.id,
                name: playerArray?.name,
                age: playerArray?.age,
                number: playerArray?.number,
                position: playerArray?.position,
                photo: playerArray?.photo,
              };
            });
            setPlayersData(transformedPlayers || []);
            break;
        }
      } catch (err) {
        console.log("Error loading data", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [selectedLineList, teamOneId, teamTwoId, dateVal, selectedBtn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      async function loadData() {
        try {
          if (oneMatchData.length > 0) {
            console.log("oneMatchData", oneMatchData);

            const data = await getTeamsByLeagueAndSeason(
              oneMatchData?.[0]?.league.id,
              currYear,
            );

            const transformedData = data.map((item) => {
              return {
                id: item?.team?.id,
                footballerName: item?.team?.name,
                clubName: item?.venue?.name,
                clubImg: item?.team?.logo,
                goals: 0,
              } as topScorersDataType;
            });

            setLeagueTeams(transformedData);
          }
        } catch (err: any) {
          console.log("Error fetching data for league and season");
        }
      }

      loadData();
    }, 2000); // ⏱️ 2 seconds

    // 🧹 cleanup (VERY IMPORTANT)
    return () => clearTimeout(timer);
  }, [oneMatchData]);

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
          // heartIcon
          // notificationIcon
          onPressActionBtn={() => navigation.goBack()}
        />
      </View>
      {selectedLineList === "Match" && (
        <View>
          <CustomText
            type='semi-bold'
            size={12}
            lightGrey
            style={{
              paddingVertical: moderateScale(10),
              textAlign: "center",
            }}>
            {oneMatchData?.[0]?.fixture?.date
              ? new Date(oneMatchData[0].fixture.date).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  },
                )
              : "Match Date"}
          </CustomText>

          <View style={styles.scoreContainer}>
            <View style={styles.clubImgContainer}>
              <Image
                source={{ uri: oneMatchData?.[0]?.teams?.home?.logo }}
                contentFit='fill'
                style={styles.clubImg}
              />
            </View>
            <CustomText type='bold' size={20} white>
              {oneMatchData?.[0]?.goals?.home ?? ""} -
              {oneMatchData?.[0]?.goals?.away ?? "-"}
            </CustomText>
            <View style={styles.clubImgContainer}>
              <Image
                source={{ uri: oneMatchData?.[0]?.teams?.away?.logo }}
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
            <CustomText type='semi-bold' size={10} white>
              {oneMatchData?.[0]?.teams?.home?.name ?? "Team One"}
            </CustomText>
            <CustomText type='semi-bold' size={10} lightGrey>
              {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
            </CustomText>
            <CustomText type='semi-bold' size={10} white>
              {truncateText(
                `${oneMatchData?.[0]?.teams?.away?.name ?? "Team One"}`,
                15,
              )}
            </CustomText>
          </View>
        </View>
      )}
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

      {selectedLineList === "Match" && (
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <MatchTab />
        </Animated.View>
      )}
      {selectedLineList === "Competition" && (
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <CompetitionTab />
        </Animated.View>
      )}

      {selectedLineList === "Team" && (
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <TeamTab />
        </Animated.View>
      )}

      {selectedLineList === "Players" && (
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <PlayersTab
            leftTitle="Player's Name"
            middleText='Position'
            rightText='Number'
          />
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
