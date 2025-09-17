import { TeamCard } from "@src/cards";
import { SectionHeader } from "@src/common";
import { teamsData } from "@src/constants/user-selection-steps";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const TeamTab: React.FC<{}> = () => {
  const [addedTeams, addTeams] = useState<string[]>([]);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onNavigateToTeam = (title: string, desc: string) => {
    navigation.navigate(appScreenNames.TEAM, {
      screenTitle: title,
      screenDesc: desc,
    });
  };

  return (
    <View>
      <View style={styles.cardMainContainer}>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() => onNavigateToTeam("LaLiga", "Spain | Football")}>
          <Image
            source={require("@src/assets/png/LaLiga.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() => onNavigateToTeam("NPFL", "Spain | Football")}>
          <Image
            source={require("@src/assets/png/Npfl.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardMainContainer}>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() =>
            onNavigateToTeam("Premier League", "Spain | Football")
          }>
          <Image
            source={require("@src/assets/png/premier-league.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() => onNavigateToTeam("League1", "Spain | Football")}>
          <Image
            source={require("@src/assets/png/ligue1.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <SectionHeader
        leftText='RECOMMENDATIONS'
        leftTextStyle={{
          fontFamily: fontFamily.regular,
        }}
        actionText=' '
      />
      <FlatList
        data={teamsData}
        ListFooterComponent={
          <View
            style={{
              paddingVertical: Platform.OS === "ios" ? DVH(40) : DVH(45),
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
                    (team) => team.toLowerCase() === selectedTeam.toLowerCase()
                  );
                  if (!isTeamExisting) {
                    //update with new selected team if not existing
                    const updatedTeams = [...addedTeams, selectedTeam];
                    addTeams(updatedTeams);
                  } else {
                    //remove from selected team if existing
                    const removedTeam = addedTeams.filter(
                      (team) =>
                        team.toLowerCase() !== selectedTeam.toLowerCase()
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
  );
};

const styles = StyleSheet.create({
  cardMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // gap: moderateScale(5),
  },
  btnCardContainer: {
    width: "49%",
    height: DVH(12),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginBottom: moderateScale(10),
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
