import { TeamCard } from "@src/cards";
import { SectionHeader } from "@src/common";
import { teamsData } from "@src/constants/user-selection-steps";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const FixturesTab: React.FC<{}> = () => {
  const [addedTeams, addTeams] = useState<string[]>([]);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onNavigateToTeam = (
    title: string,
    desc: string,
    image: ImageSourcePropType
  ) => {
    navigation.navigate(appScreenNames.ANOTHER_TEAM, {
      screenTitle: title,
      screenDesc: desc,
      image: image,
    });
  };

  return (
    <View>
      <View style={styles.cardMainContainer}>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() =>
            onNavigateToTeam(
              "Manchester United",
              "England | Football",
              require("@src/assets/png/man-u.png")
            )
          }>
          <Image
            source={require("@src/assets/png/man-u-card.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() =>
            onNavigateToTeam(
              "Liverpool",
              "England | Football",
              require("@src/assets/png/liverpool.png")
            )
          }>
          <Image
            source={require("@src/assets/png/liverpool-card.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardMainContainer}>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() =>
            onNavigateToTeam(
              "Arsenal",
              "England | Football",
              require("@src/assets/png/arsenal.png")
            )
          }>
          <Image
            source={require("@src/assets/png/arsenal-card.png")}
            contentFit='fill'
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCardContainer}
          onPress={() =>
            onNavigateToTeam(
              "Manchester City",
              "England | Football",
              require("@src/assets/png/totheham.png")
            )
          }>
          <Image
            source={require("@src/assets/png/man-city-card.png")}
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
