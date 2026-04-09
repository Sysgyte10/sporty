import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useEffect, useState } from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { TableTab } from "../fixture-info";
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { oneMatchInfo } from "@src/constants/onematch";
import { useOneMatchDataStore } from "@src/api/store/app";
import { getMatchStatus, getPlayerStyle, groupByRow } from "@src/helper/utils";
import { getLineUpsOfTeams } from "@src/api/services/football/football.service";
import { lineUpsOfTeams } from "@src/api/types/types";

const keyStats = [
  {
    title: "Possessions %",
    clubName: "PSG",
    stats: [75, 25],
  },
  {
    title: "Shots on target",
    clubName: "BOT",
    stats: [2, 4],
  },
  {
    title: "Corners",
    clubName: "PSG",
    stats: [10, 1],
  },
];

export const MatchTab: React.FC<{}> = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const { oneMatchData } = useOneMatchDataStore();
  const { leagueTeams } = useOneMatchDataStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [lineUps, setLineUps] = useState<lineUpsOfTeams | null>(null);
  const [grouped, setGrouped] = useState<any>(null);

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      try {
        const data = await getLineUpsOfTeams(592872, 50);
        console.log("Lineups data:", data);
        setLineUps(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (loading || !lineUps) {
      return;
    }
    const grouped = groupByRow(lineUps.startXI);
    setGrouped(grouped);
  }, [lineUps, loading]);

  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View style={styles.timeLineCard}>
        <CustomText type='semi-bold' size={12} lightGrey>
          Timeline
        </CustomText>
        <View style={styles.arrowContainer}>
          <MaterialCommunityIcons
            name='arrow-collapse'
            size={moderateScale(15)}
            color={colors.white}
          />
        </View>
      </View>
      <CustomText
        type='semi-bold'
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}>
        {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
        {oneMatchData?.[0]?.goals?.home ?? ""} -{" "}
        {oneMatchData?.[0]?.goals?.away ?? "-"}
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
                  // <View style={styles.yellowCard} />
                  <FontAwesome
                    name='soccer-ball-o'
                    size={moderateScale(17)}
                    color={colors.white}
                    style={{
                      marginRight: moderateScale(10),
                    }}
                  />
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
                  // <Image
                  //   source={require("@src/assets/png/recycle.png")}
                  //   contentFit='contain'
                  //   style={styles.recycleIcon}
                  // />
                  <FontAwesome
                    name='soccer-ball-o'
                    size={moderateScale(17)}
                    color={colors.white}
                    style={{
                      marginRight: moderateScale(10),
                    }}
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
      {/* <Animated.View entering={FadeIn.delay(200).duration(600)}>
        <TeamStatsTab
          goalScorerData={footballFixtures[0]?.matches[0]?.topScorers}
          showFilter={false}
          listFooterHeight={0.1}
          type='players'
        />
      </Animated.View> */}
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
        {oneMatchData?.[0]?.fixture?.status?.short === "NS"
          ? "NOT STARTED "
          : oneMatchData?.[0]?.fixture?.status?.short === "FT"
            ? "FULL TIME "
            : oneMatchData?.[0]?.fixture?.status?.short === "2H"
              ? "SECOND HALF "
              : oneMatchData?.[0]?.fixture?.status?.short === "1H"
                ? "FIRST HALF "
                : oneMatchData?.[0]?.fixture?.status?.short}
        {oneMatchData?.[0]?.goals?.home ?? ""} -{" "}
        {oneMatchData?.[0]?.goals?.away ?? "-"}
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
      <TableTab
        goalScorerData={leagueTeams}
        leftText={oneMatchData?.[0]?.league.name.toUpperCase()}
        leftTitleText='Club Names'
        middleTitleText='Venue'
      />

      <View
        style={[
          styles.timeLineCard,
          { flexDirection: "column", marginBottom: moderateScale(10) },
        ]}>
        <View style={styles.keyStatsIconContainer}>
          <CustomText type='semi-bold' size={12} lightGrey>
            Key stats
          </CustomText>
          <View style={styles.arrowContainer}>
            <MaterialCommunityIcons
              name='arrow-collapse'
              size={moderateScale(15)}
              color={colors.white}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}>
          {keyStats &&
            keyStats.map((item, index) => (
              <View style={styles.keyStatsSubCard} key={index}>
                <CustomText size={10} type='medium' lightGrey>
                  {item.title}
                </CustomText>
                <CustomText size={12} type='semi-bold' lightGrey>
                  {item.clubName}
                </CustomText>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: 1,
                  }}>
                  {item?.stats?.map((value, index) => (
                    <View
                      style={{ flex: 1, gap: moderateScale(5) }}
                      key={index}>
                      <CustomText type='semi-bold' size={12} lightGrey>
                        {value}
                      </CustomText>
                      <View
                        style={{
                          width: value > 50 ? "90%" : "70%",
                          height: DVH(0.5),
                          borderRadius: moderateScale(5),
                          backgroundColor:
                            value > 50 ? colors.purple : colors.lightGrey,
                        }}
                      />
                    </View>
                  ))}
                </View>
              </View>
            ))}
        </View>
      </View>

      <View style={styles.timeLineCard}>
        <CustomText type='medium' size={12} lightGrey>
          Relevant Matches
        </CustomText>
      </View>

      <CustomText
        type='semi-bold'
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}>
        JUNE 19 (FT)
      </CustomText>

      {Array.from({ length: 2 }).map((_, index) => (
        <View style={styles.scoreContainerCard}>
          <View style={styles.scoreContainer}>
            <View style={styles.clubImgContainer}>
              <Image
                source={
                  index === 0
                    ? require("@src/assets/png/totheham.png")
                    : require("@src/assets/png/liverpool.png")
                }
                contentFit='fill'
                style={styles.clubImg}
              />
            </View>
            <CustomText type='bold' size={20} white>
              {index === 0 ? "1 - 0" : "0 - 1"}
            </CustomText>
            <View style={styles.clubImgContainer}>
              <Image
                source={
                  index === 0
                    ? require("@src/assets/png/chelsea.png")
                    : require("@src/assets/png/arsenal.png")
                }
                contentFit='fill'
                style={styles.clubImg}
              />
            </View>
          </View>
          <View
            style={[
              styles.scoreContainer,
              {
                paddingHorizontal: moderateScale(15),
                paddingBottom: moderateScale(10),
              },
            ]}>
            <CustomText type='semi-bold' size={10} lightGrey>
              {index === 0 ? "TOTHEHAM" : "LIVERPOOL"}
            </CustomText>
            <CustomText type='semi-bold' size={10} lightGrey>
              FINISHED
            </CustomText>
            <CustomText type='semi-bold' size={10} lightGrey>
              {index === 0 ? "CHELSEA" : "ARSENAL"}
            </CustomText>
          </View>
        </View>
      ))}

      <View
        style={[
          styles.timeLineCard,
          {
            flexDirection: "column",
          },
        ]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: moderateScale(5),
          }}>
          <CustomText type='semi-bold' size={12} lightGrey>
            CONFIRMED LINEUPS
          </CustomText>
          <View style={styles.arrowContainer}>
            <MaterialCommunityIcons
              name='arrow-collapse'
              size={moderateScale(15)}
              color={colors.white}
            />
          </View>
        </View>
        {/* <View
          style={{
            width: "100%",
            height: DVH(47),
            overflow: "hidden",
          }}>
          <ImageBackground
            contentFit='fill'
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("@src/assets/jpg/football-field.jpg")}>
            <View style={{ flex: 1 }}>
              {Object.entries(grouped).map(([row, players]: any) =>
                players.map((player: any, index: number) => {
                  const style = getPlayerStyle(
                    Number(row),
                    index,
                    players.length,
                  );

                  return (
                    <View key={player.id} style={style as StyleProp<ViewStyle>}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          backgroundColor: `#${lineUps.team.colors.player.primary}`,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: `#${lineUps.team.colors.player.border}`,
                        }}>
                        <CustomText type='bold' white size={12}>
                          {player.name.split(" ").pop()}
                        </CustomText>
                      </View>

                      <CustomText
                        white
                        size={10}
                        style={{
                          marginTop: 4,
                          textAlign: "center",
                        }}>
                        {player?.name}
                      </CustomText>
                    </View>
                  );
                }),
              )}
            </View>
          </ImageBackground>
        </View> */}

        <View
          style={{
            width: "100%",
            height: DVH(47),
            overflow: "hidden",
          }}>
          <ImageBackground
            contentFit='fill'
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("@src/assets/jpg/football-field.jpg")}>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                marginLeft: moderateScale(-50),
              }}>
              {Object.entries(grouped || {}).map(([row, players]: any) =>
                players.map((player: any, index: number) => {
                  const style = getPlayerStyle(
                    Number(row),
                    index,
                    players.length,
                  );

                  return (
                    <View key={player.id} style={style as StyleProp<ViewStyle>}>
                      {/* Player Circle */}
                      <View
                        style={{
                          width: moderateScale(50),
                          height: moderateScale(50),
                          borderRadius: moderateScale(25),
                          backgroundColor: colors.purple,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: `#${lineUps?.team?.colors?.player?.border ?? "ffffff"}`,
                        }}>
                        <CustomText
                          type='bold'
                          white
                          size={10}
                          style={{
                            textAlign: "center",
                          }}>
                          {player.name.split(" ").pop()}
                        </CustomText>
                      </View>

                      {/* Player Name */}
                      <CustomText
                        white
                        size={10}
                        style={{
                          marginTop: 4,
                          textAlign: "center",
                        }}>
                        {player?.name}
                      </CustomText>
                    </View>
                  );
                }),
              )}
            </View>
          </ImageBackground>
        </View>
      </View>

      <View
        style={{
          paddingVertical: DVH(10),
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
    paddingVertical: DVH(1.25),
    paddingHorizontal: DVW(2.5),
    borderRadius: moderateScale(100),
    backgroundColor: "#FFCD57",
    marginBottom: moderateScale(5),
  },
  recycleIcon: {
    width: DVW(4),
    height: DVH(2),
  },
  keyStatsIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: moderateScale(5),
  },
  keyStatsSubCard: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(7),
    borderRadius: moderateScale(7),
    backgroundColor: colors.black,
    gap: moderateScale(5),
    overflow: "hidden",
    width: "32%",
  },

  clubImgContainer: {
    overflow: "hidden",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: "#242222",
  },
  clubImg: {
    width: DVW(8),
    height: Platform.OS === "ios" ? DVH(3) : DVH(4),
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
  },
  scoreContainerCard: {
    backgroundColor: "#242222",
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(10),
  },
});
