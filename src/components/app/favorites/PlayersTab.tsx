import { TeamCard } from "@src/cards";
import { FormHeader, SectionHeader } from "@src/common";
import { CustomButton } from "@src/components/shared";
import { playersData, teamsData } from "@src/constants/user-selection-steps";
import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
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
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const PlayersTab: React.FC<{}> = () => {
  const [addedTeams, addTeams] = useState<string[]>([]);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [differentTeam, setDifferentTeam] = useState<boolean>(false);

  const onNavigateToTeam = (
    title: string,
    desc: string,
    image: ImageSourcePropType
  ) => {
    navigation.navigate(appScreenNames.ANOTHER_PLAYER_TEAM, {
      screenTitle: title,
      screenDesc: desc,
      image: image,
    });
  };
  return (
    <View>
      {differentTeam && (
        <View>
          <View style={styles.cardMainContainer}>
            <TouchableOpacity
              style={styles.btnCardContainer}
              onPress={() =>
                onNavigateToTeam(
                  "Marcus Rashford",
                  "Manchester United",
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
                  "Mohamed Salah",
                  "Liverpool",
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
                  "Bukayo Saka",
                  "Arsenal",
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
                  "Harry Kane",
                  "Tottenham Hotspur",
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
        </View>
      )}
      {!differentTeam && (
        <>
          <FormHeader
            title="Let's get started"
            description='Competitions will appear at the top of your scores tab.'
          />
          <CustomButton
            title='Looking for a different competition? Click here.'
            buttonType='Outline'
            textSize={14}
            textType='medium'
            textLightGrey
            black
            btnStyle={{
              borderWidth: DVW(0.3),
              borderColor: colors.lightGrey,
              marginVertical: moderateScale(10),
            }}
            onPress={() => setDifferentTeam(!differentTeam)}
          />
        </>
      )}

      <SectionHeader
        leftText='RECOMMENDATIONS'
        leftTextStyle={{
          fontFamily: fontFamily.regular,
        }}
        actionText=' '
      />
      <FlatList
        data={playersData}
        ListFooterComponent={
          <View
            style={{
              paddingVertical: Platform.OS === "ios" ? DVH(30) : DVH(35),
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
