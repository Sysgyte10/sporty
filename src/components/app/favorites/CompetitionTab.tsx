import { TeamCard } from "@src/cards";
import { FormHeader, SectionHeader } from "@src/common";
import { CustomButton } from "@src/components/shared";
import { teamsData } from "@src/constants/user-selection-steps";
import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { FlatList, Platform, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export const CompetitionTab: React.FC<{}> = () => {
  const [addedTeams, addTeams] = useState<string[]>([]);
  return (
    <View>
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
        onPress={() => {}}
      />

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
