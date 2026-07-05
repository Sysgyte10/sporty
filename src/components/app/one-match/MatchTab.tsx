// import { CustomText } from "@src/components/shared";
// import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
// import { ScrollContainer } from "@src/screens/ScrollContainer";
// import React, { useEffect, useState } from "react";
// import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
// import { Image, ImageBackground } from "expo-image";
// import { TableTab } from "../fixture-info";
// import SwitchToggle from "react-native-switch-toggle";
// import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
// import { colors } from "@src/resources/color/color";
// import { oneMatchInfo } from "@src/constants/onematch";
// import { useOneMatchDataStore } from "@src/api/store/app";
// import { getMatchStatus, getPlayerStyle, groupByRow } from "@src/helper/utils";
// import {
//   getKeyStatsOfTeamsByLeagueSeason,
//   getLineUpsOfTeams,
//   getTopScorerOfLeagueAndSeason,
//   getTopScorerOfLeagueAndSeason2,
// } from "@src/api/services/football/football.service";
// import { lineUpsOfTeams } from "@src/api/types/types";

// type KeyStat = {
//   title: string;
//   clubName: string;
//   stats: number[];
// };

// interface IMatchTabProps {
//   teamOneId: string;
//   teamTwoId: string;
//   fixtureId: string;
//   leagueId: string;
// }

// export const MatchTab: React.FC<IMatchTabProps> = ({
//   teamOneId,
//   teamTwoId,
//   fixtureId,
//   leagueId,
// }) => {
//   const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
//   const { oneMatchData } = useOneMatchDataStore();
//   const { leagueTeams } = useOneMatchDataStore();
//   const [loading, setLoading] = useState<boolean>(false);
//   const [lineUps, setLineUps] = useState<lineUpsOfTeams | null>(null);
//   const [grouped, setGrouped] = useState<any>(null);
//   const [keyStatsData, setKeyStatsData] = useState<KeyStat[] | null>(null);
//   const [topScorerInfo, setTopScorerInfo] = useState<
//     | {
//         name: string;
//         photo: string;
//         goals: number;
//       }[]
//     | null
//   >(null);

//   useEffect(() => {
//     const initializeData = async () => {
//       setLoading(true);
//       try {
//         const data = await getLineUpsOfTeams(
//           Number(fixtureId),
//           Number(teamOneId),
//         );
//         // console.log("Lineups data:", data);
//         setLineUps(data[0]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeData();
//   }, []);

//   useEffect(() => {
//     if (loading || !lineUps) {
//       return;
//     }
//     const grouped = groupByRow(lineUps.startXI);
//     setGrouped(grouped);
//   }, [lineUps, loading]);

//   useEffect(() => {
//     const initializeKeyStats = async () => {
//       setLoading(true);

//       try {
//         const [teamOneData, teamTwoData] = await Promise.all([
//           getKeyStatsOfTeamsByLeagueSeason(
//             2026,
//             Number(leagueId),
//             Number(teamOneId),
//           ),
//           getKeyStatsOfTeamsByLeagueSeason(
//             2026,
//             Number(leagueId),
//             Number(teamTwoId),
//           ),
//         ]);

//         const teamOne = teamOneData?.[0]?.league?.standings?.[0]?.[0];

//         const teamTwo = teamTwoData?.[0]?.league?.standings?.[0]?.[0];

//         if (!teamOne || !teamTwo) return;

//         const transformedData = [
//           {
//             title: "Position",
//             clubName: teamOne.team.name,
//             stats: [teamOne.rank, teamTwo.rank],
//           },
//           {
//             title: "Points",
//             clubName: teamOne.team.name,
//             stats: [teamOne.points, teamTwo.points],
//           },
//           {
//             title: "Played",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.played, teamTwo.all.played],
//           },
//           {
//             title: "Wins",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.win, teamTwo.all.win],
//           },
//           {
//             title: "Draws",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.draw, teamTwo.all.draw],
//           },
//           {
//             title: "Losses",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.lose, teamTwo.all.lose],
//           },
//           {
//             title: "Goals For",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.goals.for, teamTwo.all.goals.for],
//           },
//           {
//             title: "Goals Against",
//             clubName: teamOne.team.name,
//             stats: [teamOne.all.goals.against, teamTwo.all.goals.against],
//           },
//           {
//             title: "Goal Difference",
//             clubName: teamOne.team.name,
//             stats: [teamOne.goalsDiff, teamTwo.goalsDiff],
//           },
//         ];
//         setKeyStatsData(transformedData);
//       } catch (error) {
//         console.error("Error fetching key stats:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeKeyStats();
//   }, [leagueId, teamOneId, teamTwoId]);

//   useEffect(() => {
//     const initializeGetTopScorer = async () => {
//       setLoading(true);
//       try {
//         const topScorersData = await getTopScorerOfLeagueAndSeason2(
//           2026,
//           Number(leagueId),
//         );
//         if (topScorersData) {
//           const transformedData = topScorersData.map((item) => {
//             return {
//               name: item?.player?.name,
//               photo: item?.player?.photo,
//               goals: item?.statistics?.[0]?.goals?.total,
//             };
//           });
//           setTopScorerInfo(transformedData);
//         }
//       } catch (error) {
//         console.error("Error fetching top scorers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeGetTopScorer();
//   }, []);

//   return (
//     <ScrollContainer style={styles.scrollContainer}>
//       <View style={styles.timeLineCard}>
//         <CustomText type="semi-bold" size={12} lightGrey>
//           Timeline
//         </CustomText>
//         <View style={styles.arrowContainer}>
//           <MaterialCommunityIcons
//             name="arrow-collapse"
//             size={moderateScale(15)}
//             color={colors.white}
//           />
//         </View>
//       </View>
//       <CustomText
//         type="semi-bold"
//         size={12}
//         lightGrey
//         style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
//       >
//         {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
//         {oneMatchData?.[0]?.goals?.home ?? ""} -{" "}
//         {oneMatchData?.[0]?.goals?.away ?? "-"}
//       </CustomText>

//       <View style={styles.scoreBoardCard}>
//         <View>
//           {oneMatchInfo &&
//             oneMatchInfo.slice(0, 4).map((item, index) => (
//               <View
//                 key={index}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: moderateScale(12),
//                 }}
//               >
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.time}
//                 </CustomText>
//                 {item?.yellowCard ? (
//                   // <View style={styles.yellowCard} />
//                   <FontAwesome
//                     name="soccer-ball-o"
//                     size={moderateScale(17)}
//                     color={colors.white}
//                     style={{
//                       marginRight: moderateScale(10),
//                     }}
//                   />
//                 ) : (
//                   <Image
//                     source={require("@src/assets/png/recycle.png")}
//                     contentFit="contain"
//                     style={styles.recycleIcon}
//                   />
//                 )}
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.firstName}
//                 </CustomText>
//                 <CustomText type="medium" size={10} lightGrey>
//                   {item?.lastName}
//                 </CustomText>
//               </View>
//             ))}
//         </View>
//         <View style={{ alignSelf: "flex-end" }}>
//           {oneMatchInfo &&
//             oneMatchInfo.slice(0, 4).map((item, index) => (
//               <View
//                 key={index}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: moderateScale(12),
//                 }}
//               >
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.time}
//                 </CustomText>
//                 {item?.yellowCard ? (
//                   <View style={styles.yellowCard} />
//                 ) : (
//                   // <Image
//                   //   source={require("@src/assets/png/recycle.png")}
//                   //   contentFit='contain'
//                   //   style={styles.recycleIcon}
//                   // />
//                   <FontAwesome
//                     name="soccer-ball-o"
//                     size={moderateScale(17)}
//                     color={colors.white}
//                     style={{
//                       marginRight: moderateScale(10),
//                     }}
//                   />
//                 )}
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.firstName}
//                 </CustomText>
//                 <CustomText type="medium" size={10} lightGrey>
//                   {item?.lastName}
//                 </CustomText>
//               </View>
//             ))}
//         </View>
//         <View>
//           {oneMatchInfo &&
//             oneMatchInfo.slice(0, 1).map((item, index) => (
//               <View
//                 key={index}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: moderateScale(12),
//                 }}
//               >
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.time}
//                 </CustomText>
//                 {item?.yellowCard ? (
//                   <View style={styles.yellowCard} />
//                 ) : (
//                   <Image
//                     source={require("@src/assets/png/recycle.png")}
//                     contentFit="contain"
//                     style={styles.recycleIcon}
//                   />
//                 )}
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.firstName}
//                 </CustomText>
//                 <CustomText type="medium" size={10} lightGrey>
//                   {item?.lastName}
//                 </CustomText>
//               </View>
//             ))}
//         </View>
//         <View style={{ alignSelf: "flex-end" }}>
//           {oneMatchInfo &&
//             oneMatchInfo.slice(0, 2).map((item, index) => (
//               <View
//                 key={index}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: moderateScale(12),
//                 }}
//               >
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.time}
//                 </CustomText>
//                 {item?.yellowCard ? (
//                   <View style={styles.yellowCard} />
//                 ) : (
//                   <Image
//                     source={require("@src/assets/png/recycle.png")}
//                     contentFit="contain"
//                     style={styles.recycleIcon}
//                   />
//                 )}
//                 <CustomText type="bold" size={10} lightGrey>
//                   {item?.firstName}
//                 </CustomText>
//                 <CustomText type="medium" size={10} lightGrey>
//                   {item?.lastName}
//                 </CustomText>
//               </View>
//             ))}
//         </View>
//       </View>
//       <View
//         style={[
//           styles.scoreBoardCard,
//           {
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           },
//         ]}
//       >
//         <CustomText type="medium" size={12} lightGrey>
//           Show Substitution
//         </CustomText>
//         <SwitchToggle
//           switchOn={isSwitchOn}
//           onPress={() => {
//             setIsSwitchOn(!isSwitchOn);
//           }}
//           circleColorOff={colors.lightGrey}
//           circleColorOn={colors.purple}
//           backgroundColorOn={colors.lightGrey}
//           backgroundColorOff={colors.white}
//           containerStyle={{
//             width: 50,
//             height: 24,
//             borderRadius: 20,
//             overflow: "hidden",
//             paddingRight: moderateScale(50),
//           }}
//           circleStyle={{
//             width: 20,
//             height: 22,
//             borderRadius: 11,
//           }}
//         />
//       </View>
//       <CustomText
//         type="semi-bold"
//         size={12}
//         lightGrey
//         style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
//       >
//         Top Goal Scorer
//       </CustomText>
//       <View
//         style={{
//           backgroundColor: "#242222",
//           paddingVertical: moderateScale(10),
//           paddingHorizontal: moderateScale(10),
//           borderRadius: moderateScale(10),
//           justifyContent: "flex-end",
//           gap: moderateScale(10),
//         }}
//       >
//         {topScorerInfo &&
//           topScorerInfo.map((player, index) => (
//             <View
//               key={index}
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: moderateScale(2),
//               }}
//             >
//               <CustomText type="semi-bold" size={12} lightGrey>
//                 {player?.name}
//               </CustomText>
//               {player?.goals > 0 &&
//                 Array.from({ length: player.goals }).map((_, index) => (
//                   <FontAwesome
//                     key={index}
//                     name="soccer-ball-o"
//                     size={moderateScale(17)}
//                     color={colors.white}
//                     style={{
//                       marginRight: moderateScale(10),
//                     }}
//                   />
//                 ))}
//             </View>
//           ))}
//       </View>
//       {/* <TableTab
//         goalScorerData={leagueTeams}
//         leftText={oneMatchData?.[0]?.league.name.toUpperCase()}
//         leftTitleText="Club Names"
//         middleTitleText="Venue"
//       /> */}

//       <View style={styles.keyStatsContainer}>
//         {keyStatsData?.map((item, index) => (
//           <View key={index} style={styles.keyStatRow}>
//             <CustomText size={12} type="semi-bold" lightGrey>
//               {item.stats[0]}
//             </CustomText>

//             <View style={styles.statCenter}>
//               <CustomText
//                 size={10}
//                 type="medium"
//                 lightGrey
//                 style={{ textAlign: "center" }}
//               >
//                 {item.title}
//               </CustomText>

//               <View style={styles.barContainer}>
//                 <View
//                   style={[
//                     styles.leftBar,
//                     {
//                       flex:
//                         item.stats[0] /
//                         Math.max(item.stats[0], item.stats[1], 1),
//                     },
//                   ]}
//                 />

//                 <View
//                   style={[
//                     styles.rightBar,
//                     {
//                       flex:
//                         item.stats[1] /
//                         Math.max(item.stats[0], item.stats[1], 1),
//                     },
//                   ]}
//                 />
//               </View>
//             </View>

//             <CustomText size={12} type="semi-bold" lightGrey>
//               {item.stats[1]}
//             </CustomText>
//           </View>
//         ))}
//       </View>
//       {/* </View> */}

//       <View style={styles.timeLineCard}>
//         <CustomText type="medium" size={12} lightGrey>
//           Relevant Matches
//         </CustomText>
//       </View>

//       <CustomText
//         type="semi-bold"
//         size={12}
//         lightGrey
//         style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
//       >
//         JUNE 19 (FT)
//       </CustomText>

//       {Array.from({ length: 2 }).map((_, index) => (
//         <View style={styles.scoreContainerCard}>
//           <View style={styles.scoreContainer}>
//             <View style={styles.clubImgContainer}>
//               <Image
//                 source={
//                   index === 0
//                     ? require("@src/assets/png/totheham.png")
//                     : require("@src/assets/png/liverpool.png")
//                 }
//                 contentFit="fill"
//                 style={styles.clubImg}
//               />
//             </View>
//             <CustomText type="bold" size={20} white>
//               {index === 0 ? "1 - 0" : "0 - 1"}
//             </CustomText>
//             <View style={styles.clubImgContainer}>
//               <Image
//                 source={
//                   index === 0
//                     ? require("@src/assets/png/chelsea.png")
//                     : require("@src/assets/png/arsenal.png")
//                 }
//                 contentFit="fill"
//                 style={styles.clubImg}
//               />
//             </View>
//           </View>
//           <View
//             style={[
//               styles.scoreContainer,
//               {
//                 paddingHorizontal: moderateScale(15),
//                 paddingBottom: moderateScale(10),
//               },
//             ]}
//           >
//             <CustomText type="semi-bold" size={10} lightGrey>
//               {index === 0 ? "TOTHEHAM" : "LIVERPOOL"}
//             </CustomText>
//             <CustomText type="semi-bold" size={10} lightGrey>
//               FINISHED
//             </CustomText>
//             <CustomText type="semi-bold" size={10} lightGrey>
//               {index === 0 ? "CHELSEA" : "ARSENAL"}
//             </CustomText>
//           </View>
//         </View>
//       ))}

//       <View
//         style={[
//           styles.timeLineCard,
//           {
//             flexDirection: "column",
//           },
//         ]}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "100%",
//             paddingBottom: moderateScale(5),
//           }}
//         >
//           <CustomText type="semi-bold" size={12} lightGrey>
//             CONFIRMED LINEUPS
//           </CustomText>
//           <View style={styles.arrowContainer}>
//             <MaterialCommunityIcons
//               name="arrow-collapse"
//               size={moderateScale(15)}
//               color={colors.white}
//             />
//           </View>
//         </View>
//         {/* <View
//           style={{
//             width: "100%",
//             height: DVH(47),
//             overflow: "hidden",
//           }}>
//           <ImageBackground
//             contentFit='fill'
//             style={{
//               width: "100%",
//               height: "100%",
//             }}
//             source={require("@src/assets/jpg/football-field.jpg")}>
//             <View style={{ flex: 1 }}>
//               {Object.entries(grouped).map(([row, players]: any) =>
//                 players.map((player: any, index: number) => {
//                   const style = getPlayerStyle(
//                     Number(row),
//                     index,
//                     players.length,
//                   );

//                   return (
//                     <View key={player.id} style={style as StyleProp<ViewStyle>}>
//                       <View
//                         style={{
//                           width: 50,
//                           height: 50,
//                           borderRadius: 25,
//                           backgroundColor: `#${lineUps.team.colors.player.primary}`,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderWidth: 2,
//                           borderColor: `#${lineUps.team.colors.player.border}`,
//                         }}>
//                         <CustomText type='bold' white size={12}>
//                           {player.name.split(" ").pop()}
//                         </CustomText>
//                       </View>

//                       <CustomText
//                         white
//                         size={10}
//                         style={{
//                           marginTop: 4,
//                           textAlign: "center",
//                         }}>
//                         {player?.name}
//                       </CustomText>
//                     </View>
//                   );
//                 }),
//               )}
//             </View>
//           </ImageBackground>
//         </View> */}

//         <View
//           style={{
//             width: "100%",
//             height: DVH(47),
//             overflow: "hidden",
//           }}
//         >
//           <ImageBackground
//             contentFit="fill"
//             style={{
//               width: "100%",
//               height: "100%",
//             }}
//             source={require("@src/assets/jpg/football-field.jpg")}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 marginLeft: moderateScale(-50),
//               }}
//             >
//               {/* {Object.entries(grouped || {}).map(([row, players]: any) =>
//                 players.map((player: any, index: number) => {
//                   const style = getPlayerStyle(
//                     Number(row),
//                     index,
//                     players.length,
//                   );

//                   return (
//                     <View key={player.id} style={style as StyleProp<ViewStyle>}>

//                       <View
//                         style={{
//                           width: moderateScale(50),
//                           height: moderateScale(50),
//                           borderRadius: moderateScale(25),
//                           backgroundColor: colors.purple,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderWidth: 2,
//                           borderColor: `#${lineUps?.team?.colors?.player?.border ?? "ffffff"}`,
//                         }}
//                       >
//                         <CustomText
//                           type="bold"
//                           white
//                           size={10}
//                           style={{
//                             textAlign: "center",
//                           }}
//                         >
//                           {player.name.split(" ").pop()}
//                         </CustomText>
//                       </View>

//                       <CustomText
//                         white
//                         size={10}
//                         style={{
//                           marginTop: 4,
//                           textAlign: "center",
//                         }}
//                       >
//                         {player?.name}
//                       </CustomText>
//                     </View>
//                   );
//                 }),
//               )} */}
//             </View>
//           </ImageBackground>
//         </View>
//       </View>

//       <View
//         style={{
//           paddingVertical: DVH(10),
//         }}
//       />
//     </ScrollContainer>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingVertical: moderateScale(10),
//     paddingHorizontal: moderateScale(5),
//   },
//   timeLineCard: {
//     backgroundColor: "#242222",
//     paddingVertical: moderateScale(10),
//     paddingHorizontal: moderateScale(10),
//     borderRadius: moderateScale(10),
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   arrowContainer: {
//     padding: moderateScale(10),
//     borderRadius: moderateScale(100),
//     backgroundColor: colors.black,
//   },
//   scoreBoardCard: {
//     backgroundColor: "#242222",
//     paddingVertical: moderateScale(20),
//     paddingHorizontal: moderateScale(10),
//     borderRadius: moderateScale(10),
//     gap: moderateScale(20),
//   },
//   yellowCard: {
//     paddingVertical: DVH(1.25),
//     paddingHorizontal: DVW(2.5),
//     borderRadius: moderateScale(100),
//     backgroundColor: "#FFCD57",
//     marginBottom: moderateScale(5),
//   },
//   recycleIcon: {
//     width: DVW(4),
//     height: DVH(2),
//   },
//   keyStatsIconContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     paddingBottom: moderateScale(5),
//   },
//   keyStatsSubCard: {
//     paddingVertical: moderateScale(10),
//     paddingHorizontal: moderateScale(7),
//     borderRadius: moderateScale(7),
//     backgroundColor: colors.black,
//     gap: moderateScale(5),
//     overflow: "hidden",
//     width: "32%",
//   },

//   clubImgContainer: {
//     overflow: "hidden",
//     borderRadius: moderateScale(10),
//     padding: moderateScale(10),
//     backgroundColor: "#242222",
//   },
//   clubImg: {
//     width: DVW(8),
//     height: Platform.OS === "ios" ? DVH(3) : DVH(4),
//   },
//   scoreContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: moderateScale(10),
//   },
//   scoreContainerCard: {
//     backgroundColor: "#242222",
//     marginBottom: moderateScale(10),
//     borderRadius: moderateScale(10),
//   },
//   keyStatsContainer: {
//     gap: moderateScale(16),
//     marginBottom: moderateScale(16),
//   },

//   keyStatRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: moderateScale(12),
//   },

//   statCenter: {
//     flex: 1,
//     gap: moderateScale(6),
//   },

//   barContainer: {
//     flexDirection: "row",
//     height: 6,
//     gap: 4,
//   },

//   leftBar: {
//     backgroundColor: colors.purple,
//     borderRadius: 999,
//   },

//   rightBar: {
//     backgroundColor: colors.lightGrey,
//     borderRadius: 999,
//   },
// });

import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ImageBackground } from "expo-image";
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { useOneMatchDataStore } from "@src/api/store/app";
import {
  getMatchStatus,
  groupByRow,
  transformStatistics,
} from "@src/helper/utils";
import {
  getKeyStatsOfTeamsByLeagueSeason,
  getLineUpsOfTeams,
  getTopScorerOfLeagueAndSeason2,
  getTopYellowCardsOfLeagueAndSeason,
  getTopRedCardsOfLeagueAndSeason,
  getStatisticsOfFixturesByFixtureId,
} from "@src/api/services/football/football.service";
import {
  lineUpsOfTeams,
  StatisticsOfFeatures,
  TopScorerEntry,
} from "@src/api/types/types";

export type KeyStat = {
  title: string;
  clubName: string;
  stats: [number, number]; // numeric, used for bar flex
  displayStats: [string | number, string | number]; // shown as text
};

type PlayerStatInfo = {
  name: string;
  photo: string;
  count: number;
};

const transformTopStatData = (
  data: TopScorerEntry[],
  getCount: (item: TopScorerEntry) => number | undefined,
): PlayerStatInfo[] =>
  data.map((item) => ({
    name: item?.player?.name,
    photo: item?.player?.photo,
    count: getCount(item) ?? 0,
  }));

const PlayerStatList: React.FC<{
  data: PlayerStatInfo[] | null;
  renderIcon: (key: number) => React.ReactNode;
}> = ({ data, renderIcon }) => (
  <View
    style={{
      backgroundColor: "#242222",
      paddingVertical: moderateScale(10),
      paddingHorizontal: moderateScale(10),
      borderRadius: moderateScale(10),
      justifyContent: "flex-end",
      gap: moderateScale(10),
    }}
  >
    {data?.map((player, index) => (
      <View
        key={index}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(2),
        }}
      >
        <CustomText type="semi-bold" size={12} lightGrey>
          {player?.name}
        </CustomText>
        {player?.count > 0 &&
          Array.from({ length: player.count }).map((_, i) => renderIcon(i))}
      </View>
    ))}
  </View>
);

interface IMatchTabProps {
  teamOneId: string;
  teamTwoId: string;
  fixtureId: string;
  leagueId: string;
}

export const MatchTab: React.FC<IMatchTabProps> = ({
  teamOneId,
  teamTwoId,
  fixtureId,
  leagueId,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const { oneMatchData } = useOneMatchDataStore();
  const { leagueTeams } = useOneMatchDataStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [lineUps, setLineUps] = useState<lineUpsOfTeams | null>(null);
  const [grouped, setGrouped] = useState<any>(null);
  const [keyStatsData, setKeyStatsData] = useState<KeyStat[] | null>(null);
  const [topScorerInfo, setTopScorerInfo] = useState<PlayerStatInfo[] | null>(
    null,
  );
  const [yellowCardInfo, setYellowCardInfo] = useState<PlayerStatInfo[] | null>(
    null,
  );
  const [redCardInfo, setRedCardInfo] = useState<PlayerStatInfo[] | null>(null);
  const [statistics, setStatistics] = useState<KeyStat[] | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      try {
        const data = await getLineUpsOfTeams(
          Number(fixtureId),
          Number(teamOneId),
        );
        // console.log("Lineups data:", data);
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
    if (loading || !lineUps?.startXI?.length) {
      return;
    }
    const grouped = groupByRow(lineUps.startXI);
    setGrouped(grouped);
  }, [lineUps, loading]);

  useEffect(() => {
    const initializeKeyStats = async () => {
      setLoading(true);

      try {
        const [teamOneData, teamTwoData] = await Promise.all([
          getKeyStatsOfTeamsByLeagueSeason(
            2026,
            Number(leagueId),
            Number(teamOneId),
          ),
          getKeyStatsOfTeamsByLeagueSeason(
            2026,
            Number(leagueId),
            Number(teamTwoId),
          ),
        ]);

        const teamOne = teamOneData?.[0]?.league?.standings?.[0]?.[0];

        const teamTwo = teamTwoData?.[0]?.league?.standings?.[0]?.[0];

        if (!teamOne || !teamTwo) return;

        const transformedData = [
          {
            title: "Position",
            clubName: teamOne.team.name,
            stats: [teamOne.rank, teamTwo.rank],
          },
          {
            title: "Points",
            clubName: teamOne.team.name,
            stats: [teamOne.points, teamTwo.points],
          },
          {
            title: "Played",
            clubName: teamOne.team.name,
            stats: [teamOne.all.played, teamTwo.all.played],
          },
          {
            title: "Wins",
            clubName: teamOne.team.name,
            stats: [teamOne.all.win, teamTwo.all.win],
          },
          {
            title: "Draws",
            clubName: teamOne.team.name,
            stats: [teamOne.all.draw, teamTwo.all.draw],
          },
          {
            title: "Losses",
            clubName: teamOne.team.name,
            stats: [teamOne.all.lose, teamTwo.all.lose],
          },
          {
            title: "Goals For",
            clubName: teamOne.team.name,
            stats: [teamOne.all.goals.for, teamTwo.all.goals.for],
          },
          {
            title: "Goals Against",
            clubName: teamOne.team.name,
            stats: [teamOne.all.goals.against, teamTwo.all.goals.against],
          },
          {
            title: "Goal Difference",
            clubName: teamOne.team.name,
            stats: [teamOne.goalsDiff, teamTwo.goalsDiff],
          },
        ];
        setKeyStatsData(transformedData);
      } catch (error) {
        console.error("Error fetching key stats:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeKeyStats();
  }, [leagueId, teamOneId, teamTwoId]);

  useEffect(() => {
    const initializeGetTopStats = async () => {
      setLoading(true);
      try {
        const [topScorersData, yellowCardsData, redCardsData] =
          await Promise.all([
            getTopScorerOfLeagueAndSeason2(2026, Number(leagueId)),
            getTopYellowCardsOfLeagueAndSeason(2026, Number(leagueId)),
            getTopRedCardsOfLeagueAndSeason(2026, Number(leagueId)),
          ]);

        if (topScorersData) {
          setTopScorerInfo(
            transformTopStatData(
              topScorersData,
              (item) => item?.statistics?.[0]?.goals?.total,
            ),
          );
        }
        if (yellowCardsData) {
          setYellowCardInfo(
            transformTopStatData(
              yellowCardsData,
              (item) => item?.statistics?.[0]?.cards?.yellow,
            ),
          );
        }
        if (redCardsData) {
          setRedCardInfo(
            transformTopStatData(
              redCardsData,
              (item) => item?.statistics?.[0]?.cards?.red,
            ),
          );
        }
      } catch (error) {
        console.error("Error fetching top stats:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeGetTopStats();
  }, [leagueId]);

  useEffect(() => {
    const initiateGetKeyStats = async () => {
      setLoading(true);
      try {
        const data = await getStatisticsOfFixturesByFixtureId(
          Number(fixtureId),
        );
        if (data) {
          setStatistics(transformStatistics(data));
        }
      } catch (error) {
        console.error("Error fetching fixture statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    initiateGetKeyStats(); // ← this call was missing
  }, [fixtureId]);

  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View style={styles.timeLineCard}>
        <CustomText type="semi-bold" size={12} lightGrey>
          Timeline
        </CustomText>
        <View style={styles.arrowContainer}>
          <MaterialCommunityIcons
            name="arrow-collapse"
            size={moderateScale(15)}
            color={colors.white}
          />
        </View>
      </View>
      <CustomText
        type="semi-bold"
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
      >
        {getMatchStatus(oneMatchData?.[0]?.fixture?.status?.short)}
        {oneMatchData?.[0]?.goals?.home ?? ""} -{" "}
        {oneMatchData?.[0]?.goals?.away ?? "-"}
      </CustomText>
      <View
        style={[
          styles.scoreBoardCard,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <CustomText type="medium" size={12} lightGrey>
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
        type="semi-bold"
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
      >
        Top Goal Scorer
      </CustomText>
      <PlayerStatList
        data={topScorerInfo}
        renderIcon={(i) => (
          <FontAwesome
            key={i}
            name="soccer-ball-o"
            size={moderateScale(17)}
            color={colors.white}
            style={{ marginRight: moderateScale(10) }}
          />
        )}
      />

      <CustomText
        type="semi-bold"
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
      >
        Top Yellow Cards
      </CustomText>
      <PlayerStatList
        data={yellowCardInfo}
        renderIcon={(i) => (
          <View key={i} style={[styles.cardIcon, styles.yellowCardIcon]} />
        )}
      />

      <CustomText
        type="semi-bold"
        size={12}
        lightGrey
        style={{ textAlign: "center", paddingVertical: moderateScale(10) }}
      >
        Top Red Cards
      </CustomText>
      <PlayerStatList
        data={redCardInfo}
        renderIcon={(i) => (
          <View key={i} style={[styles.cardIcon, styles.redCardIcon]} />
        )}
      />

      <View style={styles.keyStatsContainer}>
        {statistics?.map((item, index) => (
          <View key={index} style={styles.keyStatRow}>
            <CustomText size={12} type="semi-bold" lightGrey>
              {item.displayStats[0]}
            </CustomText>

            <View style={styles.statCenter}>
              <CustomText
                size={10}
                type="medium"
                lightGrey
                style={{ textAlign: "center" }}
              >
                {item.title}
              </CustomText>

              <View style={styles.barContainer}>
                <View
                  style={[
                    styles.leftBar,
                    {
                      flex:
                        item.stats[0] /
                        Math.max(item.stats[0], item.stats[1], 1),
                    },
                  ]}
                />
                <View
                  style={[
                    styles.rightBar,
                    {
                      flex:
                        item.stats[1] /
                        Math.max(item.stats[0], item.stats[1], 1),
                    },
                  ]}
                />
              </View>
            </View>

            <CustomText size={12} type="semi-bold" lightGrey>
              {item.displayStats[1]}
            </CustomText>
          </View>
        ))}
      </View>

      <View
        style={[
          styles.timeLineCard,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: moderateScale(5),
          }}
        >
          <CustomText type="semi-bold" size={12} lightGrey>
            CONFIRMED LINEUPS
          </CustomText>
          <View style={styles.arrowContainer}>
            <MaterialCommunityIcons
              name="arrow-collapse"
              size={moderateScale(15)}
              color={colors.white}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: DVH(47),
            overflow: "hidden",
          }}
        >
          <ImageBackground
            contentFit="fill"
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("@src/assets/jpg/football-field.jpg")}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                marginLeft: moderateScale(-50),
              }}
            >
              {/* {Object.entries(grouped || {}).map(([row, players]: any) =>
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
                          width: moderateScale(50),
                          height: moderateScale(50),
                          borderRadius: moderateScale(25),
                          backgroundColor: colors.purple,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: `#${lineUps?.team?.colors?.player?.border ?? "ffffff"}`,
                        }}
                      >
                        <CustomText
                          type="bold"
                          white
                          size={10}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {player.name.split(" ").pop()}
                        </CustomText>
                      </View>

                      <CustomText
                        white
                        size={10}
                        style={{
                          marginTop: 4,
                          textAlign: "center",
                        }}
                      >
                        {player?.name}
                      </CustomText>
                    </View>
                  );
                }),
              )} */}
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
  cardIcon: {
    width: moderateScale(10),
    height: moderateScale(14),
    borderRadius: moderateScale(2),
    marginRight: moderateScale(10),
  },
  yellowCardIcon: {
    backgroundColor: "#FFCD57",
  },
  redCardIcon: {
    backgroundColor: "#FF4D4D",
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
  keyStatsContainer: {
    gap: moderateScale(16),
    marginBottom: moderateScale(16),
  },

  keyStatRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(12),
  },

  statCenter: {
    flex: 1,
    gap: moderateScale(6),
  },

  barContainer: {
    flexDirection: "row",
    height: 6,
    gap: 4,
  },

  leftBar: {
    backgroundColor: colors.purple,
    borderRadius: 999,
  },

  rightBar: {
    backgroundColor: colors.lightGrey,
    borderRadius: 999,
  },
});
